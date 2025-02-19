import { BaseResponse } from '../base';

export interface ViewPortfolioResponse extends BaseResponse {
  result: {
    portfolioId: number;
    title: string;
    text: string;
    thumbnailImg: string | null;
    createdAt: string;
  };
}
