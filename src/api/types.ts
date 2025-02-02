export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  isSuccess: boolean;
  code: string;
  message: string;
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
  birth: string;
  gender: 'MALE' | 'FEMALE';
  email: string;
  password: string;
  phone: string;
}

export interface SignupResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    userId: number;
    createdAt: string;
  };
}

export interface ExpertSignupRequest {
  expertCrop: string;
  expertLocation: string;
}

export interface ExpertSignupResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    userId: number;
    expertId: number;
    createdAt: string;
  };
}
