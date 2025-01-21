import * as N from '@/styles/components/Navbar.style';

import logo from '@/assets/images/logo.png';

export const Navbar = () => {
  return (
    <N.NavContainer>
      <N.NavContent>
        <N.LeftSection>
          <N.Logo to="/">
            <img src={logo} alt="FarmON" />
          </N.Logo>
          <N.MenuContainer>
            <N.MenuLink to="/expert-profile">전문가 프로필</N.MenuLink>
            <N.MenuLink to="/chat">채팅</N.MenuLink>
            <N.MenuLink to="/community">커뮤니티</N.MenuLink>
          </N.MenuContainer>
        </N.LeftSection>

        <N.RightSection>
          <N.AuthLinks>
            <N.RegisterLink to="/expert-register">전문가 등록하기</N.RegisterLink>
            <N.LoginLink to="/login">로그인</N.LoginLink>
          </N.AuthLinks>
          <N.SignupButton to="/signup">
            <N.SignupText>회원가입</N.SignupText>
          </N.SignupButton>
        </N.RightSection>
      </N.NavContent>
    </N.NavContainer>
  );
};
