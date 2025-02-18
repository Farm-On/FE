import { BaseResponse } from '@/api/types';

export interface PortfolioResponse extends BaseResponse {
  result: {
    profileImg: string | null;
    name: string;
    nickName: string | null;
    isNickNameOnly: boolean;
    expertDescription: string | null;
    rate: number | null;
    reviewCount: number | null;
    consultingCount: number | null;
    careers: {
      careerId: number;
      title: string;
      startYear: number;
      startMonth: number;
      endYear: number;
      endMonth: number;
      isOngoing: boolean;
      detailContent1: string | null;
      detailContent2: string | null;
      detailContent3: string | null;
      detailContent4: string | null;
    }[];
    additionalInformation: string | null;
    expertCropCategory: string;
    expertCropDetail: string;
    serviceDetail1: string | null;
    serviceDetail2: string | null;
    serviceDetail3: string | null;
    serviceDetail4: string | null;
    portfolio: {
      portfolioId: number;
      thumbnailImg: string | null;
      title: string;
    }[];
    expertLocationCategory: string;
    expertLocationDetail: string;
    availableRange: string;
    isAvailableEverywhere: boolean;
    isExcludeIsland: boolean;
  };
}
