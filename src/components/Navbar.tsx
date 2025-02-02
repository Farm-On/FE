import * as N from '@/styles/components/Navbar.style';
import logo from '@/assets/images/logo.png';
import useAuthStore from '@/store/useAuthStore';
import { Bell } from 'lucide-react';

export const Navbar = () => {
  const { isLoggedIn, userInfo, openLoginModal, openExpertLoginModal, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

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
            </>
          )}
        </N.RightSection>
      </N.NavContent>
    </N.NavContainer>
  );
};

export default Navbar;
