import * as RE from '../../styles/pages/RequestEstimate';
import HomeIcon from '../../assets/icons/Home.svg?react';
import GreyRightIcon from '../../assets/icons/GreyRight.svg?react';
import CameraIcon from '../../assets/icons/RQcamera.svg?react';
import { useState } from 'react';
import { EstimateBudget } from '@/components/EstimateBudget';
import { ChoiceCity } from '@/components/ChoiceCity/ChoiceCity';
import { StateScroll } from '@/components/StateScroll';
import styled from '@emotion/styled';
import React, { useRef } from 'react';

interface Category {
  id: string;
  title: string;
}

const initialCategories: Category[] = [
  { id: '1', title: '작물관리' },
  { id: '2', title: '토양 및 환경관리' },
  { id: '3', title: '농업 경영' },
  { id: '4', title: '스마트팜' },
  { id: '5', title: '정책 및 지원사업' },
  { id: '6', title: '기타' },
];

export default function RequestEstimatePage(): JSX.Element {
  const [selected, setSelected] = useState<string>('2');
  const [titleValue, setTitleValue] = useState<string>('');
  const [contentValue, setContentValue] = useState<string>('');
  //const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<string>('');
  //const [isApplied, setIsApplied] = useState<boolean>(false);
  const [processing, setProcessing] = useState<number>(0);
  const [currentSection, setCurrentSection] = useState<
    'category' | 'location' | 'budget' | 'detail'
  >('category');
  const categoryRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const budgetRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement>,
    section: 'category' | 'location' | 'budget' | 'detail'
  ) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setCurrentSection(section);
  };
  const handleChipClick = (id: string) => {
    setSelected(id);
    scrollToSection(locationRef, 'location');
    setProcessing(processing + 25);
  };

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    if (newText.length <= 20) setTitleValue(newText);
  };

  const handleContentValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length <= 3000) setContentValue(newText);
  };


  const handleMoney = (value: string) => {
    setIsChecked(value);
    scrollToSection(detailRef,'detail')
  };

  const handleSucceed = () => {
    if (contentValue.length >= 1) {
      setProcessing(processing + 25);
    }
  };

  const handleCityClick = ()=>{
    scrollToSection(budgetRef, 'budget')
  };

  return (
    <>
      <TopContainer>
        <RE.Title>
          <h2>견적요청</h2>
        </RE.Title>
        <RE.Wrapper>
          <RE.Category>
            <HomeIcon />
            <GreyRightIcon />
            <p>곡물</p>
            <GreyRightIcon />
            <p>쌀</p>
          </RE.Category>
          <RE.Process>
            <p>진행률 {processing}%</p>
          </RE.Process>
        </RE.Wrapper>
      </TopContainer>

      <RE.PageWrapper>
        <RE.CenteredContainer>
          <RE.Container>
            <div>
              {/* 첫 번째 섹션 */}
              <div style={{ position: 'relative', paddingTop: '44px' }} ref={categoryRef}>
                <RE.Bubble>어떤 컨설팅을 원하세요?</RE.Bubble>
                <RE.Chips>
                  {initialCategories.map((category) => (
                    <div key={category.id}>
                      <RE.Chip
                        isSelected={selected === category.id}
                        onClick={() => handleChipClick(category.id)}
                      >
                        {category.title}
                      </RE.Chip>
                    </div>
                  ))}
                </RE.Chips>
                <RE.DividingLine />
                <StateScroll
                  currentSection={currentSection}
                  categoryOnClick={() => scrollToSection(categoryRef, 'category')}
                  locateOnClick={() => scrollToSection(locationRef, 'location')}
                  budgetOnClick={() => scrollToSection(budgetRef, 'budget')}
                  datailOnClick={() => scrollToSection(detailRef, 'detail')}
                />
              </div>

              {/* 두 번째 섹션 */}
              <div ref={locationRef}>
                <RE.Bubble>컨설팅 위치는 어디인가요?</RE.Bubble>
                <div style={{ paddingBottom: '18px', paddingLeft: '6px' }}>
                  <ChoiceCity onClick={handleCityClick}/>
                </div>
                <RE.DividingLine />
              </div>

              {/* 세 번째 섹션 */}
              <div ref={budgetRef}>
                <RE.Bubble>예산은 어느 정도인가요?</RE.Bubble>
                <RE.InputContainer>
                  {[
                    '10~50만원',
                    '50~100만원',
                    '100~200만원',
                    '200~500만원',
                    '500~1000만원',
                    '1000만원 이상'
                    
                  ].map((value) => (
                    <EstimateBudget
                      key={value}
                      id={value}
                      value={value}
                      label={value}
                      checked={isChecked === value}
                      onChange={() => handleMoney(value)}
                    />
                  ))}
                </RE.InputContainer>
                <RE.DividingLine />
              </div>

              {/* 네 번째 섹션 */}
              <div ref={detailRef}>
                <RE.Bubble>해당 컨설팅에 대해 자세히 설명해주세요.</RE.Bubble>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '18px',
                    paddingTop: '40px',
                    paddingLeft: '6px',
                  }}
                >
                  <div style={{ position: 'relative' }}>
                    <RE.PostTitle
                      type="text"
                      placeholder="제목을 입력해주세요."
                      value={titleValue}
                      onChange={handleValue}
                      onClick={() => handleSucceed()}
                    />
                    <RE.TitleLength>{titleValue.length}/20</RE.TitleLength>
                  </div>
                  <InputContainer style={{ position: 'relative' }}>
                    <RE.PostContent
                      placeholder="내용을 입력해주세요."
                      value={contentValue}
                      onChange={handleContentValue}
                    />
                    <div style={{ position: 'absolute', bottom: '20px', left: '26px' }}>
                      <CameraIcon />
                    </div>
                    <RE.ContentLength>
                      {contentValue.length}/3000
                    </RE.ContentLength>
                  </InputContainer>
                </div>
                <ApplyBtn>
                  <RE.Button>견적 조회하기</RE.Button>
                </ApplyBtn>
              </div>
            </div>
          </RE.Container>
        </RE.CenteredContainer>
      </RE.PageWrapper>
    </>
  );
}

const InputContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 1194px;
`;

const ApplyBtn = styled.div`
  display: flex;
  justify-content: center;
  margin: 172px 0 350px;
`;
const TopContainer = styled.div`
display: flex;
flex-direction: column;
gap: 11px;
padding-left: 180px;
max-width: 1200px;
padding-bottom: 25px;
padding-top: 70px;

@media (max-width: 768px) {
  padding-left: 30px;
  padding-bottom: 25px;
  padding-top: 70px;
}

@media (max-width: 480px) {
  padding-left: 20px;
  padding-bottom: 25px;
  padding-top: 70px;
}
`;