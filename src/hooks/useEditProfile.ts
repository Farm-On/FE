import axiosInstance from '@/api/axios';
import { EditLocationMutation, EditProfileMutation } from '@/api/types/expert/profile';
import useAuthStore from '@/store/useAuthStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useEditProfile = () => {
  const queryClient = useQueryClient();
  const { userInfo } = useAuthStore();

  return useMutation({
    mutationFn: (data: EditProfileMutation) =>
      axiosInstance.patch(`/expert/${userInfo?.expertId}/profile`, {
        ...data,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['expertProfile'] });
    },
  });
};

export const useEditLocation = () => {
  const queryClient = useQueryClient();
  const { userInfo } = useAuthStore();

  return useMutation({
    mutationFn: (data: EditLocationMutation) =>
      axiosInstance.patch(`/expert/${userInfo?.expertId}/area`, {
        ...data,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['expertProfile'] });
    },
  });
};
