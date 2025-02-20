import { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from '@/styles/pages/ChatRoom.style';
import { Camera, Send, Smile } from 'lucide-react';
import {
  useSocket,
  useChatRoom,
  useChatMessages,
  useChatEstimate,
  useUploadChatImage,
  type SocketMessage,
} from '@/hooks/useChat';
import useAuthStore from '@/store/useAuthStore';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

const ChatRoom = () => {
  const navigate = useNavigate();
  const { roomId } = useParams<{ roomId: string }>();
  const { userInfo } = useAuthStore();
  const [message, setMessage] = useState('');
  const [messageHistory, setMessageHistory] = useState<SocketMessage[]>([]);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSending, setIsSending] = useState(false);

  const chatRoomId = roomId ? parseInt(roomId, 10) : 0;
  const userId = userInfo?.userId || 0;

  const { connected, subscribeToChat, sendMessage } = useSocket(userId);

  const { data: roomData, isLoading: roomLoading } = useChatRoom(userId, chatRoomId);
  const { data: messagesData } = useChatMessages(userId, chatRoomId, 1);
  const { data: estimateData } = useChatEstimate(userId, chatRoomId);
  const uploadImageMutation = useUploadChatImage();

  useEffect(() => {
    if (!roomId || !userInfo) {
      navigate('/chat');
      return;
    }

    if (connected && userId && chatRoomId) {
      const currentTime = format(new Date(), 'a h:mm', { locale: ko });
      sendMessage(chatRoomId, {
        senderId: userId,
        messageType: 'ENTER',
        messageContent: '',
        isMine: true,
        sendTime: currentTime,
        isOtherRead: false,
      });
    }

    return () => {
      if (connected && userId && chatRoomId) {
        const currentTime = format(new Date(), 'a h:mm', { locale: ko });
        sendMessage(chatRoomId, {
          senderId: userId,
          messageType: 'EXIT',
          messageContent: '',
          isMine: true,
          sendTime: currentTime,
          isOtherRead: false,
        });
      }
    };
  }, [roomId, userInfo, connected, userId, chatRoomId, navigate, sendMessage]);

  const scrollToBottom = useCallback(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleNewMessage = useCallback(
    (newMsg: SocketMessage) => {
      setMessageHistory((prev) => [...prev, newMsg]);
      scrollToBottom();
    },
    [scrollToBottom]
  );

  useEffect(() => {
    if (messagesData?.result.chatMesageList) {
      const convertedMessages: SocketMessage[] = messagesData.result.chatMesageList.map((msg) => ({
        ...msg,
        senderId: userId,
        messageType: 'TEXT',
        isEstimateComplete: false,
      }));
      setMessageHistory(convertedMessages);
      scrollToBottom();
    }
  }, [messagesData?.result.chatMesageList, scrollToBottom, userId]);

  useEffect(() => {
    if (connected && userId && chatRoomId) {
      const unsubscribe = subscribeToChat(chatRoomId, handleNewMessage);
      return () => {
        unsubscribe();
      };
    }
  }, [connected, chatRoomId, userId, subscribeToChat, handleNewMessage]);

  const formatMessageTime = useCallback((timeString: string) => {
    try {
      const [period, time] = timeString.split(' ');
      const [hours, minutes] = time.split(':').map(Number);
      const date = new Date();
      date.setHours(period === '오후' ? hours + 12 : hours);
      date.setMinutes(minutes);
      return format(date, 'a h:mm', { locale: ko });
    } catch {
      return timeString;
    }
  }, []);

  const handleSendMessage = useCallback(async () => {
    if (!message.trim() || !connected || isSending || !chatRoomId || !userId) return;

    try {
      setIsSending(true);
      const currentTime = format(new Date(), 'a h:mm', { locale: ko });
      await sendMessage(chatRoomId, {
        senderId: userId,
        messageType: 'TEXT',
        messageContent: message.trim(),
        isMine: true,
        sendTime: currentTime,
        isOtherRead: false,
      });
      setMessage('');
    } finally {
      setIsSending(false);
    }
  }, [message, connected, isSending, chatRoomId, userId, sendMessage]);

  const handleImageUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file || !connected || isSending || !chatRoomId || !userId) return;

      try {
        setIsSending(true);
        const response = await uploadImageMutation.mutateAsync({
          userId,
          chatRoomId,
          image: file,
        });

        if (response.isSuccess) {
          const currentTime = format(new Date(), 'a h:mm', { locale: ko });
          await sendMessage(chatRoomId, {
            senderId: userId,
            messageType: 'IMAGE',
            messageContent: response.result.chatImageURL,
            isMine: true,
            sendTime: currentTime,
            isOtherRead: false,
          });
        }
      } catch (error) {
        console.error('Image upload failed:', error);
      } finally {
        setIsSending(false);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
    },
    [connected, isSending, chatRoomId, userId, uploadImageMutation, sendMessage]
  );

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    },
    [handleSendMessage]
  );

  if (roomLoading) {
    return <S.Container>로딩 중...</S.Container>;
  }

  if (!roomData) {
    return <S.Container>채팅방을 찾을 수 없습니다.</S.Container>;
  }

  return (
    <S.Container>
      <S.ChatContainer>
        <S.FixedHeader>
          <S.Header>
            <S.ProfileInfo>
              <S.ProfileImage
                src={roomData.result.profileImage || '/default-profile.png'}
                alt={roomData.result.name}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/default-profile.png';
                }}
              />
              <S.UserInfo>
                <S.UserName>
                  {roomData.result.isExpertNickNameOnly && roomData.result.nickName
                    ? roomData.result.nickName
                    : roomData.result.name}
                </S.UserName>
                {roomData.result.type === 'EXPERT' && <S.ExpertBadge>전문가</S.ExpertBadge>}
              </S.UserInfo>
              <S.LastSeen>{roomData.result.lastEnterTime} 전 접속</S.LastSeen>
            </S.ProfileInfo>
            {estimateData && (
              <S.ViewEstimateButton onClick={() => navigate(`/estimate/${chatRoomId}`)}>
                견적서 보기
              </S.ViewEstimateButton>
            )}
          </S.Header>
        </S.FixedHeader>

        <S.MessageList>
          {messageHistory.map((msg, index) => (
            <S.MessageContainer key={`${msg.sendTime}-${index}`} isMe={msg.isMine}>
              {!msg.isMine && (
                <S.ProfileImage
                  src={roomData.result.profileImage || '/default-profile.png'}
                  alt={roomData.result.name}
                />
              )}
              <S.MessageContent isMe={msg.isMine}>
                <S.MessageText isMe={msg.isMine}>
                  {msg.messageType === 'IMAGE' ? (
                    <img
                      src={msg.messageContent}
                      alt="Sent"
                      style={{ maxWidth: '200px' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/default-profile.png';
                      }}
                    />
                  ) : (
                    msg.messageContent
                  )}
                </S.MessageText>
                <S.MessageTime>{msg.sendTime ? formatMessageTime(msg.sendTime) : ''}</S.MessageTime>
              </S.MessageContent>
            </S.MessageContainer>
          ))}
          <div ref={messageEndRef} />
        </S.MessageList>

        <S.InputContainer>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleImageUpload}
          />

          <S.Input
            type="text"
            placeholder="메시지를 입력하세요"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isSending}
          />

          <S.IconButtonsContainer>
            <S.IconButton>
              <Smile size={20} />
            </S.IconButton>
            <S.IconButton onClick={() => fileInputRef.current?.click()} disabled={isSending}>
              <Camera size={20} />
            </S.IconButton>
          </S.IconButtonsContainer>

          <S.SendButton
            onClick={handleSendMessage}
            disabled={isSending || !message.trim()}
            style={{
              backgroundColor: message.trim() && !isSending ? '#00A05E' : '#E9E9E9',
            }}
          >
            <Send size={16} />
          </S.SendButton>
        </S.InputContainer>
      </S.ChatContainer>
    </S.Container>
  );
};

export default ChatRoom;
