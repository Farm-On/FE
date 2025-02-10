import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { searchKeyword } from '@/api/search';
import type {
  SearchRequest,
  SearchResponse,
  RecentSearchResponse,
  DeleteSearchRequest,
  DeleteSearchResponse,
  DeleteAllSearchRequest,
  DeleteAllSearchResponse,
  SearchResultResponse,
} from '@/api/search';
import axiosInstance from '@/api/axios';

export const useSearch = () => {
  const queryClient = useQueryClient();

  return useMutation<SearchResponse, Error, SearchRequest>({
    mutationFn: (data) => searchKeyword(data),
    onSuccess: (response) => {
      console.log('검색어 저장 성공:', response.result);
      queryClient.invalidateQueries({ queryKey: ['recentSearch'] }); // 검색 기록 갱신
    },
    onError: (error) => {
      console.error('검색 요청 오류:', error);
    },
  });
};

export const useRecentSearch = (userId: number) => {
  return useQuery<RecentSearchResponse>({
    queryKey: ['recentSearch', userId],
    queryFn: async () => {
      if (!userId)
        return {
          isSuccess: false,
          code: 'ERROR',
          message: 'Invalid request',
          result: { recentSearchList: [] },
        };

      console.log(`GET 요청 전송: userId=${userId}`);
      const response = await axiosInstance.get<RecentSearchResponse>(
        `/home/search/recent?userId=${userId}`
      );

      console.log('GET 응답 데이터:', response.data);
      return response.data;
    },
    enabled: !!userId, // userId가 있을 때만 실행
  });
};

export const useDeleteSearch = () => {
  const queryClient = useQueryClient();

  return useMutation<DeleteSearchResponse, Error, DeleteSearchRequest>({
    mutationFn: async ({ userId, name }) => {
      console.log(`🗑️ DELETE 요청: userId=${userId}, name=${name}`);
      const response = await axiosInstance.delete<DeleteSearchResponse>(
        `/home/search/recent?userId=${userId}&name=${encodeURIComponent(name)}`
      );
      return response.data;
    },
    onSuccess: (response) => {
      console.log('검색어 삭제 성공:', response.result);
      queryClient.invalidateQueries({ queryKey: ['recentSearch'] }); // 검색 기록 갱신
    },
    onError: (error) => {
      console.error('검색어 삭제 오류:', error);
    },
  });
};

export const useDeleteAllSearch = () => {
  const queryClient = useQueryClient();

  return useMutation<DeleteAllSearchResponse, Error, DeleteAllSearchRequest>({
    mutationFn: async ({ userId }) => {
      console.log(`DELETE ALL 요청: userId=${userId}`);
      const response = await axiosInstance.delete<DeleteAllSearchResponse>(
        `/home/search/recent/all?userId=${userId}`
      );
      return response.data;
    },
    onSuccess: (response) => {
      console.log('전체 검색어 삭제 성공:', response.result);
      queryClient.invalidateQueries({ queryKey: ['recentSearch'] }); // 검색 기록 갱신
    },
    onError: (error) => {
      console.error('전체 검색어 삭제 오류:', error);
    },
  });
};

// 🔥 검색어 자동완성 API 요청
export const useSearchResults = (userId: number, name: string) => {
  return useQuery<SearchResultResponse>({
    queryKey: ['searchResults', userId, name],
    queryFn: async (): Promise<SearchResultResponse> => {
      if (!userId || !name)
        return {
          isSuccess: false,
          code: 'ERROR',
          message: 'Invalid request',
          result: { searchList: [] },
        } as SearchResultResponse; // 🔥 TypeScript가 명확히 인식하도록 추가

      console.log(`🔍 검색어 자동완성 요청: userId=${userId}, name=${name}`);
      const response = await axiosInstance.get<SearchResultResponse>(
        `/home/search?userId=${userId}&name=${encodeURIComponent(name)}`
      );

      console.log('✅ 검색어 자동완성 응답:', response.data);
      return response.data;
    },
    enabled: !!userId && !!name, // 검색어가 있을 때만 실행
    staleTime: 1000 * 60 * 5, // 5분 동안 데이터 유지 (중복 요청 방지)
  });
};
