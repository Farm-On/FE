import { useQuery, useMutation } from '@tanstack/react-query';
import { getEstimate, readEstimate,getAllEstimates,getAllCompleted,offeredEstimate } from '../api/estimate';
import { GetEstimate,EstimateDetail } from '../api/types';
import { CreateEstimate,EachEstimateListResponse,OfferList } from '../api/types';
import { createEstimate } from '../api/estimate';

export function useRecentEstimates(userId: number) {
  return useQuery({
    queryKey: ['estimates', 'recent', userId],
    queryFn: () => getEstimate(userId),
    select: (data: GetEstimate) => data.result.estimateList,
  });
}

export function useEstimateDetail(estimateId: number) {
  return useQuery<EachEstimateListResponse, Error, EstimateDetail>({
    queryKey: ['estimate', estimateId],
    queryFn: () => readEstimate(estimateId),
    select: (data:EachEstimateListResponse) => data.result
  });
}

export function useCreateEstimateMutation() {
  return useMutation({
    mutationFn: ({ data, files }: { data: CreateEstimate; files?: File[] }) =>
      createEstimate(data, files),
    onSuccess: (response) => {
      if (response.isSuccess) {
        console.log('견적서 생성 성공:', response.result);
      }
    },
    onError: (error) => {
      console.error('견적서 생성 실패:', error);
    },
  });
}

export function useAllEstimates(userId: number) {
  return useQuery({
    queryKey: ['estimates', 'all', userId],
    queryFn: () => getAllEstimates(userId),
  });
}

export function useCompletedEstimates(userId: number) {
  return useQuery({
    queryKey: ['estimates', 'completed', userId],
    queryFn: () => getAllCompleted(userId),
    select: (data) => {
      console.log('완료된 견적 데이터:', data.result);
      return data.result;
    }
  });
}

export function useOfferedestimate(estimateId: number) {
  return useQuery({
    queryKey: ['estimates', 'offered', estimateId],
    queryFn: () => offeredEstimate(estimateId),
    select: (data) => {
      // 데이터가 null이거나 undefined인 경우 기본값 제공
      if (!data || !data.result) {
        return {
          isSuccess: false,
          result: {
            listSize: 0,
            totalPage: 0,
            totalElements: 0,
            currentPage: 0,
            isFirst: true,
            isLast: true,
            offerList: [],
          },
        };
      }

      // 실제 데이터가 있는 경우 해당 데이터 반환
      return {
        isSuccess: true,
        result: {
          ...data.result,
          offerList: data.result.offerList.map((offer:OfferList) => ({
            ...offer,
            // null 값에 대한 기본값 처리
            rating: offer.rating ?? 0,
            consultingCount: offer.consultingCount ?? 0,
            description: offer.description ?? '',
            profileImageUrl: offer.profileImageUrl ?? '/default-profile.png'
          }))
        }
      };
    },
    // 에러 발생 시 재시도 옵션 추가
    retry: 1,
    // 캐시 시간 설정
    staleTime: 1000 * 60 * 5, // 5분
    // 기본 에러 처리
    // onError: (error) => {
    //   console.error('제안받은 견적 조회 실패:', error);
    // }
  });
}