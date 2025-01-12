import styled from 'styled-components';
import Page1 from '../../assets/images/page1.png';
import Page2 from '../../assets/images/page2.png';
import Page3 from '../../assets/images/page3.png';
import Farmer from '../../assets/images/farmer.png';
import Left from '../../assets/images/chevron-left.png';
import Right from '../../assets/images/chevron-right.png';
const Container = styled.div`
  display: flex;
  margin-top: 6.875rem;
  background: linear-gradient(180deg, #00a05e 0%, #00b168 100%);
  border-radius: 30px;
  height: 18.125rem;
  width: 113.125rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.188rem;
  margin-left: 2.125rem;
`;

const StyledTitle = styled.p`
  font-size: 1.875em;
  color: white;
  margin: 0;
`;

const StyledP = styled.p`
  font-size: 1.125rem;
  color: white;
  margin: 0;
  margin-top: 0.5rem;
`;

const StyledPage = styled.img`
  width: 0.5rem;
  height: 0.5rem;
  object-fit: cover;
  margin-right: 0.5rem;
`;

const PageContainer = styled.div`
  display: flex;
  margin-top: 16.5rem;
  margin-left: 15.625rem;
`;

const ImgContainer = styled.div`
  display: flex;
  margin-left: 10rem;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LeftChevron = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  margin-top: 7.563rem;
  margin-left: 18.063rem;
`;

const RightChevron = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  margin-top: 7.563rem;
  margin-left: 3rem;
`;

const Banner = () => {
  return (
    <Container>
      <LeftChevron src={Left} alt="left" />
      <TitleContainer>
        <StyledTitle>믿을 수 있는</StyledTitle>
        <StyledTitle>1:1 농업 전문가 컨설팅</StyledTitle>
        <StyledP>경험 많은 전문가에게</StyledP>
        <StyledP>맞춤형 해결책을 받아보세요.</StyledP>
      </TitleContainer>
      <PageContainer>
        <StyledPage src={Page1} alt="page1" />
        <StyledPage src={Page2} alt="page2" />
        <StyledPage src={Page3} alt="page3" />
      </PageContainer>
      <ImgContainer>
        <StyledImage src={Farmer} alt="farmer" />
      </ImgContainer>
      <RightChevron src={Right} alt="right" />
    </Container>
  );
};

export default Banner;
