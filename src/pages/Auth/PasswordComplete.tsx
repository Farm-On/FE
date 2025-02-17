import { useNavigate } from 'react-router-dom';
import GreenCheck from '@/assets/icons/greenCheck.svg?react';
import * as S from '@/styles/pages/Auth/PasswordComplete.style';
import logo from '@/assets/images/logo.png';
import { Footer } from '@/components/Footer';

export default function PasswordComplete() {
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
        <S.Title>비밀번호 변경 완료</S.Title>
        <S.SubTitle>
          비밀번호 변경이 완료되었습니다.
          <br />
          새로운 비밀번호로 재로그인 해주세요.
        </S.SubTitle>
        <S.Button onClick={handleGoMain}>메인으로 가기</S.Button>
      </S.Main>
      <S.FooterWrapper>
        <Footer />
      </S.FooterWrapper>
    </S.Container>
  );
}
