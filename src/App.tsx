import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import { css, Global } from '@emotion/react';

// 폰트
import PretendardRegular from '@/assets/fonts/Pretendard-Regular.woff';
import PretendardSemiBold from '@/assets/fonts/Pretendard-SemiBold.woff';
import PretendardMedium from '@/assets/fonts/Pretendard-Medium.woff';

// 페이지
import Home from './pages/Home';
import MyEstimatePage from './pages/Home/MyEstimate';
import Agreement from './pages/Auth/Agreement';
import Signup from './pages/Auth/Signup';

// 컴포넌트
import LoginModal from './components/LoginModal';
import useAuthStore from './store/useAuthStore';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

function App() {
  const { isLoginModalOpen, closeLoginModal, loginModalType } = useAuthStore();

  return (
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MyEstimate" element={<MyEstimatePage />} />
          <Route path="/agreement" element={<Agreement />} />
          <Route path="/signup" element={<Signup />} /> {/* 추가 */}
        </Routes>
        <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} type={loginModalType} />
      </AppContainer>
    </Router>
  );
}

export default App;
