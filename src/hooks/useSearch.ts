import { useMutation, useQueryClient } from '@tanstack/react-query';
import { searchKeyword } from '@/api/search';
import type { SearchRequest, SearchResponse } from '@/api/search';

export const useSearch = () => {
  const queryClient = useQueryClient();

  return useMutation<SearchResponse, Error, SearchRequest>({
    mutationFn: (data) => searchKeyword(data),
    onSuccess: (response) => {
      console.log('검색어 저장 성공:', response.result);
      queryClient.invalidateQueries({ queryKey: ['searchHistory'] }); // 검색 기록 갱신
    },
    onError: (error) => {
      console.error('검색 요청 오류:', error);
    },
  });
};
