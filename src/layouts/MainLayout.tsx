import { Footer } from '@/components/Footer';
import LoginModal from '@/components/LoginModal';
import Navbar from '@/components/Navbar';
import useAuthStore from '@/store/useAuthStore';
import { Outlet, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

export default function MainLayout() {
  const location = useLocation();

  // 홈페이지 체크
  const isHomePage = location.pathname === '/';

  // 인증 페이지 체크
  const authPages = [
    '/signup/agreement',
    '/signup',
    '/signup/complete',
    '/find-account',
    '/find-account/id-complete',
    '/find-account/password-reset',
    '/find-account/password-complete',
  ];
  const isAuthPage = authPages.includes(location.pathname);

  // Navbar와 Footer 표시 여부
  const shouldShowNavbarAndFooter = !isAuthPage || location.pathname === '/update-info';

  // padding 및 margin 여부
  const noGuttersPaths = ['/', '/my/estimate/request', '/menu'];
  const noGutters = noGuttersPaths.some(
    (p) => p === location.pathname || location.pathname.startsWith('/chat')
  );

  const { isLoginModalOpen, closeLoginModal, loginModalType } = useAuthStore();

  return (
    <>
      {shouldShowNavbarAndFooter && <Navbar />}
      <Content noGutters={noGutters} style={{ background: isHomePage ? '#FFFEFC' : undefined }}>
        <Outlet />
      </Content>
      {shouldShowNavbarAndFooter && <Footer />}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} type={loginModalType} />
    </>
  );
}

const Content = styled.main<{ noGutters?: boolean }>`
  padding-top: ${(props) => (props.noGutters ? 0 : '84px')};
  padding-bottom: ${(props) => (props.noGutters ? 0 : '200px')};
  padding: ${(props) => (props.noGutters ? 0 : undefined)};
  background: #f9f9f9;
  & > div {
    margin: ${(props) => (props.noGutters ? 0 : '0 auto')};
    max-width: ${(props) => (props.noGutters ? 'unset' : '1200px')};
  }
`;
