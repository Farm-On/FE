import { Footer } from '@/components/Footer';
import LoginModal from '@/components/LoginModal';
import Navbar from '@/components/Navbar';
import useAuthStore from '@/store/useAuthStore';
import { Outlet, useLocation } from 'react-router-dom';

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
  const shouldShowNavbarAndFooter =
    !isHomePage && (!isAuthPage || location.pathname === '/update-info');

  const { isLoginModalOpen, closeLoginModal, loginModalType } = useAuthStore();

  return (
    <>
      {shouldShowNavbarAndFooter && <Navbar />}
      <Outlet />
      {shouldShowNavbarAndFooter && <Footer />}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} type={loginModalType} />
    </>
  );
}
