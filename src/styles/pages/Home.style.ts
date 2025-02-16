import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 180px; // Height of Footer
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Section = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  margin-bottom: 120px;
`;

export const SearchSection = styled(Section)``;

export const CommunitySection = styled(Section)``;

export const TrendingsSection = styled(Section)``;

export const AnnouncementSection = styled(Section)``;

export const BannerSection = styled(Section)``;

export const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.span`
  color: #252525;
  font-family: PretendardMedium;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 39px */
  text-transform: uppercase;
`;

export const HeaderViewAllContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderViewAllText = styled.span`
  color: #00a05e;
  font-family: PretendardSemiBold;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  text-transform: uppercase;
  cursor: pointer;
`;
