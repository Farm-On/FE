import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import logo from '../../assets/images/logo.png';

const NavContainer = styled.nav`
  height: 80px;
  background: #ffffff;
  border-bottom: 1px solid #dadada;
  display: flex;
  justify-content: center;
`;

const NavContent = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

const Logo = styled(Link)`
  width: 119.14px;
  height: 24.71px;
  display: flex;
  align-items: center;
  text-decoration: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const MenuLink = styled(Link)`
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 18px;
  line-height: 166%;
  color: #000000;
  text-decoration: none;
  white-space: nowrap;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`;

const AuthLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const RegisterLink = styled(Link)`
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #00a05e;
  text-decoration: none;
  white-space: nowrap;
`;

const LoginLink = styled(Link)`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
  text-decoration: none;
  white-space: nowrap;
`;

const SignupButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 40px;
  background: #00a05e;
  border-radius: 6px;
  text-decoration: none;
`;

const SignupText = styled.span`
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <NavContent>
        <LeftSection>
          <Logo to="/">
            <img src={logo} alt="FarmON" />
          </Logo>
          <MenuContainer>
            <MenuLink to="/expert-profile">전문가 프로필</MenuLink>
            <MenuLink to="/chat">채팅</MenuLink>
            <MenuLink to="/community">커뮤니티</MenuLink>
          </MenuContainer>
        </LeftSection>

        <RightSection>
          <AuthLinks>
            <RegisterLink to="/expert-register">전문가 등록하기</RegisterLink>
            <LoginLink to="/login">로그인</LoginLink>
          </AuthLinks>
          <SignupButton to="/signup">
            <SignupText>회원가입</SignupText>
          </SignupButton>
        </RightSection>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;
