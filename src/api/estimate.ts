//견적서 관련 api
import axiosInstance from "./axios";
import { CreateEstimate, CreateEstimateResponse} from "./types";

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
        formData.append('files', file);
      });
    }

    const response = await axiosInstance.post('/estimate', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
    
    return response.data;
  };

//견적서 수정
export const modifyEstimate = async(data:CreateEstimate,estimateId:number)=>{
    const response = await axiosInstance.put(`/estimate/${estimateId}`,data);
    return response.data;
};

//특정견적서 조회
export const readEstimate = async(estimateId:number) =>{
    const response = await axiosInstance.get(`/estimate/${estimateId}`);
    return response.data;
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