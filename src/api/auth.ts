import { axiosInstance } from './axios';
import type {
  LoginRequest,
  LoginResponse,
  SignupRequest,
  SignupResponse,
  ExpertSignupRequest,
  ExpertSignupResponse,
} from './types';

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axiosInstance.post<LoginResponse>('/login', data);
  return response.data;
};

export const signup = async (data: SignupRequest): Promise<SignupResponse> => {
  const response = await axiosInstance.post<SignupResponse>('/user/join', data);
  return response.data;
};

export const expertSignup = async (
  userId: number,
  data: ExpertSignupRequest
): Promise<ExpertSignupResponse> => {
  const response = await axiosInstance.post<ExpertSignupResponse>(`/${userId}/expert/join`, data);
  return response.data;
};

export const withdraw = async (userId: number): Promise<void> => {
  await axiosInstance.patch(`/withdraw/${userId}`);
};
