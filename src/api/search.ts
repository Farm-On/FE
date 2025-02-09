import { axiosInstance } from './axios';

export interface SearchRequest {
  userId: number;
  name: string;
}

export interface SearchResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    isSearchSave: boolean;
  };
}

export const searchKeyword = async ({ userId, name }: SearchRequest): Promise<SearchResponse> => {
  const response = await axiosInstance.post<SearchResponse>(
    `/home/search?userId=${userId}&name=${encodeURIComponent(name)}`, // 쿼리 스트링으로 요청
    null
  );

  return response.data;
};
