import styled from '@emotion/styled';
import Navbar from '../../components/Navbar';

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;
`;

const Content = styled.div`
  padding-top: 80px; // Navbar 높이만큼 패딩
`;

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <Content>{/* 여기에 홈페이지의 다른 내용이 들어갈 예정 */}</Content>
    </HomeContainer>
  );
};

export default Home;
