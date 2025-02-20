import { useParams, useNavigate } from 'react-router-dom';
import * as E from '@/styles/pages/Expert/Estimate.style';
import { useQuery, useMutation } from '@tanstack/react-query';
import axiosInstance from '@/api/axios';
import { EstimateResponse } from '@/api/types/expert/estimate';
import useAuthStore from '@/store/useAuthStore';
import { createChatRoom } from '@/api/services/chatService';

export default function Estimate() {
  const { estimateId } = useParams();
  const navigate = useNavigate();
  const { userInfo } = useAuthStore();

  const { data } = useQuery<EstimateResponse>({
    queryKey: ['expertViewEstimate'],
    queryFn: () => axiosInstance.get(`/estimate/${estimateId}`).then((response) => response.data),
    enabled: !!estimateId,
  });

  const createChatRoomMutation = useMutation({
    mutationFn: async () => {
      if (!userInfo?.userId || !estimateId) {
        throw new Error('필요한 정보가 없습니다.');
      }
      const response = await createChatRoom(userInfo.userId, parseInt(estimateId));
      return response;
    },
    onSuccess: (response) => {
      if (response.result.chatRoomId) {
        navigate(`/chat/${response.result.chatRoomId}`);
      }
    },
    onError: (error) => {
      console.error('채팅방 생성 실패:', error);
      alert('채팅방 생성에 실패했습니다. 다시 시도해주세요.');
    },
  });

  const handleChatStart = async () => {
    if (!userInfo) {
      alert('로그인이 필요한 서비스입니다.');
      return;
    }

    if (userInfo.role !== 'EXPERT') {
      alert('전문가만 채팅을 시작할 수 있습니다.');
      return;
    }

    try {
      await createChatRoomMutation.mutateAsync();
    } catch (error) {
      console.error('채팅 시작 실패:', error);
    }
  };

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
        <E.ChatButton onClick={handleChatStart} disabled={createChatRoomMutation.isPending}>
          {createChatRoomMutation.isPending ? '채팅방 생성중...' : '채팅하기'}
        </E.ChatButton>
      </E.Content>
    </div>
  );
}
