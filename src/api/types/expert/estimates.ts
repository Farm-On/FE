import { BaseResponse } from '../base';

export interface EstimatesResponse extends BaseResponse {
  result: {
    listSize: number;
    totalPage: number;
    totalElements: number;
    currentPage: number;
    isFirst: boolean;
    isLast: boolean;
    estimateList: {
      estimateId: number;
      title: string;
      cropName: string;
      cropCategory: string;
      estimateCategory: string;
      areaName: string;
      areaNameDetail: string;
      budget: string;
      status: number;
      createdAt: string;
    }[];
  };
}
