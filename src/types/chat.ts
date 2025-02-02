export interface ChatRoom {
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

export interface ChatMessage {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
}
