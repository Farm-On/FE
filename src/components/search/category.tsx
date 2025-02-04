import * as C from '@/styles/components/Search/Category.style';

import GrainImage from '@/assets/images/grain.png';
import VegImage from '@/assets/images/vegetable.png';
import FruitImage from '@/assets/images/fruit.png';
import InsamImage from '@/assets/images/insam.png';
import FlowerImage from '@/assets/images/flower.png';
import FeedImage from '@/assets/images/feed.png';
import EtcImage from '@/assets/images/etc.png';

export const Category = () => {
  return (
    <C.Container>
      <C.CategoryContainer>
        <C.ImgContainer>
          <C.StyledImage src={GrainImage} alt="Grain" />
        </C.ImgContainer>
        <C.StyledTitle>곡물</C.StyledTitle>
      </C.CategoryContainer>

      <C.CategoryContainer>
        <C.ImgContainer>
          <C.StyledImage src={VegImage} alt="Grain" />
        </C.ImgContainer>
        <C.StyledTitle>채소작물</C.StyledTitle>
      </C.CategoryContainer>

      <C.CategoryContainer>
        <C.ImgContainer>
          <C.StyledImage src={FruitImage} alt="Grain" />
        </C.ImgContainer>
        <C.StyledTitle>과일</C.StyledTitle>
      </C.CategoryContainer>

      <C.CategoryContainer>
        <C.ImgContainer>
          <C.StyledImage src={InsamImage} alt="Grain" />
        </C.ImgContainer>
        <C.StyledTitle>특용</C.StyledTitle>
      </C.CategoryContainer>

      <C.CategoryContainer>
        <C.ImgContainer>
          <C.StyledImage src={FlowerImage} alt="Grain" />
        </C.ImgContainer>
        <C.StyledTitle>화훼</C.StyledTitle>
      </C.CategoryContainer>

      <C.CategoryContainer>
        <C.ImgContainer>
          <C.StyledImage src={FeedImage} alt="Grain" />
        </C.ImgContainer>
        <C.StyledTitle>사료</C.StyledTitle>
      </C.CategoryContainer>

      <C.CategoryContainer>
        <C.ImgContainer>
          <C.StyledImage src={EtcImage} alt="Grain" />
        </C.ImgContainer>
        <C.StyledTitle>기타</C.StyledTitle>
      </C.CategoryContainer>
    </C.Container>
  );
};
