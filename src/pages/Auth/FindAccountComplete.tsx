import { useLocation, useNavigate } from 'react-router-dom';
import GreenCheck from '@/assets/icons/greenCheck.svg?react';
import * as S from '@/styles/pages/Auth/FindAccountComplete.style';
import logo from '@/assets/images/logo.png';
import { Footer } from '@/components/Footer';

export default function FindAccountComplete() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

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
        <S.Title>본인인증 완료</S.Title>
        <S.SubTitle>
          가입하신 아이디는
          <br />
          {email} 입니다.
        </S.SubTitle>
        <S.Button onClick={handleGoMain}>메인으로 가기</S.Button>
      </S.Main>
      <S.FooterWrapper>
        <Footer />
      </S.FooterWrapper>
    </S.Container>
  );
}
