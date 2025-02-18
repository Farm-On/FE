import { BaseResponse } from '@/api/types';

export interface ProfileListResponse extends BaseResponse {
  result: {
    expertProfileList: [
      {
        expertId: number;
        profileImg: string;
        name: string;
        nickName: string;
        isNickNameOnly: boolean;
        rate: number | null;
        career: number;
        expertDescription: string;
        expertCropCategory: string;
        expertCropDetail: string;
        expertLocationCategory: string;
        expertLocationDetail: string;
      },
    ];
    listSize: number;
    totalPage: number;
    totalElements: number;
    isFirst: boolean;
    isLast: boolean;
  };
}
