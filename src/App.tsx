import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { css, Global } from '@emotion/react';
// 폰트
import PretendardRegular from '@/assets/fonts/Pretendard-Regular.woff';
import PretendardSemiBold from '@/assets/fonts/Pretendard-SemiBold.woff';
import PretendardMedium from '@/assets/fonts/Pretendard-Medium.woff';
// 페이지
import Home from './pages/Home';
import MyEstimatePage from './pages/Home/MyEstimate';
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
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

// 레이아웃 컴포넌트
const AppRoutes = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <>
      {!isHomePage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyEstimate" element={<MyEstimatePage />} />
        <Route path="/expert-register" element={<Register />} />
        <Route path="/detail-category/:categoryId" element={<DetailCategory />} />
        <Route path="/location" element={<Location />} />
        <Route path="/register-complete" element={<RegisterComplete />} />
        <Route path="/Community" element={<CommunityPage />} />
        <Route path="/MyEstimate/RequestEstimate" element={<RequestEstimatePage />} />
        <Route path="/menu" element={<MenuBar />} />
        <Route path="/chat" element={<ChatList />} />
        <Route path="/chat/:roomId" element={<ChatRoom />} />
      </Routes>
      {!isHomePage && <Footer />}
    </>
  );
};

function App() {
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
        <AppRoutes />
      </AppContainer>
    </Router>
  );
}

export default App;
