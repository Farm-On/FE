import styled from 'styled-components';
import Category from './category';
import SearchImg from '../../assets/images/search.png';
import Banner from './banner';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const BackgroundBlur = styled.div`
  position: absolute;
  width: 25rem;
  height: 25rem;
  opacity: 0.6;
  background: radial-gradient(
    100% 100% at 50% 50%,
    rgba(111, 216, 146, 0.5) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: 66px 66px 66px rgba(0, 0, 0, 0.1);
  border-radius: 9999px;
  filter: blur(66px);
  z-index: 0; /* 컨텐츠 뒤에 배치 */
  margin-top: -9.875rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1; /* 배경보다 위에 배치 */
`;

const Title1 = styled.h1`
  font-size: 2.75rem;
  font-weight: bold;
  margin-top: 137px;
  margin-bottom: 0;
`;

const Title2 = styled.h1`
  font-size: 2.75rem;
  font-weight: bold;
  margin: 0;
  margin-top: 0;
  margin-bottom: 86px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 42.75rem;
  height: 4.125rem;
  background-color: #f5f5f5;
  border-radius: 1vw;
`;

const StyledImage = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: cover;
  margin-left: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.125rem;
  color: #8e8e8e;
  background: none;
  margin-left: 1rem;
`;

const Search = () => {
  return (
    <Container>
      <BackgroundBlur />
      <ContentWrapper>
        <Title1>지금 당신에게 </Title1>
        <Title2>필요한 컨설팅을 찾아보세요.</Title2>
        <SearchBar>
          <StyledImage src={SearchImg} alt="Grain" />
          <Input placeholder="인삼 재배법이 궁금하다면?" />
        </SearchBar>
        <Category />
        <Banner />
      </ContentWrapper>
    </Container>
  );
};

export default Search;
