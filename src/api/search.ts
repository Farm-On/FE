import { axiosInstance } from './axios';

export interface SearchRequest {
  userId: number;
  name: string;
}

export interface SearchResultResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    searchList: string[];
  };
}

export interface SearchResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    isSearchSave: boolean;
    searchList?: string[];
  };
}

export interface RecentSearchResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    recentSearchList: string[]; // 최신 API에서 반환하는 recentSearchList
  };
}

export interface DeleteSearchRequest {
  userId: number;
  name: string;
}

export interface DeleteSearchResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    isSearchDelete: boolean;
  };
}

export interface DeleteAllSearchRequest {
  userId: number;
}

export interface DeleteAllSearchResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    isSearchDelete: boolean;
  };
}

export const searchKeyword = async ({ userId, name }: SearchRequest): Promise<SearchResponse> => {
  const response = await axiosInstance.post<SearchResponse>(
    `/home/search?userId=${userId}&name=${encodeURIComponent(name)}`, // 쿼리 스트링으로 요청
    null
  );

  return response.data;
};
