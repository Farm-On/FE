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

export default function MyEstimatePage() {
  const navigate = useNavigate();

  return (
    <div>
      <E.Container>
        <div>
          <E.Title1>
            <h2>내 견적</h2>
            <E.ViewAll>
              <h4>전체보기</h4>
              <GreenRight />
            </E.ViewAll>
          </E.Title1>
          <E.MyCards>
            <EstimateCard productName="쌀" product="곡물" date="2024.12.08" />
            <E.AddCard>
              <AddBtn onClick={() => navigate('/MyEstimate/RequestEstimate')} />
              <p>새 견적 받아보기</p>
            </E.AddCard>
          </E.MyCards>
          <E.DividingLine />
        </div>

        <>
          <E.Title2>
            <h2>직접 찾기</h2>
            <h3>원하는 전문가와 직접 연결해보세요</h3>
          </E.Title2>

          <E.ExpertCardWrap>
            <ExpertCard name="김동호" product="곡물,벼" star={4.8} years={10} url={DonghoPhoto} />

            <ExpertCard name="이수환" product="과일,감귤" star={4.8} years={12} url={SuhwanPhoto} />

            <ExpertCard
              name="이지민"
              product="채소작물,버섯"
              star={4.8}
              years={20}
              url={JiminPhoto}
            />

            <E.ChevronRight>
              <ChevronRightB />
            </E.ChevronRight>
          </E.ExpertCardWrap>
        </>
      </E.Container>
    </div>
  );
}

const ChevronRightB = styled(ChevronRight)`
  width: 52px;
  height: 52px;
  top: 717px;
  left: 1536px;
`;
