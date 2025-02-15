import { EstimateCard } from '@/components/EstimateCard.tsx';
import { ExpertCard } from '@/components/ExpertCard.tsx';
import * as E from '@/styles/pages/MyEstimatePage.style';
import styled from '@emotion/styled';
import AddBtn from '@/assets/icons/addBtn.svg?react';
import ChevronRight from '@/assets/icons/Che.svg?react';
import { useNavigate } from 'react-router-dom';
import SuhwanPhoto from '../../assets/images/suhwan.png';
import JiminPhoto from '../../assets/images/jimin.png';
import DonghoPhoto from '../../assets/images/dongho.png';
import GreenRight from '../../assets/icons/chevron-right-green.svg?react';
import { useRecentEstimates } from '@/hooks/useMyEstimate';

export default function MyEstimatePage() {
  const navigate = useNavigate();
  const userID = 1; //임시

  const {data:estimates, isLoading,isError} = useRecentEstimates(userID);

  const handleEstimateClick = (estimateId: number) => {
    navigate(`/MyEstimate/detail/${estimateId}`);
  };
  
  if(isLoading){
    console.log('내 견적 로딩중')
  }
  if(isError){
    console.log('errrrrr')
  }
  return (
    <E.PageWrapper>
      <E.Container>
        <div>
          <E.Title1>
            <h2>내 견적</h2>
            <E.ViewAll onClick={()=>navigate('/MyEstimate/allEstimates')}>
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
              <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'10px'}}>
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
            <ExpertCard
              name="농사꾼131"
              product="곡물,벼"
              star={4.8}
              years={10}
              url={DonghoPhoto}
            />

            <ExpertCard name="이수환" product="과일,감귤" star={4.8} years={12} url={SuhwanPhoto} />

            <ExpertCard
              name="이지민(해충해방)"
              product="채소작물,버섯"
              star={4.8}
              years={20}
              url={JiminPhoto}
            />

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

`
const StyledP = styled.p`
  @media (max-width: 768px) {
    font-size: 14px !important;
  }

  @media (max-width: 480px) {
    font-size:10px !important;
  }

`