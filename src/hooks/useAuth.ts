import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login, signup, expertSignup } from '@/api/auth';
import type { LoginRequest, LoginResponse, SignupRequest, ExpertSignupRequest } from '@/api/types';
import useAuthStore from '@/store/useAuthStore';

export const useLogin = () => {
  const { login: setLogin } = useAuthStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: LoginRequest) => login(data),
    onSuccess: (response: LoginResponse) => {
      const { token, userId, userName } = response.result;
      localStorage.setItem('token', token);
      setLogin({
        name: userName,
        id: userId,
      });
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
};

export const useSignup = () => {
  return useMutation({
    mutationFn: (data: SignupRequest) => signup(data),
  });
};

export const useExpertSignup = () => {
  return useMutation({
    mutationFn: ({ userId, data }: { userId: number; data: ExpertSignupRequest }) =>
      expertSignup(userId, data),
  });
};
