import { BaseResponse } from './base';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse extends BaseResponse {
  result: {
    userId: number;
    role: 'ADMIN' | 'FARMER' | 'EXPERT';
    email: string;
    userName: string;
    token: string;
  };
}

export interface SignupRequest {
  name: string;
  birth: string; // "YYYY-MM-DD" 형식
  gender: 'MALE' | 'FEMALE';
  email: string;
  password: string;
  phone: string; // -없이 숫자만
}

export interface SignupResponse extends BaseResponse {
  result: {
    userId: number;
    createdAt: string;
  };
}

export interface ExpertSignupRequest {
  expertCrop: string;
  expertLocation: string;
}

export interface ExpertSignupResponse extends BaseResponse {
  result: {
    userId: number;
    expertId: number;
    createdAt: string;
  };
}

export interface CommonResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: string;
}

export interface ErrorResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  data?: unknown;
}
