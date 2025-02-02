import * as N from '@/styles/components/Navbar.style';
import logo from '@/assets/images/logo.png';
import useAuthStore from '@/store/useAuthStore';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Bell, Menu } from 'lucide-react';

export const Navbar = () => {
  const { isLoggedIn, userInfo, openLoginModal, openExpertLoginModal, logout } = useAuthStore();
  const location = useLocation();
  const [isActiveChat, setIsActiveChat] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsActiveChat(location.pathname.includes('/chat'));
  }, [location]);

  const handleLogout = () => {
    logout();
  };

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
          {isLoggedIn ? (
            <N.UserSection>
              <N.NotificationIcon>
                <Bell />
              </N.NotificationIcon>
              <N.MenuLink to="/my-estimate">내 견적</N.MenuLink>
              <N.UserDropdown>
                <N.UserName>{userInfo?.name ?? '사용자'} ▼</N.UserName>
                <N.DropdownContent>
                  <N.DropdownButton onClick={handleLogout}>로그아웃</N.DropdownButton>
                </N.DropdownContent>
              </N.UserDropdown>
            </N.UserSection>
          ) : (
            <>
              <N.AuthLinks>
                <N.ExpertButton onClick={openExpertLoginModal}>전문가 등록하기</N.ExpertButton>
                <N.LoginButton onClick={openLoginModal}>로그인</N.LoginButton>
              </N.AuthLinks>
              <N.SignupButton to="/agreement">
                <N.SignupText>회원가입</N.SignupText>
              </N.SignupButton>
              <N.MobileMenuButton onClick={toggleMobileMenu}>
                <Menu size={24} />
              </N.MobileMenuButton>
            </>
          )}
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

export default Navbar;