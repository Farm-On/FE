import axiosInstance from '@/api/axios';
import {
  CareerResponse,
  EditCareerMutation,
  EditDetailMutation,
  EditMainServiceMutation,
  EditPortfolioMutation,
  ViewPortfolioResponse,
} from '@/api/types/expert/portfolio';
import { useEditMyPortfolioModalStore } from '@/store/modals/useExpertModalStore';
import useAuthStore from '@/store/useAuthStore';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

export const useEditCareer = () => {
  const queryClient = useQueryClient();
  const { userInfo } = useAuthStore();

  const {
    career: { careerId },
  } = useEditMyPortfolioModalStore();

  return {
    data: useQuery<CareerResponse>({
      queryKey: ['expertMyDetail', careerId],
      queryFn: () =>
        axiosInstance.get(`/expert/career/${careerId}`).then((response) => response.data),
      enabled: !!careerId,
    }).data?.result,
    mutate: useMutation({
      mutationFn: (data: EditCareerMutation) => {
        const { careerId, ...careerPayload } = data;

        return careerId !== null
          ? axiosInstance.patch(`/expert/career/${careerId}`, { ...careerPayload })
          : axiosInstance.post(`/expert/${userInfo?.expertId}/career`, { ...careerPayload });
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['expertMyPortfolio'] });
      },
    }),
  };
};

export const useEditDetail = () => {
  const queryClient = useQueryClient();
  const { userInfo } = useAuthStore();

  return useMutation({
    mutationFn: (data: EditDetailMutation) =>
      axiosInstance.patch(`/expert/${userInfo?.expertId}/detail`, { ...data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['expertMyPortfolio'] });
    },
  });
};

export const useEditMainService = () => {
  const queryClient = useQueryClient();
  const { userInfo } = useAuthStore();

  return useMutation({
    mutationFn: (data: EditMainServiceMutation) =>
      axiosInstance.patch(`/expert/${userInfo?.expertId}/specialty`, { ...data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['expertMyPortfolio'] });
    },
  });
};

export const useEditPortfolio = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { userInfo } = useAuthStore();
  const { portfolioId } = useParams();

  return {
    data: useQuery({
      queryKey: ['expertEditPortfolio'],
      queryFn: () =>
        axiosInstance
          .get<ViewPortfolioResponse>(`/expert/portfolio/${portfolioId}`)
          .then((response) => response.data),
      enabled: !!portfolioId,
    }).data?.result,
    mutate: useMutation({
      mutationFn: (data: EditPortfolioMutation) => {
        const formData = new FormData();

        const request = new Blob([JSON.stringify({ title: data.title, text: data.text })], {
          type: 'application/json',
        });
        formData.append('request', request);

        if (data.thumbnailImg) {
          formData.append('thumbnailImg', data.thumbnailImg);
        }

        return axiosInstance.patch(`/expert/portfolio/${portfolioId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      },
      onSuccess: () => {
        navigate(`/expert/profile/${userInfo?.expertId}`);
        queryClient.invalidateQueries({ queryKey: ['expertProfile'] });
      },
    }),
  };
};
