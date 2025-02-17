import styled from '@emotion/styled';
import * as E from '@/styles/pages/Expert/Estimate.style';
import { SuggestedExpertProfile } from '@/components/SuggestedExpertProfile';
// import Sangwoo from '../../assets/images/jimin.png';
// import Dongho from '../../assets/images/dongho.png';
import { useEstimateDetail, useOfferedestimate } from '../../hooks/useMyEstimate';
import { useParams } from 'react-router-dom';
import { OfferList } from '@/api/types';
import { useEffect } from 'react';


export default function EstimateSheet() {
  // 특정 견적서 상세페이지

  const params = useParams();
  console.log('URL 파라미터:', params); 

  const rawEstimateId = params.estimateId;  // 라우터에서 정의한 이름과 동일하게 사용
  console.log('URL에서 받은 견적서 ID:', rawEstimateId);

  const estimateId = rawEstimateId ? parseInt(rawEstimateId) : 0;
  console.log('변환된 견적서 ID:', estimateId);
  
  
  //견적서 디테일 가져오기
  const {
    data: estimateDetail,
    isLoading: isDetailLoading,
    isError: isDetailError,
  } = useEstimateDetail(estimateId);

  if (isDetailLoading) {
    console.log('특정 조회 로딩중');
    <div>견적서 조회 중..</div>
  }
  if (isDetailError) {
    console.log('특정 조회 실패');
  }


  useEffect(() => {
    if (estimateDetail && !isDetailLoading) {
      console.log('✅ 특정 견적서 데이터 받아옴:', estimateDetail);
    }
  });

  //제안받은 견적서 가져오기
  const {
    data: offeredData,
    isLoading: isOfferedLoading,
    isError: isOfferedError,
  } = useOfferedestimate(estimateId);

  if (isOfferedLoading) {
    console.log('제안받은 견적 로딩중');
    <div>제안받은 견적서 조회 중..</div>
  }
  if (isOfferedError) {
    console.log('제안받은 견적 조회 실패');
    <div>제안받은 견적서가 없습니다.</div>
  }
  console.log('제안받은 견적 데이터:',offeredData);
 
  const ConsultingImages = ({ images }: { images: string[] }) => {
    if (!images || images.length === 0) {
      return <div style={{padding:'50px 0px 50px 0px'}}>첨부된 이미지가 없습니다.</div>;
    }
    return (
      <E.ConsultingImageContainer>
        {estimateDetail?.imageUrls.map((imageUrl, index) => (
          <E.ConsultingImage
            key={`${imageUrl}-${index}`}
            src={imageUrl}
            alt={`컨설팅 이미지 ${index + 1}`}
            onError={(e) => {
              console.error('이미지 로드 실패:', imageUrl);
              e.currentTarget.src = '/fallback-image.png';
            }}
          />
        ))}
      </E.ConsultingImageContainer>
    );
  };


  return (
    <div style={{ backgroundColor: '#F9F9F9', paddingTop: 84 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <E.Title>{estimateDetail?.title}</E.Title>
        <E.Subtitle>{estimateDetail?.createdDate}</E.Subtitle>
        <E.Content>
          {/* 제목 */}
          <E.Card style={{ padding: '21px 48px 21px 48px' }}>
            <E.Inline>
              <E.Name>제목</E.Name>
              <E.Value style={{ color: '#2C2C2C', fontWeight: '600' }}>
                {estimateDetail?.title}
              </E.Value>
            </E.Inline>
          </E.Card>

          {/* 상세정보 */}
          <E.Card style={{ padding: '41px 48px 41px 48px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <E.Inline>
                <E.Name>분야</E.Name>
                <E.Value>
                  {estimateDetail?.cropName} ({estimateDetail?.cropCategory})
                </E.Value>
              </E.Inline>
              <E.Inline>
                <E.Name>종류</E.Name>
                <E.Value>{estimateDetail?.category}</E.Value>
              </E.Inline>
              <E.Inline>
                <E.Name>위치</E.Name>
                <E.Value>{`${estimateDetail?.areaName} ${estimateDetail?.areaNameDetail}`}</E.Value>
              </E.Inline>
              <E.Inline>
                <E.Name>예산</E.Name>
                <E.Value>{estimateDetail?.budget}</E.Value>
              </E.Inline>
            </div>
          </E.Card>

          {/* 컨설팅 설명 */}
          <E.Card style={{ padding: '41px 48px 41px 48px' }}>
            <E.Inline>
              <E.Name>컨설팅 설명</E.Name>
            </E.Inline>
            <ConsultingImages images={estimateDetail?.imageUrls || []} />

            <E.ConsultingContent>{estimateDetail?.body}</E.ConsultingContent>
          </E.Card>

          <div style={{ paddingTop: '110px' }}>
            <Title>제안받은 견적</Title>
            <Subtitle>컨설팅을 진행할 전문가를 확인하고 선택해보세요</Subtitle>
          </div>

          {offeredData && offeredData.result && offeredData.result.offerList.length > 0 && (
            <ProfileWrapper>
              {offeredData?.result.offerList.map((profile: OfferList) => {
                return (
                  <SuggestedExpertProfile
                    key={`${profile.expertId}-${profile.nickname}`}
                    profileImg={profile?.profileImageUrl}
                    name={profile?.name}
                    nickName={profile?.nickname}
                    ratings={profile?.rating}
                    years={profile?.consultingCount}
                    introduction={profile?.description}
                  />
                );
              })}
            </ProfileWrapper>
          )}

          {(offeredData?.result?.offerList?.length === 0 || !offeredData) && !isOfferedLoading && !isOfferedError && (
            <div style={{ textAlign: 'center', padding: '50px', color: '#666', fontSize: '20px' }}>
              제안받은 견적이 아직 없습니다
            </div>
          )}
        </E.Content>
      </div>
    </div>
  );
}

const ProfileWrapper = styled.div`
  padding-top: 6px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1200px;
  gap: 20px;
  margin-bottom: 300px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-left: 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    margin-left: 40px;
  }
`;

const Title = styled.div`
  color: #000;
  font-family: 'PretendardRegular';
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 45px */

  @media (min-width: 768px) {
    margin-left: 40px;
  }

  @media (min-width: 480px) {
    font-size: 24px;
    margin-left: 20px;
  }
`;

const Subtitle = styled.div`
  color: #5f5f5f;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */

  @media (min-width: 768px) {
    margin-left: 40px;
  }

  @media (min-width: 480px) {
    font-size: 14px;
    margin-left: 20px;
  }
`
