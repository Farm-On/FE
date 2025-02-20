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

  // 연결 상태 확인을 위한 useEffect
  useEffect(() => {
    if (!userInfo) {
      navigate('/');
      return;
    }

    let retryCount = 0;
    const maxRetries = 3;
    const retryInterval = 3000;

    const attemptConnection = () => {
      if (!connected && retryCount < maxRetries) {
        console.log(`재연결 시도 ${retryCount + 1}/${maxRetries}`);
        retryCount++;
        setTimeout(attemptConnection, retryInterval);
      }
    };

    if (!connected) {
      attemptConnection();
    }

    return () => {
      retryCount = maxRetries; // cleanup
    };
  }, [connected, userInfo, navigate]);

  // 메시지 전송 로직
  const handleSendMessage = useCallback(async () => {
    if (!message.trim() || !connected || isSending || !chatRoomId || !userId) {
      console.log('메시지 전송 불가:', {
        message: !!message.trim(),
        connected,
        isSending,
        chatRoomId,
        userId,
      });
      return;
    }

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
      console.log('메시지 전송 성공');
    } catch (error) {
      console.error('메시지 전송 실패:', error);
      alert('메시지 전송에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSending(false);
    }
  }, [message, connected, isSending, chatRoomId, userId, sendMessage]);

  // 이미지 업로드 핸들러
  const handleImageUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file || !connected || isSending || !chatRoomId || !userId) {
        console.log('이미지 업로드 불가:', {
          file: !!file,
          connected,
          isSending,
          chatRoomId,
          userId,
        });
        return;
      }

      try {
        setIsSending(true);

        // 파일 크기 체크
        if (file.size > 5 * 1024 * 1024) {
          // 5MB
          alert('파일 크기는 5MB를 초과할 수 없습니다.');
          return;
        }

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

          console.log('이미지 전송 성공');
        }
      } catch (error) {
        console.error('이미지 업로드 실패:', error);
        alert('이미지 업로드에 실패했습니다. 다시 시도해주세요.');
      } finally {
        setIsSending(false);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
    },
    [connected, isSending, chatRoomId, userId, uploadImageMutation, sendMessage]
  );

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
        messageType: msg.messageContent.startsWith('http') ? 'IMAGE' : 'TEXT',
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
                      alt="전송된 이미지"
                      style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'contain' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/default-profile.png';
                      }}
                    />
                  ) : (
                    msg.messageContent
                  )}
                </S.MessageText>
                <S.MessageTime>{msg.sendTime}</S.MessageTime>
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
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            disabled={isSending}
          />

          <S.IconButtonsContainer>
            <S.IconButton disabled={isSending}>
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
