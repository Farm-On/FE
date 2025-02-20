import * as P from '@/styles/components/SuggestedProfile.style';
import { useNavigate } from 'react-router-dom';

interface ExpertProfileCardProps {
  profileImg: string;
  name: string;
  nickName?:string;
  years: number;
  introduction: string;
  expertId: number;
  roomId?: number;
}

export const SuggestedExpertProfile = ({
  profileImg,
  name,
  nickName,
  years,
  introduction,
  expertId,
  roomId,
}: ExpertProfileCardProps) => {
  const navigate = useNavigate();

  const handleGotoProfile = ()=>{
    navigate(`/expert/profile/${expertId}`);
  };

  const handleGotoChat = ()=>{
    navigate(`/chat/${roomId}`)
  }

  return (
    <P.Card>
      <P.Avatar src={profileImg} />
      <P.Profile>
        <P.Name>
          {nickName ? `${name} (${nickName})`: name}
        </P.Name>
        <P.Info>
          <P.InfoText>컨설팅 수 {years}건</P.InfoText>
        </P.Info>

        <P.IntroductionText>{introduction}</P.IntroductionText>
      </P.Profile>

      <P.Buttons>
        <P.ViewPortfolioBtn onClick={handleGotoProfile}>프로필 보기</P.ViewPortfolioBtn>
        <P.GoChattingBtn onClick={handleGotoChat}>채팅하기</P.GoChattingBtn>
      </P.Buttons>
    </P.Card>
  );
};
