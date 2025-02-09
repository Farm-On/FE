import * as P from '@/styles/components/SuggestedProfile.style';

import Star from '@/assets/icons/Star.svg?react';

interface ExpertProfileCardProps {
  profileImg: string;
  name: string;
  ratings: number;
  years: number;
  introduction: string;
}

export const SuggestedExpertProfile = ({
  profileImg,
  name,
  ratings,
  years,
  introduction,
}: ExpertProfileCardProps) => {
  return (
    <P.Card>
      <P.Avatar src={profileImg} />
      <P.Profile>
        <P.Name>{name}</P.Name>
        <P.Info>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Star style={{ width: '26px', height: '26px' }} />
            <P.RatingsText>{ratings}</P.RatingsText>
          </div>
          <P.InfoText>컨설팅 수 {years}건</P.InfoText>
        </P.Info>

        <P.IntroductionText>{introduction}</P.IntroductionText>
      </P.Profile>

      <P.Buttons>
        <P.ViewPortfolioBtn>프로필 보기</P.ViewPortfolioBtn>
        <P.GoChattingBtn>채팅하기</P.GoChattingBtn>
      </P.Buttons>
    </P.Card>
  );
};
