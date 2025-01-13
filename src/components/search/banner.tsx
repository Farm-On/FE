import styled from 'styled-components';
import Farmer from '../../assets/images/farmer.png';
import Left from '../../assets/images/chevron-left.png';
import Right from '../../assets/images/chevron-right.png';
import { useState } from 'react';

const BannerContainer = styled.div`
  position: relative;
  width: 1650px;
  height: 290px;
  left: calc(50% - 1650px / 2);
  margin-top: 40px;
  background: linear-gradient(180deg, #00a05e 0%, #00b168 100%);
  border-radius: 30px;
  overflow: hidden;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 0px 34px;
  gap: 8px;
  position: absolute;
  width: 298px;
  height: 158px;
  left: 392px;
  top: 51px;
`;

const StyledTitle = styled.div`
  width: 264px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 150%;
  text-transform: uppercase;
  color: #ffffff;
`;

const StyledP = styled.div`
  width: 216px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 166%;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 16px;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  position: absolute;
  width: 40px;
  height: 8px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 18px;
`;

const StyledPage = styled.div<{ active?: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => (props.active ? '#FFFFFF' : '#000000')};
  opacity: ${(props) => (props.active ? 1 : 0.2)};
`;

const ImgContainer = styled.div`
  position: absolute;
  width: 401px;
  height: 274px;
  right: 330px;
  top: 8px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ChevronButton = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.direction === 'left' ? 'left: 293px;' : 'right: 234px;')}
  width: 48px;
  height: 48px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  z-index: 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  return (
    <BannerContainer>
      <ChevronButton direction="left" onClick={handlePrevSlide}>
        <img src={Left} alt="left" />
      </ChevronButton>

      <TitleContainer>
        <StyledTitle>믿을 수 있는</StyledTitle>
        <StyledTitle>1:1 농업 전문가 컨설팅</StyledTitle>
        <StyledP>경험 많은 전문가에게</StyledP>
        <StyledP>맞춤형 해결책을 받아보세요.</StyledP>
      </TitleContainer>

      <ImgContainer>
        <StyledImage src={Farmer} alt="farmer" />
      </ImgContainer>

      <PageContainer>
        {[0, 1, 2].map((index) => (
          <StyledPage
            key={index}
            active={currentSlide === index}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </PageContainer>

      <ChevronButton direction="right" onClick={handleNextSlide}>
        <img src={Right} alt="right" />
      </ChevronButton>
    </BannerContainer>
  );
};

export default Banner;
