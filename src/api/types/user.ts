import { BaseResponse } from './base';

export interface MyPageResponse extends BaseResponse {
  result: {
    name: string;
    birth: string;
    gender: 'MALE' | 'FEMALE';
    phone: string;
    email: string;
  };
}

export interface UpdateMyPageRequest {
  name: string;
  birth: string;
  email: string;
  password: string;
}
