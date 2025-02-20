import { useParams } from 'react-router-dom';

import * as E from '@/styles/pages/Expert/Estimate.style';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/api/axios';
import { EstimateResponse } from '@/api/types/expert/estimate';

export default function Estimate() {
  // 견적서 상세페이지

  const { estimateId } = useParams();

  const { data } = useQuery<EstimateResponse>({
    queryKey: ['expertViewEstimate'],
    queryFn: () => axiosInstance.get(`/estimate/${estimateId}`).then((response) => response.data),
    enabled: !!estimateId,
  });

  return (
    <div>
      <E.Title>
        {data?.result.cropName}({data?.result.cropCategory}) 컨설팅 요청 내역
      </E.Title>
      <E.Subtitle>컨설팅 요청 내역을 확인하세요</E.Subtitle>
      <E.Content>
        {/* 제목 */}
        <E.Card style={{ padding: '21px 48px 21px 48px' }}>
          <E.Inline>
            <E.Name>제목</E.Name>
            <E.Value>{data?.result.title}</E.Value>
          </E.Inline>
        </E.Card>

        {/* 상세정보 */}
        <E.Card style={{ padding: '41px 48px 41px 48px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <E.Inline>
              <E.Name>신청자</E.Name>
              <E.Value>{data?.result.userName}</E.Value>
            </E.Inline>
            <E.Inline>
              <E.Name>종류</E.Name>
              <E.Value>{data?.result.category}</E.Value>
            </E.Inline>
            <E.Inline>
              <E.Name>위치</E.Name>
              <E.Value>
                {data?.result.areaName} {data?.result.areaNameDetail}
              </E.Value>
            </E.Inline>
            <E.Inline>
              <E.Name>예산</E.Name>
              <E.Value>{data?.result.budget}</E.Value>
            </E.Inline>
          </div>
        </E.Card>

        {/* 컨설팅 설명 */}
        <E.Card style={{ padding: '41px 48px 41px 48px' }}>
          <E.Inline>
            <E.Name>컨설팅 설명</E.Name>
          </E.Inline>
          <E.ConsultingImageContainer>
            {data?.result.imageUrls.map((image) => (
              <E.ConsultingImage key={image} src={image} alt="" />
            ))}
          </E.ConsultingImageContainer>
          <E.ConsultingContent>{data?.result.body}</E.ConsultingContent>
        </E.Card>
        <E.ChatButton>채팅하기</E.ChatButton>
      </E.Content>
    </div>
  );
}
