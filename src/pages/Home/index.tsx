import styled from '@emotion/styled';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import InquiryBanner from '../../components/InquiryBanner';
import Community from '../../components/Community';

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
      <Content>
        <Community />
      </Content>
      <InquiryBanner />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
