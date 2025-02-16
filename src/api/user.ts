import { axiosInstance } from './axios';
import type { MyPageResponse, UpdateMyPageRequest } from './types';

interface ExchangeRoleResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    exchangeRole: 'EXPERT' | 'FARMER';
    userId: number;
    expertId?: number;
    token: string;
  };
}

// 마이페이지 조회
export const getMyPage = async (userId: number): Promise<MyPageResponse> => {
  const response = await axiosInstance.get<MyPageResponse>(`/user/${userId}/mypage`);
  return response.data;
};

// 마이페이지 수정
export const updateMyPage = async (
  userId: number,
  data: UpdateMyPageRequest
): Promise<MyPageResponse> => {
  const response = await axiosInstance.patch<MyPageResponse>(`/user/${userId}/mypage`, data);
  return response.data;
};

// 역할 전환 API
export const exchangeRole = async (
  userId: number,
  role: 'EXPERT' | 'FARMER'
): Promise<ExchangeRoleResponse> => {
  const response = await axiosInstance.get<ExchangeRoleResponse>(
    `/user/exchange?userId=${userId}&role=${role}`
  );
  return response.data;
};
