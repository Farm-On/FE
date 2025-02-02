import * as N from '@/styles/components/Navbar.style';
import logo from '@/assets/images/logo.png';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';

export const Navbar = () => {
  const location = useLocation();
  const [isActiveChat, setIsActiveChat] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsActiveChat(location.pathname.includes('/chat'));
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <N.NavContainer>
      <N.NavContent>
        <N.LeftSection>
          <N.Logo to="/">
            <img src={logo} alt="FarmON" />
          </N.Logo>
          <N.MenuContainer className={isMobileMenuOpen ? 'open' : ''}>
            <N.MenuLink to="/expert-profile">전문가 프로필</N.MenuLink>
            <N.MenuLink to="/chat" className={isActiveChat ? 'active' : ''}>
              채팅
            </N.MenuLink>
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
          <N.MobileMenuButton onClick={toggleMobileMenu}>
            <Menu size={24} />
          </N.MobileMenuButton>
        </N.RightSection>
      </N.NavContent>
      {isMobileMenuOpen && (
        <N.MobileMenu>
          <N.MobileMenuLink to="/expert-profile">전문가 프로필</N.MobileMenuLink>
          <N.MobileMenuLink to="/chat" className={isActiveChat ? 'active' : ''}>
            채팅
          </N.MobileMenuLink>
          <N.MobileMenuLink to="/community">커뮤니티</N.MobileMenuLink>
          <N.MobileDivider />
          <N.MobileMenuLink to="/expert-register" className="register">
            전문가 등록하기
          </N.MobileMenuLink>
          <N.MobileMenuLink to="/login">로그인</N.MobileMenuLink>
          <N.MobileSignupButton to="/signup">회원가입</N.MobileSignupButton>
        </N.MobileMenu>
      )}
    </N.NavContainer>
  );
};
