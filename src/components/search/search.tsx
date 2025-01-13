import styled from 'styled-components';
import Category from './category';
import SearchImg from '../../assets/images/search.png';
import Banner from './banner';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const SearchSection = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const BackgroundBlur = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  opacity: 0.6;
  background: radial-gradient(
    100% 100% at 50% 50%,
    rgba(111, 216, 146, 0.5) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: 66px 66px 66px rgba(0, 0, 0, 0.1);
  border-radius: 9999px;
  filter: blur(66px);
  z-index: 0;
  top: -158px;
  left: 50%;
  transform: translateX(-50%);
`;

const Title1 = styled.h1`
  font-family: 'Pretendard';
  font-size: 44px;
  font-weight: bold;
  margin: 0;
  margin-top: 137px;
  text-align: center;
`;

const Title2 = styled.h1`
  font-family: 'Pretendard';
  font-size: 44px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 86px;
  text-align: center;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 684px;
  height: 66px;
  background-color: #f5f5f5;
  border-radius: 16px;
  margin-bottom: 40px;
`;

const StyledImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  margin-left: 24px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-family: 'Pretendard';
  font-size: 18px;
  color: #8e8e8e;
  background: none;
  margin: 0 24px;

  &::placeholder {
    color: #8e8e8e;
  }
`;

const BannerContainer = styled.div`
  width: 100%;
  margin-top: 80px;
`;

const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const Search = () => {
  return (
    <Container>
      <SearchSection>
        <BackgroundBlur />
        <Title1>지금 당신에게</Title1>
        <Title2>필요한 컨설팅을 찾아보세요.</Title2>
        <SearchBar>
          <StyledImage src={SearchImg} alt="Search" />
          <Input placeholder="인삼 재배법이 궁금하다면?" />
        </SearchBar>
        <CategoryContainer>
          <Category />
        </CategoryContainer>
      </SearchSection>
      <BannerContainer>
        <Banner />
      </BannerContainer>
    </Container>
  );
};

export default Search;
