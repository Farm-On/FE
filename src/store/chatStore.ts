import { create } from 'zustand';
import { ChatRoom, ChatMessage } from '@/types/chat';

interface ChatStore {
  chatRooms: ChatRoom[];
  showUnreadOnly: boolean;
  currentRoom: ChatRoom | null;
  messages: ChatMessage[];
  setShowUnreadOnly: (show: boolean) => void;
  setCurrentRoom: (room: ChatRoom) => void;
  addMessage: (message: ChatMessage) => void;
  markAsRead: (roomId: string) => void;
}

// 채팅방 생성을 위한 헬퍼 함수
const createChatRoom = (
  id: string,
  name: string,
  message: string,
  unreadCount: number = 0
): ChatRoom => ({
  id,
  user: {
    name,
    image: '/src/assets/images/farmer.png',
    category: '쌀(곡물)',
    subCategory: '토양 및 환경관리',
    location: '경기 이천시 마장면',
  },
  lastMessage: message,
  unreadCount,
  budget: '₩ 500만원 ~ 1,000만원',
  date: '2024.11.11',
});

// 초기 상태를 위한 더미 데이터
const initialChatRooms = [
  createChatRoom('1', '김팜온', '한 1ha 정도 되는 것 같아요.', 3),
  createChatRoom('2', '최승연', '추가로 궁금한 점이 생기면 언제든 문의하세요'),
  createChatRoom(
    '3',
    '이민주',
    '아뇨, 아직 한 번도 해 본 적 없어요. 키트를 구매하면 제가 직접 측정할 수 있을까요?',
    1
  ),
  createChatRoom('4', '박준형', '토양 분석 결과가 나왔습니다.', 2),
  createChatRoom('5', '김현우', '네, 알겠습니다. 확인해보고 연락드리겠습니다.'),
  createChatRoom('6', '이지원', '배수 시설 개선이 필요할 것 같네요.', 1),
  createChatRoom('7', '정미경', '주말에 방문하실 수 있으신가요?'),
  createChatRoom('8', '강동훈', '토양 산도 측정은 완료되었습니다.', 2),
  createChatRoom('9', '윤서연', '비료 사용량 조절이 필요해 보입니다.'),
  createChatRoom('10', '임재현', '작물 생육 상태가 양호합니다.'),
  createChatRoom('11', '한지민', '관개 시설 점검이 필요합니다.', 1),
  createChatRoom('12', '송태우', '다음 주에 방문 예정입니다.'),
  createChatRoom('13', '오민지', '토양 개량제 사용을 추천드립니다.', 2),
  createChatRoom('14', '백승호', '병해충 예방 관리가 중요합니다.'),
  createChatRoom('15', '류채원', '수확 시기 조절이 필요해 보입니다.', 1),
];

export const useChatStore = create<ChatStore>((set) => ({
  chatRooms: initialChatRooms,
  showUnreadOnly: false,
  currentRoom: null,
  messages: [],
  setShowUnreadOnly: (show) => set({ showUnreadOnly: show }),
  setCurrentRoom: (room) => set({ currentRoom: room }),
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
  markAsRead: (roomId) =>
    set((state) => ({
      chatRooms: state.chatRooms.map((room) =>
        room.id === roomId ? { ...room, unreadCount: 0 } : room
      ),
    })),
}));
