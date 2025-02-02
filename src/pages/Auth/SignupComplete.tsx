import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '@/styles/pages/Auth/SignupComplete';
import logo from '@/assets/images/logo.png';
import { Footer } from '@/components/Footer';

const SignupComplete = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.LogoWrapper>
        <S.Logo src={logo} alt="FarmON" />
      </S.LogoWrapper>
      <S.MainContent>
        <S.Wrapper>
          <S.ContentWrapper>
            <S.CompleteIconWrapper>
              <S.CompleteIconCircle>
                <S.CompleteIconCheck />
              </S.CompleteIconCircle>
            </S.CompleteIconWrapper>
            <S.Title>회원가입 완료</S.Title>
            <S.Message>
              환영합니다. FarmON 회원가입이 완료되었습니다.
              <br />
              지금 바로 당신의 농업 고민을 해결해보세요!
            </S.Message>
          </S.ContentWrapper>
          <S.MainButton onClick={() => navigate('/')}>메인으로 가기</S.MainButton>
        </S.Wrapper>
      </S.MainContent>
      <S.FooterWrapper>
        <Footer />
      </S.FooterWrapper>
    </S.Container>
  );
};

export default SignupComplete;
