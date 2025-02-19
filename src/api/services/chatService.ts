import { axiosInstance } from '../axios';
import type {
  ChatRoomListResponse,
  ChatMessagesResponse,
  ChatRoomResponse,
  ChatEstimateResponse,
  CreateChatRoomResponse,
  DeleteChatRoomResponse,
  UploadChatImageResponse,
} from '../types/chat';

// 채팅방 정보 조회
export const getChatRoom = async (
  userId: number,
  chatRoomId: number
): Promise<ChatRoomResponse> => {
  const response = await axiosInstance.get<ChatRoomResponse>(
    `/chat/room?userId=${userId}&chatRoomId=${chatRoomId}`
  );
  return response.data;
};

// 채팅방 생성
export const createChatRoom = async (
  userId: number,
  estimateId: number
): Promise<CreateChatRoomResponse> => {
  const response = await axiosInstance.post<CreateChatRoomResponse>(
    `/chat/room?userId=${userId}&estimateId=${estimateId}`
  );
  return response.data;
};

// 채팅방 삭제
export const deleteChatRoom = async (
  userId: number,
  chatRoomId: number
): Promise<DeleteChatRoomResponse> => {
  const response = await axiosInstance.delete<DeleteChatRoomResponse>(
    `/chat/room?userId=${userId}&chatRoomId=${chatRoomId}`
  );
  return response.data;
};

// 채팅 이미지 업로드
export const uploadChatImage = async (
  userId: number,
  chatRoomId: number,
  image: File
): Promise<UploadChatImageResponse> => {
  const formData = new FormData();
  formData.append('chatImage', image);

  const response = await axiosInstance.post<UploadChatImageResponse>(
    `/chat/image?userId=${userId}&chatRoomId=${chatRoomId}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return response.data;
};

// 채팅방 목록 조회
export const getChatRooms = async (
  userId: number,
  read: number,
  page: number,
  searchName?: string
): Promise<ChatRoomListResponse> => {
  const response = await axiosInstance.get<ChatRoomListResponse>(
    `/chat/rooms/all?userId=${userId}&read=${read}&page=${page}${
      searchName ? `&searchName=${encodeURIComponent(searchName)}` : ''
    }`
  );
  return response.data;
};

// 채팅 메시지 목록 조회
export const getChatMessages = async (
  userId: number,
  chatRoomId: number,
  page: number
): Promise<ChatMessagesResponse> => {
  const response = await axiosInstance.get<ChatMessagesResponse>(
    `/chat/room/message?userId=${userId}&chatRoomId=${chatRoomId}&page=${page}`
  );
  return response.data;
};

// 채팅방 견적서 상세 조회
export const getChatEstimate = async (
  userId: number,
  chatRoomId: number
): Promise<ChatEstimateResponse> => {
  const response = await axiosInstance.get<ChatEstimateResponse>(
    `/chat/room/estimate?userId=${userId}&chatRoomId=${chatRoomId}`
  );
  return response.data;
};
