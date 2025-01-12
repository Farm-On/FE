<<<<<<< HEAD
import styled from '@emotion/styled';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import InquiryBanner from '../../components/InquiryBanner';

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;
  position: relative;
`;

const Content = styled.div`
  padding-top: 80px;
  padding-bottom: 382px; // Footer + InquiryBanner height
`;

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <Content>{/* 여기에 홈페이지의 다른 내용이 들어갈 예정 */}</Content>
      <InquiryBanner />
      <Footer />
    </HomeContainer>
  );
=======
import Community from "../../components/Community";

const Home = () => {
  return (
    <div>
      
      <Community/>

    </div>
  )
>>>>>>> develop
};

export default Home;
