import styled from 'styled-components';
import GrainImage from '../../assets/images/grain.png';
import VegImage from '../../assets/images/vegetable.png';
import FruitImage from '../../assets/images/fruit.png';
import InsamImage from '../../assets/images/insam.png';
import FlowerImage from '../../assets/images/flower.png';
import FeedImage from '../../assets/images/feed.png';
import EtcImage from '../../assets/images/etc.png';

const Container = styled.div`
  display: flex;
  margin-top: 3.75rem;
  align-items: center;
  justify-content: center;
`;
const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 3.125rem;
`;

const ImgContainer = styled.div`
  display: flex;
  height: 4.375rem;
  width: 4.3753rem;
  background-color: #f5f5f5;
  border-radius: 4.658vw 0 4.658vw 4.658vw;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
`;

const StyledTitle = styled.p`
  font-size: 1rem;
`;

const Category = () => {
  return (
    <Container>
      <CategoryContainer>
        <ImgContainer>
          <StyledImage src={GrainImage} alt="Grain" />
        </ImgContainer>
        <StyledTitle>곡물</StyledTitle>
      </CategoryContainer>

      <CategoryContainer>
        <ImgContainer>
          <StyledImage src={VegImage} alt="Grain" />
        </ImgContainer>
        <StyledTitle>채소작물</StyledTitle>
      </CategoryContainer>

      <CategoryContainer>
        <ImgContainer>
          <StyledImage src={FruitImage} alt="Grain" />
        </ImgContainer>
        <StyledTitle>과일</StyledTitle>
      </CategoryContainer>

      <CategoryContainer>
        <ImgContainer>
          <StyledImage src={InsamImage} alt="Grain" />
        </ImgContainer>
        <StyledTitle>특용</StyledTitle>
      </CategoryContainer>

      <CategoryContainer>
        <ImgContainer>
          <StyledImage src={FlowerImage} alt="Grain" />
        </ImgContainer>
        <StyledTitle>화훼</StyledTitle>
      </CategoryContainer>

      <CategoryContainer>
        <ImgContainer>
          <StyledImage src={FeedImage} alt="Grain" />
        </ImgContainer>
        <StyledTitle>사료</StyledTitle>
      </CategoryContainer>

      <CategoryContainer>
        <ImgContainer>
          <StyledImage src={EtcImage} alt="Grain" />
        </ImgContainer>
        <StyledTitle>기타</StyledTitle>
      </CategoryContainer>
    </Container>
  );
};

export default Category;
