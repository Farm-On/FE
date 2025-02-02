import * as P from '@/styles/components/ExpertProfileCard.style';

import Star from '@/assets/icons/Star.svg?react';

interface ExpertProfileCardProps {
  profileImg: string;
  name: string;
  ratings: number;
  years: number;
  location: string;
  fields: string;
  introduction: string;
}

export const ExpertProfileCard = ({
  profileImg,
  name,
  ratings,
  years,
  location,
  fields,
  introduction,
}: ExpertProfileCardProps) => {
  return (
    <P.Card>
      <P.Avatar src={profileImg} />
      <P.Profile>
        <P.Name>{name}</P.Name>
        <P.Info>
          <div>
            <Star />
            <P.RatingsText>{ratings}</P.RatingsText>
          </div>
          <P.InfoText>
            경력 {years}년 | {location}
          </P.InfoText>
        </P.Info>
        <P.FieldText>{fields}</P.FieldText>
        <P.IntroductionText>{introduction}</P.IntroductionText>
        <P.ViewPortfolioBtn>포트폴리오 보기</P.ViewPortfolioBtn>
      </P.Profile>
    </P.Card>
  );
};
