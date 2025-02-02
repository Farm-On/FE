import { useNavigate } from 'react-router-dom';
import GreenCheck from '@/assets/icons/greenCheck.svg?react';
import * as S from '@/styles/pages/Auth/SignupComplete.style';
import logo from '@/assets/images/logo.png';
import { Footer } from '@/components/Footer';

export default function SignupComplete() {
  const navigate = useNavigate();

  const handleGoMain = () => {
    navigate('/');
  };

  return (
    <S.Container>
      <S.LogoWrapper>
        <S.Logo src={logo} alt="FarmON" />
      </S.LogoWrapper>
      <S.Main>
        <GreenCheck />
        <S.Title>회원가입 완료</S.Title>
        <S.SubTitle>환영합니다. FarmON 회원가입이 완료되었습니다.</S.SubTitle>
        <S.SubTitle>지금 바로 당신의 농업 고민을 해결해보세요!</S.SubTitle>
        <S.Button onClick={handleGoMain}>메인으로 가기</S.Button>
      </S.Main>
      <S.FooterWrapper>
        <Footer />
      </S.FooterWrapper>
    </S.Container>
  );
}
