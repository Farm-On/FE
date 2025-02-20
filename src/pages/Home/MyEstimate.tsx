import { EstimateCard } from '@/components/EstimateCard.tsx';
import { ExpertCard } from '@/components/ExpertCard.tsx';
import * as E from '@/styles/pages/MyEstimatePage.style';
import styled from '@emotion/styled';
import AddBtn from '@/assets/icons/addBtn.svg?react';
import ChevronRight from '@/assets/icons/Che.svg?react';
import { useNavigate } from 'react-router-dom';
import GreenRight from '../../assets/icons/chevron-right-green.svg?react';
import { useRecentEstimates,useFindExpertCard } from '@/hooks/useMyEstimate';
import useAuthStore from '../../store/useAuthStore';
import { useEffect } from 'react';

export default function MyEstimatePage() {
  const navigate = useNavigate();
  const { userInfo,isLoggedIn } = useAuthStore();
  const userID = userInfo?.userId;

  const { data: estimates, isLoading, isError } = useRecentEstimates(userID);
  const { data: findExpert, isLoading: isfindingLoading, isError: isfindingError} = useFindExpertCard();
  console.log('직접전문가카드 데이터:',findExpert)

  if(isfindingLoading){
    console.log('직접찾기 전문가 조회중')
  }
  if(isfindingError){
    console.log('직접찾기 전문가 조회실패')
  }

  useEffect(() => {
    if (!isLoggedIn) {
      alert('로그인이 필요한 서비스입니다')
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const handleEstimateClick = (estimateId: number) => {
    navigate(`/MyEstimate/detail/${estimateId}`);
  };

  if (isLoading) {
    console.log('내 견적 로딩중');
  }
  if (isError) {
    console.log('errrrrr');
  }
  return (
    <E.PageWrapper>
      <E.Container>
        <div>
          <E.Title1>
            <h2>내 견적</h2>
            <E.ViewAll onClick={() => navigate('/MyEstimate/allEstimates')}>
              <h4>전체보기</h4>
              <GreenRight />
            </E.ViewAll>
          </E.Title1>

          <E.MyCards>
            {estimates?.map((estimate) => (
              <EstimateCard
                key={estimate.estimateId}
                productName={estimate?.cropName}
                product={estimate?.cropCategory}
                date={estimate?.createdAt}
                title={estimate?.title}
                category={estimate?.estimateCategory}
                region={`${estimate?.areaName} ${estimate?.areaNameDetail}`}
                money={estimate?.budget}
                onClick={() => handleEstimateClick(estimate?.estimateId)}
              />
            ))}

            <E.AddCard onClick={() => navigate('/MyEstimate/RequestEstimate')}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <StyledBtn />
                <StyledP>새 견적 받아보기</StyledP>
              </div>
            </E.AddCard>
          </E.MyCards>

          <E.DividingLine />
        </div>

        <div>
          <E.Title2>
            <h2>직접 찾기</h2>
            <h3>원하는 전문가와 직접 연결해보세요</h3>
          </E.Title2>

          <E.ExpertCardWrap>
            {findExpert?.expertCardDTOList.map((expertCard)=>(
                <ExpertCard
                  key={expertCard?.expertId}
                  name={expertCard?.name}
                  nickName={expertCard?.nickname}
                  cropCategory={expertCard?.cropCategory}
                  cropName={expertCard?.cropName}
                  star={expertCard?.rating}
                  years={expertCard?.careerYears}
                  url={expertCard?.profileImageUrl}
                  onClick={()=>navigate(`/expert/profile/${expertCard?.expertId}`)}
                />
            ))}

            <E.ChevronRight>
              <ChevronRightB />
            </E.ChevronRight>
          </E.ExpertCardWrap>
        </div>
      </E.Container>
    </E.PageWrapper>
  );
}

const ChevronRightB = styled(ChevronRight)`
  width: 52px;
  height: 52px;
  top: 717px;
  left: 1536px;
`;

const StyledBtn = styled(AddBtn)`
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;
const StyledP = styled.p`
  @media (max-width: 768px) {
    font-size: 14px !important;
  }

  @media (max-width: 480px) {
    font-size: 10px !important;
  }
`;
