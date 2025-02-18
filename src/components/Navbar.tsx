import * as N from '@/styles/components/Navbar.style';
import logo from '@/assets/images/logo.png';
import useAuthStore from '@/store/useAuthStore';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Bell, ChevronDown } from 'lucide-react';
import { exchangeRole } from '@/api/services/userService';

// 알림 아이콘 컴포넌트
const NotificationIcon = () => {
  const [notifications] = useState<number>(0);

  return (
    <N.NotificationIcon>
      <Bell color={notifications > 0 ? '#FF0000' : '#666666'} />
    </N.NotificationIcon>
  );
};

// 메인 Navbar 컴포넌트
export const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const userInfo = useAuthStore((state) => state.userInfo);
  const { openLoginModal, openExpertLoginModal, logout, updateUserInfo } = useAuthStore();
  const location = useLocation();
  const [isActiveChat, setIsActiveChat] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExpertLoginIntent, setIsExpertLoginIntent] = useState(false);

  useEffect(() => {
    setIsActiveChat(location.pathname.includes('/chat'));
  }, [location]);

  useEffect(() => {
    // 로그인 후 전문가 등록 여부 확인 및 리다이렉션
    if (isLoggedIn && isExpertLoginIntent) {
      setIsExpertLoginIntent(false); // 상태 초기화
      if (userInfo?.role !== 'EXPERT') {
        navigate('/expert-register');
      }
    }
  }, [isLoggedIn, userInfo, isExpertLoginIntent]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleExpertRegistration = () => {
    if (!isLoggedIn) {
      setIsExpertLoginIntent(true);
      openExpertLoginModal();
    } else if (userInfo?.role !== 'EXPERT') {
      navigate('/expert-register');
    }
  };

  const handleRoleSwitch = async () => {
    try {
      if (!userInfo?.userId) return;

      const targetRole = userInfo.role === 'EXPERT' ? 'FARMER' : 'EXPERT';
      const response = await exchangeRole(userInfo.userId, targetRole);

      if (response.isSuccess) {
        localStorage.setItem('token', response.result.token);

        const updatedUserInfo = {
          ...userInfo,
          role: response.result.exchangeRole,
        };

        updateUserInfo(updatedUserInfo);
      } else {
        if (response.code === 'EXPERT4002') {
          navigate('/expert-register');
        }
      }
    } catch (error) {
      console.error('Role exchange failed:', error);
      navigate('/expert-register');
    }
  };

  return (
    <N.NavContainer>
      <N.NavContent>
        <N.LeftSection>
          <N.Logo to="/">
            <img src={logo} alt="FarmON" />
          </N.Logo>
          <N.MenuContainer className={isMobileMenuOpen ? 'open' : ''}>
            <N.MenuLink to="/expert/profile">전문가 프로필</N.MenuLink>
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
              <N.MenuLink to="/MyEstimate">내 견적</N.MenuLink>
              <N.UserDropdown>
                <N.UserName>
                  {userInfo?.role === 'EXPERT' && <N.ExpertBadge>전문가</N.ExpertBadge>}
                  {userInfo?.userName}님
                  <ChevronDown size={16} />
                </N.UserName>
                <N.DropdownContent>
                  <N.DropdownItem>
                    <Link
                      to="/update-info"
                      style={{
                        color: 'inherit',
                        textDecoration: 'none',
                        width: '100%',
                        display: 'block',
                      }}
                    >
                      회원정보 수정
                    </Link>
                  </N.DropdownItem>
                  {userInfo?.role === 'EXPERT' && (
                    <N.DropdownItem>
                      <Link
                        to="/my-profile"
                        style={{
                          color: 'inherit',
                          textDecoration: 'none',
                          width: '100%',
                          display: 'block',
                        }}
                      >
                        내 프로필
                      </Link>
                    </N.DropdownItem>
                  )}
                  <N.DropdownItem onClick={handleLogout}>로그아웃</N.DropdownItem>
                  {userInfo?.role === 'EXPERT' ? (
                    <N.DropdownItem onClick={handleRoleSwitch}>농업인 전환</N.DropdownItem>
                  ) : (
                    <N.DropdownItem onClick={handleRoleSwitch}>전문가 전환</N.DropdownItem>
                  )}
                </N.DropdownContent>
              </N.UserDropdown>
            </N.UserSection>
          ) : (
            <>
              <N.AuthLinks>
                <N.ExpertButton onClick={handleExpertRegistration}>전문가 등록하기</N.ExpertButton>
                <N.LoginButton onClick={openLoginModal}>로그인</N.LoginButton>
              </N.AuthLinks>
              <N.SignupButton to="/agreement">
                <N.SignupText>회원가입</N.SignupText>
              </N.SignupButton>
              <N.MobileMenuButton onClick={toggleMobileMenu}>
                <N.MenuIcon />
              </N.MobileMenuButton>
            </>
          )}
        </N.RightSection>
      </N.NavContent>

      {isMobileMenuOpen && (
        <N.MobileMenu>
          <N.MobileMenuLink to="/expert/profile">전문가 프로필</N.MobileMenuLink>
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
