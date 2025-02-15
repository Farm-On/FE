import { useQuery, useMutation } from '@tanstack/react-query';
import { getEstimate, readEstimate,getAllEstimates,getAllCompleted } from '../api/estimate';
import { GetEstimate, ReadEstimate } from '../api/types';
import { CreateEstimate } from '../api/types';
import { createEstimate } from '../api/estimate';

export function useRecentEstimates(userId: number) {
  return useQuery({
    queryKey: ['estimates', 'recent', userId],
    queryFn: () => getEstimate(userId),
    select: (data: GetEstimate) => data.result.estimateList,
  });
}

export function useEstimateDetail(estimateId: number) {
  return useQuery({
    queryKey: ['estimate', estimateId],
    queryFn: () => readEstimate(estimateId),
    enabled: !!estimateId,
    select: (data: ReadEstimate) => data.result,
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
    enabled: userId !== 1
  });
}