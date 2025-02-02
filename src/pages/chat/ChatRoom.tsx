import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useChatStore } from '@/store/chatStore';
import * as S from '@/styles/pages/ChatRoom.style';
import { Camera, Send, Smile } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isMe: boolean;
  time: string;
}

interface Room {
  id: string;
  user: {
    name: string;
    image: string;
    category: string;
    subCategory: string;
    location: string;
  };
  lastMessage: string;
  unreadCount: number;
  budget: string;
  date: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    text: '너무 많이 주면 작물에 무리가 갈 수 있으니 적정량을 꼭 지켜주세요. 결과가 나오기 전까지는 이렇게 기본 관리에 신경 써주시면 좋아요',
    isMe: false,
    time: '오후 5:11',
  },
  {
    id: '2',
    text: '병충해는 초기에 예방하는 게 가장 중요해요. 예를 들어, 종자 소독을 하면 심기 전에 병원균 감염을 막을 수 있고요. 또 논 주변에 잡초가 많으면 병충해가 생기기 쉬우니까 잡초 제거도 꼭 해주시는 게 좋아요. 비료는 너무 많이 주면 오히려 병해충을 부를 수 있으니까 적정량을 지키는 게 중요합니다.',
    isMe: false,
    time: '오후 5:11',
  },
  {
    id: '3',
    text: '말씀해주신 대로 관리해보고, 토양 검사 결과 나오면 다시 문의드릴게요.',
    isMe: true,
    time: '오후 5:11',
  },
  {
    id: '4',
    text: '네, 궁금한 거 있으면 언제든 연락주세요.',
    isMe: false,
    time: '오후 5:11',
  },
  {
    id: '5',
    text: '감사합니다!',
    isMe: true,
    time: '오후 5:11',
  },
];

const ChatRoom = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { chatRooms } = useChatStore();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [currentRoom, setCurrentRoom] = useState<Room | null>(null);

  useEffect(() => {
    const findRoom = chatRooms.find((room) => room.id === roomId);
    if (findRoom) {
      setCurrentRoom(findRoom);
    } else {
      navigate('/chat');
    }
  }, [roomId, navigate, chatRooms]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: String(messages.length + 1),
        text: message,
        isMe: true,
        time: new Date().toLocaleTimeString('ko-KR', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        }),
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!currentRoom) return null;

  return (
    <S.Container>
      <S.ChatContainer>
        <S.FixedHeader>
          <S.Header>
            <S.ProfileInfo>
              <S.ProfileImage src={currentRoom.user.image} alt={currentRoom.user.name} />
              <S.UserInfo>
                <S.UserName>{currentRoom.user.name}</S.UserName>
                <S.ExpertBadge>전문가</S.ExpertBadge>
              </S.UserInfo>
              <S.LastSeen>28분 전 접속</S.LastSeen>
            </S.ProfileInfo>
            <S.ViewEstimateButton>견적서 보기</S.ViewEstimateButton>
          </S.Header>
        </S.FixedHeader>

        <S.MessageList>
          {messages.map((msg) => (
            <S.MessageContainer key={msg.id} isMe={msg.isMe}>
              {!msg.isMe && (
                <S.ProfileImage src={currentRoom.user.image} alt={currentRoom.user.name} />
              )}
              <S.MessageContent isMe={msg.isMe}>
                <S.MessageText isMe={msg.isMe}>{msg.text}</S.MessageText>
                <S.MessageTime>{msg.time}</S.MessageTime>
              </S.MessageContent>
            </S.MessageContainer>
          ))}
        </S.MessageList>

        <S.InputContainer>
          <S.Input
            type="text"
            placeholder="메시지를 입력하세요"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <S.IconButtonsContainer>
            <S.IconButton>
              <Smile size={20} />
            </S.IconButton>
            <S.IconButton>
              <Camera size={20} />
            </S.IconButton>
          </S.IconButtonsContainer>
          <S.SendButton onClick={handleSendMessage}>
            <Send size={16} />
          </S.SendButton>
        </S.InputContainer>
      </S.ChatContainer>
    </S.Container>
  );
};

export default ChatRoom;
