import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type { StompSubscription } from '@stomp/stompjs';
import * as StompJS from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { useState, useEffect, useCallback, useRef } from 'react';
import {
  getChatRoom,
  createChatRoom,
  deleteChatRoom,
  uploadChatImage,
  getChatRooms,
  getChatMessages,
  getChatEstimate,
} from '@/api/services/chatService';

const SOCKET_URL = 'http://43.201.137.131:8080/ws-stomp';
const RECONNECT_DELAY = 5000;
const MAX_RETRIES = 5;

export interface SocketMessage {
  senderId: number;
  messageType: 'ENTER' | 'EXIT' | 'TEXT' | 'IMAGE' | 'COMPLETE';
  messageContent: string;
  isMine: boolean;
  sendTime: string;
  isOtherRead: boolean;
  isEstimateComplete?: boolean;
}

interface StompError {
  headers: { [key: string]: string };
  command: string;
  body?: string;
}

const createStompClient = (
  onConnect: () => void,
  onError: (error: StompError | Event) => void,
  retryCount = 0
): StompJS.Client | null => {
  try {
    const socket = new SockJS(SOCKET_URL);
    const client = new StompJS.Client({
      webSocketFactory: () => socket,
      connectHeaders: {},
      debug: (str) => {
        console.log('STOMP:', str);
      },
      reconnectDelay: RECONNECT_DELAY,
    });

    client.onConnect = () => {
      console.log('Connected to STOMP');
      onConnect();
    };

    client.onStompError = (frame) => {
      console.error('STOMP error:', frame);
      onError(frame);
    };

    client.onWebSocketError = (event) => {
      console.error('WebSocket error:', event);
      onError(event);
    };

    client.onDisconnect = () => {
      console.log('Disconnected from STOMP');
      if (retryCount < MAX_RETRIES) {
        setTimeout(() => {
          console.log(`Attempting to reconnect (${retryCount + 1}/${MAX_RETRIES})...`);
          createStompClient(onConnect, onError, retryCount + 1);
        }, RECONNECT_DELAY);
      }
    };

    return client;
  } catch (error) {
    console.error('Failed to create STOMP client:', error);
    onError(error as Event);
    return null;
  }
};

export const useSocket = (userId: number) => {
  const [client, setClient] = useState<StompJS.Client | null>(null);
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState<StompError | Event | null>(null);
  const subscriptionsRef = useRef(new Map<number, StompSubscription>());
  const reconnectTimeoutRef = useRef<number>();

  useEffect(() => {
    let stompClient: StompJS.Client | null = null;
    let mounted = true;

    const handleConnect = () => {
      if (mounted) {
        setConnected(true);
        setError(null);
      }
    };

    const handleError = (err: StompError | Event) => {
      if (mounted) {
        setError(err);
        setConnected(false);
      }
    };

    if (userId) {
      stompClient = createStompClient(handleConnect, handleError);
      if (stompClient) {
        setClient(stompClient);
        stompClient.activate();
      }
    }

    return () => {
      mounted = false;

      if (reconnectTimeoutRef.current) {
        window.clearTimeout(reconnectTimeoutRef.current);
        reconnectTimeoutRef.current = undefined;
      }

      subscriptionsRef.current.forEach((subscription) => {
        try {
          subscription.unsubscribe();
        } catch (err) {
          console.error('Error unsubscribing:', err);
        }
      });
      subscriptionsRef.current.clear();

      if (stompClient?.connected) {
        stompClient.deactivate();
      }
    };
  }, [userId]);

  const subscribeToChat = useCallback(
    (chatRoomId: number, onMessageReceived: (message: SocketMessage) => void) => {
      if (!client?.connected) {
        console.error('STOMP client not connected');
        return () => undefined;
      }

      console.log(`Subscribing to chat room ${chatRoomId}`);

      try {
        const currentTime = new Date().toLocaleTimeString('ko-KR', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        });

        const enterMessage: SocketMessage = {
          senderId: userId,
          messageType: 'ENTER',
          messageContent: '',
          isMine: true,
          sendTime: currentTime,
          isOtherRead: false,
        };

        client.publish({
          destination: `/pub/chat.message.${chatRoomId}`,
          body: JSON.stringify(enterMessage),
        });

        const subscription = client.subscribe(
          `/exchange/chat.exchange/room.${chatRoomId}`,
          (message) => {
            try {
              const data = JSON.parse(message.body) as SocketMessage;
              onMessageReceived(data);
            } catch (error) {
              console.error('Failed to parse message:', error);
            }
          }
        );

        subscriptionsRef.current.set(chatRoomId, subscription);

        return () => {
          if (client.connected) {
            const exitMessage: SocketMessage = {
              senderId: userId,
              messageType: 'EXIT',
              messageContent: '',
              isMine: true,
              sendTime: currentTime,
              isOtherRead: false,
            };

            client.publish({
              destination: `/pub/chat.message.${chatRoomId}`,
              body: JSON.stringify(exitMessage),
            });
          }

          subscription.unsubscribe();
          subscriptionsRef.current.delete(chatRoomId);
        };
      } catch (err) {
        console.error('Error subscribing to chat:', err);
        return () => undefined;
      }
    },
    [client, userId]
  );

  const sendMessage = useCallback(
    async (chatRoomId: number, message: SocketMessage): Promise<void> => {
      if (!client?.connected) {
        throw new Error('STOMP client not connected');
      }

      try {
        await client.publish({
          destination: `/pub/chat.message.${chatRoomId}`,
          body: JSON.stringify(message),
        });
      } catch (err) {
        console.error('Error sending message:', err);
        throw err;
      }
    },
    [client]
  );

  const unsubscribeFromChat = useCallback((chatRoomId: number) => {
    const subscription = subscriptionsRef.current.get(chatRoomId);
    if (subscription) {
      try {
        subscription.unsubscribe();
        subscriptionsRef.current.delete(chatRoomId);
      } catch (err) {
        console.error('Error unsubscribing from chat:', err);
      }
    }
  }, []);

  return {
    connected,
    error,
    subscribeToChat,
    unsubscribeFromChat,
    sendMessage,
  };
};

export const useChatRooms = (userId: number, read: number, page: number, searchName?: string) => {
  return useQuery({
    queryKey: ['chatRooms', userId, read, page, searchName],
    queryFn: () => getChatRooms(userId, read, page, searchName),
    enabled: Boolean(userId),
  });
};

export const useChatRoom = (userId: number, chatRoomId: number) => {
  return useQuery({
    queryKey: ['chatRoom', userId, chatRoomId],
    queryFn: () => getChatRoom(userId, chatRoomId),
    enabled: Boolean(userId) && Boolean(chatRoomId),
  });
};

export const useChatMessages = (userId: number, chatRoomId: number, page: number) => {
  return useQuery({
    queryKey: ['chatMessages', userId, chatRoomId, page],
    queryFn: () => getChatMessages(userId, chatRoomId, page),
    enabled: Boolean(userId) && Boolean(chatRoomId),
  });
};

export const useCreateChatRoom = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, estimateId }: { userId: number; estimateId: number }) =>
      createChatRoom(userId, estimateId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['chatRooms'] });
    },
  });
};

export const useDeleteChatRoom = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, chatRoomId }: { userId: number; chatRoomId: number }) =>
      deleteChatRoom(userId, chatRoomId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['chatRooms'] });
    },
  });
};

export const useUploadChatImage = () => {
  return useMutation({
    mutationFn: ({
      userId,
      chatRoomId,
      image,
    }: {
      userId: number;
      chatRoomId: number;
      image: File;
    }) => uploadChatImage(userId, chatRoomId, image),
  });
};

export const useChatEstimate = (userId: number, chatRoomId: number) => {
  return useQuery({
    queryKey: ['chatEstimate', userId, chatRoomId],
    queryFn: () => getChatEstimate(userId, chatRoomId),
    enabled: Boolean(userId) && Boolean(chatRoomId),
  });
};
