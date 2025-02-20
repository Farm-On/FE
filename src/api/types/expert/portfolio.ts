import { BaseResponse } from '../base';
import { ProfileResponse } from './profile';

export interface ViewPortfolioResponse extends BaseResponse {
  result: {
    portfolioId: number;
    title: string;
    text: string;
    thumbnailImg: string | null;
    createdAt: string;
  };
}

export interface CareerResponse extends BaseResponse {
  result: Pick<ProfileResponse['result'], 'careers'>['careers'][number];
}

export interface EditCareerMutation {
  careerId: number | null;
  title: string;
  startYear: number;
  startMonth: number;
  endYear: number | null;
  endMonth: number | null;
  isOngoing: boolean;
  detailContent1: string | null;
  detailContent2: string | null;
  detailContent3: string | null;
  detailContent4: string | null;
}

export interface EditDetailMutation {
  content: string;
}

export interface EditMainServiceMutation {
  crop: string;
  serviceDetail1: string | null;
  serviceDetail2: string | null;
  serviceDetail3: string | null;
  serviceDetail4: string | null;
}

export interface EditPortfolioMutation {
  title: string;
  text: string;
  thumbnailImg: File | null;
}
