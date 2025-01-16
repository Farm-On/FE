import styled from '@emotion/styled';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import InquiryBanner from '../../components/InquiryBanner';
import {Community} from '../../components/Community';
import { Trendings } from '../../components/Home_3';
import Search from '../../components/search/search';
import MyEstimatePage from './MyEstimate';

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 80px; // Height of Navbar
  padding-bottom: 180px; // Height of Footer
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SearchSection = styled(Section)`
  margin-bottom: 120px;
`;

const CommunitySection = styled(Section)`
  margin-bottom: 120px;
`;

const TrendingsSection = styled(Section)`
  margin-bottom: 120px;
`;

const BannerSection = styled(Section)`
  margin-bottom: 120px;
`;

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeContainer>
        <MyEstimatePage/>
        {/* <MainContent>
          <SearchSection>
            <Search />
          </SearchSection>
          <CommunitySection>
            <Community />
          </CommunitySection>
          <TrendingsSection>
            <Trendings />
          </TrendingsSection>
          <BannerSection>
            <InquiryBanner />
          </BannerSection>
        </MainContent> */}
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </HomeContainer>
    </>
  );
};

export default Home;
