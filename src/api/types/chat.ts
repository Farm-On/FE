import { BaseResponse } from './base';

export interface ChatRoomInfo {
  chatRoomId: number;
  name: string;
  nickName?: string;
  isExpertNickNameOnly: boolean;
  type: 'FARMER' | 'EXPERT';
  profileImage: string;
  estimateBudget: string;
  estimateCategory: string;
  estimateAreaName: string;
  estimateAreaDetail: string;
  unreadMessageCount: number;
  lastMessageContent: string;
  lastMessageDate: string;
}

export interface ChatRoomListResponse extends BaseResponse {
  result: {
    chatRoomInfoList: ChatRoomInfo[];
    chatRoomInfoListSize: number;
    totalPage: number;
    totalElements: number;
    isFirst: boolean;
    isLast: boolean;
  };
}

export interface ChatMessage {
  messageContent: string;
  isOtherRead: boolean;
  isMine: boolean;
  sendTime: string;
}

export interface ChatMessagesResponse extends BaseResponse {
  result: {
    chatMesageList: ChatMessage[];
    chatMessageListSize: number;
    isFirst: boolean;
    isLast: boolean;
    hasNext: boolean;
  };
}

export interface ChatRoomResponse extends BaseResponse {
  result: {
    name: string;
    nickName?: string;
    isExpertNickNameOnly: boolean;
    profileImage: string;
    type: string;
    lastEnterTime: string;
    isOtherComplete: boolean;
    isComplete: boolean;
    isEstimateComplete: boolean;
  };
}

export interface ChatEstimateResponse extends BaseResponse {
  result: {
    estimateCropCategory: string;
    estimateCropName: string;
    estimateApplyName: string;
    estimateCategory: string;
    estimateAreaName: string;
    estimateAreaDetail: string;
    estimateBudget: string;
    estimateContent: string;
    estimateImageList: string[];
  };
}

export interface CreateChatRoomResponse extends BaseResponse {
  result: {
    chatRoomId: number;
    name: string;
    type: string;
  };
}

export interface DeleteChatRoomResponse extends BaseResponse {
  result: {
    isDeleteSuccess: boolean;
  };
}

export interface UploadChatImageResponse extends BaseResponse {
  result: {
    chatImageURL: string;
  };
}
