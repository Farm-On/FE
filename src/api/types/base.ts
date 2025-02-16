export interface BaseResponse {
  isSuccess: boolean;
  code: string;
  message: string;
}

export interface CommonResponse extends BaseResponse {
  result: string;
}
