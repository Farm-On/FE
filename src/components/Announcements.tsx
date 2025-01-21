import * as A from '@/styles/components/Annoucements.style';
import { ReactNode } from 'react';

import New from '@/assets/icons/New.svg?react';
import Speaker from '@/assets/icons/speaker.svg?react';

interface AnnouncementProps {
  icon: ReactNode;
  title: string;
  date: string;
}

const AnnouncementCard = ({ icon, title, date }: AnnouncementProps) => {
  return (
    <A.AnnouncementContainer>
      <A.AnnouncementContent>
        <A.AnnouncementTitleContainer>
          {icon}
          <A.AnnouncementTitle>{title}</A.AnnouncementTitle>
        </A.AnnouncementTitleContainer>
        <A.AnnouncementDate>{date}</A.AnnouncementDate>
      </A.AnnouncementContent>
    </A.AnnouncementContainer>
  );
};

const dummy_announcements = [
  {
    id: 4,
    icon: <New />,
    title: '전문가 매칭 서비스 업데이트: 더 많은 전문가와 연결하세요!',
    date: '2024.12.12',
  },
  {
    id: 5,
    icon: <Speaker />,
    title: '리뷰 시스템 개편: 전문가와의 소중한 경험을 나누어보세요.',
    date: '2024.12.12',
  },
  {
    id: 6,
    icon: <Speaker />,
    title: '함께 FarmON을 개선할 베타 테스트 참가자를 모집합니다!',
    date: '2024.12.12',
  },
];

export const Announcements = () => {
  return dummy_announcements.map((announcement) => (
    <AnnouncementCard
      key={announcement.id}
      icon={announcement.icon}
      title={announcement.title}
      date={announcement.date}
    />
  ));
};
