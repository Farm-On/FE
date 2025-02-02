import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { css, Global } from '@emotion/react';
import ReactModal from 'react-modal';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 폰트
import PretendardRegular from '@/assets/fonts/Pretendard-Regular.woff';
import PretendardSemiBold from '@/assets/fonts/Pretendard-SemiBold.woff';
import PretendardMedium from '@/assets/fonts/Pretendard-Medium.woff';
// 페이지
import Home from './pages/Home';
import MyEstimatePage from './pages/Home/MyEstimate';

import My from './pages/Expert/My';
import Estimates from './pages/Expert/Estimates';
import Estimate from './pages/Expert/Estimate';
import ExpertMyEstimate from './pages/Expert/MyEstimate';
import MyEdit from './pages/Expert/MyEdit';

import Agreement from './pages/Auth/Agreement';
import Signup from './pages/Auth/Signup';
import SignupComplete from './pages/Auth/SignupComplete';
import Register from './pages/ExpertRegistration/Register';
import DetailCategory from './pages/ExpertRegistration/DetailCategory';
import Location from './pages/ExpertRegistration/Location';
import RegisterComplete from './pages/ExpertRegistration/RegisterComplete';
import RequestEstimatePage from './pages/Home/RequestEstimate';
import ChatList from './pages/chat/ChatList';
import ChatRoom from './pages/chat/ChatRoom';
import MenuBar from './pages/MenuBar';
import CommunityPage from './pages/Home/Community';

// 컴포넌트
import LoginModal from './components/LoginModal';
import useAuthStore from './store/useAuthStore';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5분
      gcTime: 10 * 60 * 1000, // 10분 (이전의 cacheTime)
    },
  },
});

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

ReactModal.setAppElement('#root');

// 레이아웃 컴포넌트
const AppRoutes = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isAuthPage = ['/agreement', '/signup', '/signup-complete'].includes(location.pathname);

  const shouldShowNavbarAndFooter = !isHomePage && !isAuthPage;

  return (
    <>
      {shouldShowNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyEstimate" element={<MyEstimatePage />} />
        <Route path="/expert/my" element={<My />} />
        <Route path="/expert/my/edit" element={<MyEdit />} />
        <Route path="/expert/estimates" element={<Estimates />} />
        <Route path="/expert/estimate" element={<Estimate />} />
        <Route path="/expert/myestimate" element={<ExpertMyEstimate />} />
        <Route path="/expert-register" element={<Register />} />
        <Route path="/detail-category/:categoryId" element={<DetailCategory />} />
        <Route path="/location" element={<Location />} />
        <Route path="/register-complete" element={<RegisterComplete />} />
        <Route path="/Community" element={<CommunityPage />} />
        <Route path="/MyEstimate/RequestEstimate" element={<RequestEstimatePage />} />
        <Route path="/menu" element={<MenuBar />} />
        <Route path="/chat" element={<ChatList />} />
        <Route path="/chat/:roomId" element={<ChatRoom />} />
        <Route path="/agreement" element={<Agreement />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup-complete" element={<SignupComplete />} />
      </Routes>
      {shouldShowNavbarAndFooter && <Footer />}
    </>
  );
};

function App() {
  const { isLoginModalOpen, closeLoginModal, loginModalType } = useAuthStore();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppContainer>
          <Global
            styles={css`
              @font-face {
                font-family: 'PretendardRegular';
                src: url(${PretendardRegular}) format('woff');
                font-weight: 500;
              }
              @font-face {
                font-family: 'PretendardSemiBold';
                src: url(${PretendardSemiBold}) format('woff');
                font-weight: 600;
              }
              @font-face {
                font-family: 'PretendardMedium';
                src: url(${PretendardMedium}) format('woff');
                font-weight: 500;
              }
              body {
                margin: 0;
                padding: 0;
              }
            `}
          />
          <AppRoutes />
          <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} type={loginModalType} />
        </AppContainer>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
