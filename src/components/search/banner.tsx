import { useState } from 'react';

import * as B from '@/styles/components/Search/Banner.style';

import Farmer from '@/assets/images/farmer.png';
import Left from '@/assets/images/chevron-left.png';
import Right from '@/assets/images/chevron-right.png';

export const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  return (
    <B.BannerContainer>
      <B.ChevronButton direction="left" onClick={handlePrevSlide}>
        <img src={Left} alt="left" />
      </B.ChevronButton>

      <B.TitleContainer>
        <B.StyledTitle>믿을 수 있는</B.StyledTitle>
        <B.StyledTitle>1:1 농업 전문가 컨설팅</B.StyledTitle>
        <B.StyledP>경험 많은 전문가에게</B.StyledP>
        <B.StyledP>맞춤형 해결책을 받아보세요.</B.StyledP>
      </B.TitleContainer>

      <B.ImgContainer>
        <B.StyledImage src={Farmer} alt="farmer" />
      </B.ImgContainer>

      <B.PageContainer>
        {[0, 1, 2].map((index) => (
          <B.StyledPage
            key={index}
            active={currentSlide === index}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </B.PageContainer>

      <B.ChevronButton direction="right" onClick={handleNextSlide}>
        <img src={Right} alt="right" />
      </B.ChevronButton>
    </B.BannerContainer>
  );
};
