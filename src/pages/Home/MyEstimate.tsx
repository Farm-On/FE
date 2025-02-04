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
    <div style={{ paddingBottom: '487px' }}>
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
            <EstimateCard 
              productName="콩" 
              product="곡물" 
              date="2024.11.11" 
              title='토양 관리 및 물 관리 방법' 
              category='토양 및 환경관리'
              region='경기 이천시'
              money='500만원~1,000만원'
              />
            <EstimateCard 
              productName="쌀" 
              product="곡물" 
              date="2024.11.11" 
              title='논 배수와 비료 사용법' 
              category='토양 및 환경관리'
              region='경기 이천시'
              money='500만원~1,000만원'
              />
            <EstimateCard 
              productName="콩" 
              product="곡물" 
              date="2024.11.11"  
              title='논 배수와 비료 사용법' 
              category='토양 및 환경관리'
              region='경기 이천시'
              money='500만원~1,000만원'
              />
            <EstimateCard 
              productName="콩" 
              product="곡물" 
              date="2024.11.11"  
              title='쌀농사 토양, 물 관리 관련 컨설팅...' 
              category='토양 및 환경관리'
              region='경기 이천시'
              money='500만원~1,000만원'
              />
            <EstimateCard 
              productName="옥수수" 
              product="곡물" 
              date="2024.11.11"  
              title='옥수수 재배 초보 입니다. 비료 사...' 
              category='토양 및 환경관리'
              region='경기 이천시'
              money='500만원~1,000만원'
              />

            <E.AddCard onClick={() => navigate('/MyEstimate/RequestEstimate')}>
              <AddBtn />
              <p>새 견적 받아보기</p>
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
            <ExpertCard name="농사꾼131" product="곡물,벼" star={4.8} years={10} url={DonghoPhoto} />

            <ExpertCard name="이수환" product="과일,감귤" star={4.8} years={12} url={SuhwanPhoto} />

            <ExpertCard name="이지민(해충해방)" product="채소작물,버섯" star={4.8} years={20} url={JiminPhoto} />

            <E.ChevronRight>
              <ChevronRightB />
            </E.ChevronRight>
          </E.ExpertCardWrap>
        </div>
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
