import * as H from '@/styles/pages/Home.style';

import { Link } from 'react-router-dom';
import ChevronRight from '@/assets/icons/ChevronRight.svg?react';

import { InquiryBanner } from '@/components/InquiryBanner';
import { Community } from '@/components/Community';
import { Search } from '@/components/search/search';
import { Announcements } from '@/components/Announcements';
import { Trendings } from '@/components/Trendings';

export default function Home() {
  return (
    <H.HomeContainer>
      <H.MainContent>
        <H.SearchSection>
          <Search />
        </H.SearchSection>
        <H.CommunitySection>
          <Header title="궁금한 점을 나눠보세요" link="/community" />
          <Community />
        </H.CommunitySection>
        <H.TrendingsSection>
          <Header title="지금 인기있는 칼럼" link="#" />
          <Trendings />
        </H.TrendingsSection>
        <H.AnnouncementSection>
          <Header title="새 소식을 알려드려요" link="#" />
          <Announcements />
        </H.AnnouncementSection>
        <H.BannerSection>
          <InquiryBanner />
        </H.BannerSection>
      </H.MainContent>
    </H.HomeContainer>
  );
}

interface HeaderProps {
  title: string;
  link: string;
}

const Header = ({ title, link }: HeaderProps) => (
  <H.HeaderContainer>
    <H.HeaderTitle>{title}</H.HeaderTitle>
    <H.HeaderViewAllContainer>
      <H.HeaderViewAllText>전체보기</H.HeaderViewAllText>
      <Link to={link}>
        <ChevronRight />
      </Link>
    </H.HeaderViewAllContainer>
  </H.HeaderContainer>
);
