//견적서 관련 api
import axiosInstance from "./axios";
import { CreateEstimate, CreateEstimateResponse,OfferedEstimateResponse,EachEstimateListResponse} from "./types/userEstimate";

//견적서 작성
export const createEstimate = async (data: CreateEstimate, files?: File[]): Promise<CreateEstimateResponse> => {
    const formData = new FormData();
    
    // 중요: 모든 데이터를 'request'라는 키로 JSON 문자열로 변환
    const requestData = {
      userId: data.userId,
      cropName: data.cropName,
      category: data.category,
      areaName: data.areaName,
      areaNameDetail: data.areaNameDetail,
      budget: data.budget,
      title: data.title,
      body: data.body
    };
  
    formData.append('request', JSON.stringify(requestData));

    if (files && files.length > 0) {
      files.forEach((file) => {
        formData.append('imageFiles', file);
      });
    }

    const response = await axiosInstance.post('/estimate', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
    
    return response.data;
  };



//특정견적서 조회
export const readEstimate = async(estimateId: number): Promise<EachEstimateListResponse> => {
  const response = await axiosInstance.get(`/estimate/${estimateId}`);
  return response.data;
};


//제안받은 견적 불러오기(전문가 프로필,채팅)
export const offeredEstimate = async (estimateId: number): Promise<OfferedEstimateResponse> => {
  try {
    const response = await axiosInstance.get(`/estimate/${estimateId}/offers`);
    
    // 응답 데이터 로깅
    console.log('API 응답 데이터:', response.data);
    
    // 응답 데이터 구조 확인
    if (!response.data || !response.data.result) {
      console.warn('API 응답에 result가 없습니다:', response.data);
      throw new Error('Invalid API response structure');
    }
    return response.data;
  } catch (error) {
    console.error('API 요청 실패:', error);
    throw error;
  }
};


//농업인 견적서 최신순 5개 조회
export const getEstimate = async(userId:number)=>{
    const response = await axiosInstance.get(`/estimate/user/${userId}/recent5`);
    return response.data;
};

//농업인 견적서 모두 보기 (30개 조회)
export const getAllEstimates = async(userId:number)=>{
    const response = await axiosInstance.get(`/estimate/user/${userId}/all`);
    return response.data;
};

//농업인 완료된 견적 모두 보기
export const getAllCompleted = async(userId:number)=>{
    const response = await axiosInstance.get(`/estimate/user/${userId}/is-complete`);
    return response.data;
}