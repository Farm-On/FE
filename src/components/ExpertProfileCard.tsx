import * as P from '@/styles/components/ExpertProfileCard.style';

import Star from '@/assets/icons/Star.svg?react';
import DefaultAvatar from '@/assets/icons/DefaultAvatar.svg?react';
import { useNavigate } from 'react-router-dom';

interface ExpertProfileCardProps {
  id: number;
  profileImg: string;
  isNicknameOnly: boolean;
  name: string;
  nickname: string | null;
  ratings: number | null;
  years: number;
  location: string;
  fields: string;
  introduction: string;
}

export const ExpertProfileCard = ({
  id,
  profileImg,
  isNicknameOnly,
  name,
  nickname,
  ratings,
  years,
  location,
  fields,
  introduction,
}: ExpertProfileCardProps) => {
  const navigate = useNavigate();

  return (
    <P.Card>
      {profileImg ? <P.Avatar src={profileImg} /> : <DefaultAvatar width={84} height={84} />}
      <P.Profile>
        <P.Name>
          {isNicknameOnly ? nickname : `${name}` + (nickname ? ` (${nickname})` : '')}
        </P.Name>
        <P.Info>
          <div>
            <Star />
            <P.RatingsText>{String(ratings ?? '0.0')}</P.RatingsText>
          </div>
          <P.InfoText>
            경력 {years ? `${years}년` : '없음'} | {location}
          </P.InfoText>
        </P.Info>
        <P.FieldText>{fields}</P.FieldText>
        <P.IntroductionText>{introduction}</P.IntroductionText>
        <P.ViewPortfolioBtn onClick={() => navigate(`/expert/portfolio/${id}`)}>
          포트폴리오 보기
        </P.ViewPortfolioBtn>
      </P.Profile>
    </P.Card>
  );
};
