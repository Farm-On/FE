
// 공통적으로 사용되는 API 응답 기본 구조

export interface CreateEstimate {
    userId: number;
    cropName: string;
    category: string;
    areaName: string;
    areaNameDetail: string;
    budget: string;
    title: string;
    body: string;
  }
  export interface ApiResponse {
    isSuccess: boolean;
    code: string;
    message: string;
  }
  
  export interface CreateEstimateResponse extends ApiResponse {
    result: CreateEstimate;
  }
  
  // 견적서 기본 정보 (여러 곳에서 공통으로 사용되는 필드들)
  export interface EstimateBasic {
    estimateId: number;
    title: string;
    cropName: string;
    cropCategory: string;
    areaName: string;
    areaNameDetail: string;
    budget: string;
  }
  
  // 견적서 목록에서 사용되는 아이템 정보
  export interface EstimateItem extends EstimateBasic {
    estimateCategory: string;
    status: number;
    createdAt: string;
  }
  
  // 페이지네이션 정보
  export interface PaginationInfo {
    listSize: number;
    totalPage: number;
    totalElements: number;
    currentPage: number;
    isFirst: boolean;
    isLast: boolean;
  }
  
  // 견적서 상세 조회 응답
  export interface ReadEstimate extends ApiResponse {
    result: EstimateBasic & {
      userId: number;
      userName: string;
      category: string;
      body: string;
      createdDate: string;
      imageUrls: string[];
    };
  }
  
  // 견적서 목록 조회 응답
  export interface GetEstimate extends ApiResponse {
    result: PaginationInfo & {
      estimateList: EstimateItem[];
    };
  }
  
  export interface EstimateListItem {
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
  }
  
  export interface AllEstimatesResponse {
    isSuccess: boolean;
    code: string;
    message: string;
    result: {
      listSize: number;
      totalPage: number;
      totalElements: number;
      currentPage: number;
      isFirst: boolean;
      isLast: boolean;
      estimateList: EstimateListItem[];
    };
  }
  
  
  export interface OfferList {
    estimateId: number;
    chatRoomId: number;
    expertId: number;
    name: string;
    nickname: string;
    isNicknameOnly: true;
    rating: number;
    profileImageUrl: string;
    description: string;
    consultingCount: number;
  }
  
  export interface OfferedEstimateResponse {
    isSuccess: true;
    code: string;
    message: string;
    result: {
      listSize: number;
      totalPage: number;
      totalElements: number;
      currentPage: number;
      isFirst: true;
      isLast: true;
      offerList: OfferList[];
    };
  }
  
  //특정견적서 상세값(제안견적 x)
  export interface EstimateDetail {
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
  }
  
  
  export interface EachEstimateListResponse {
    isSuccess: boolean;
    code: string;
    message: string;
    result: EstimateDetail;
  }
  