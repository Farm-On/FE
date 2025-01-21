import { EstimateCard } from '@/components/EstimateCard.tsx';
import { ExpertCard } from '@/components/ExpertCard.tsx';
import * as E from '@/styles/pages/MyEstimatePage.style';
import styled from '@emotion/styled';
import AddBtn from '@/assets/icons/addBtn.svg?react';
import ChevronRight from '@/assets/icons/ChevronRight.svg?react';
import { useNavigate } from 'react-router-dom';

export default function MyEstimatePage() {
  const navigate = useNavigate();

  return (
    <>
      <E.Container>
        <div>
          <E.Title1>
            <h2>내 견적</h2>
            <E.ViewAll>
              <h4>전체보기</h4>
              <ChevronRight />
            </E.ViewAll>
          </E.Title1>
          <E.MyCards>
            <EstimateCard productName="쌀" product="곡물" date="2024.12.08" />
            <E.AddCard>
              <AddBtn onClick={() => navigate('/NewEstimate')} />
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
            <ExpertCard
              name="김동호"
              product="곡물,벼"
              star={4.8}
              years={10}
              url="https://s3-alpha-sig.figma.com/img/4b31/bff0/bc6534da780b807afe7ead5e6ea346cb?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oNnZueavOKP52R0zu1PQ92n~~XSL1~ic8d4IBDbnEkZkCrrKfnOhAQtDiXyEDZxPvE7QNQWYJ9C1zet4szBaof-NpS3JBC3dR6IZ0nlYU9Y756vRM4sdNL1izmXbuHfxtflD83K6qrKgS6eUgWAZaCT9JrcbfUcG2dPL~yIX5dR3m4dadUvjrOgIhEi~gralxKHpfDmuJNc3dU3PeZcRm7-ttbo8Z0MI3PDENL0N96uGVd0YINeCTlPnJmPZ-YqSAAHMsRtvKHQxKRk2uPXYjBU0FhS1XvJnTYiKe5YxNeexfsJdb5GKu3mdX7Nm4HKGun3BWBwja2zHhi7MEHG76Q__"
            />

            <ExpertCard name="이수환" product="과일,감귤" star={4.8} years={12} url="" />

            <ExpertCard
              name="이지민"
              product="채소작물,버섯"
              star={4.8}
              years={20}
              url="https://s3-alpha-sig.figma.com/img/cebb/5890/aa2791b8acee1732a37529d4647a9953?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LlBk41xTfjMz4CeCx1vOl3XjYTGFyKjL9qc6sVumCC-bp~wcMOFAT~koXYE8TZ6xZ4OOIzohlUx8ghVWaqSowb0zRjnQJxTYvcxMs4rrMYHjThYW3lmelLLe10-oUf6cw3c7BbAGwkAoBj1-RW8IMoGS6pHOa0Ns~ewi-~K2CmpWc3tPr-uEPTFbVrlTGlArp-h~Ve7tq5oYpH3CBJCkIKVu1ixfKw43NnHgkqxxXo3u16xaKyMZYnyE2PH9aRoQH01vzK~QhMrmx0JeijDGTgi~EwUXDde7mdv~CiiTzKHIk4ZrsGi8CR8WPNgoOCwtXwIG~t1J31Pucwr1hek7DA__"
            />

            <E.ChevronRight>
              <ChevronRightB />
            </E.ChevronRight>
          </E.ExpertCardWrap>
        </>
      </E.Container>
    </>
  );
}

const ChevronRightB = styled(ChevronRight)`
  width: 52px;
  height: 52px;
  top: 717px;
  left: 1536px;
`;
