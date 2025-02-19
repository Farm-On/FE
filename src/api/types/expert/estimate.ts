import { BaseResponse } from '../base';

export interface EstimateResponse extends BaseResponse {
  result: {
    estimateId: number;
    userId: number;
    cropName: string;
    cropCategory: string;
    userName: string;
    category: string;
    areaName: string;
    areaNameDetail: string;
    budget: string;
    title: string;
    body: string;
    createdDate: string;
    imageUrls: string[];
  };
}
