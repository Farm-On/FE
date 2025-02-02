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
import Register from './pages/ExpertRegistration/Register';
import DetailCategory from './pages/ExpertRegistration/DetailCategory';
import Location from './pages/ExpertRegistration/Location';
import RegisterComplete from './pages/ExpertRegistration/RegisterComplete';
import RequestEstimatePage from './pages/Home/RequestEstimate';
import MenuBar from './pages/MenuBar';
import CommunityPage from './pages/Home/Community';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

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
          `}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MyEstimate" element={<MyEstimatePage />} />
          <Route path="/expert-register" element={<Register />} />
          <Route path="/detail-category/:categoryId" element={<DetailCategory />} />
          <Route path="/location" element={<Location />} />
          <Route path="/register-complete" element={<RegisterComplete />} />
          <Route path='/Community' element={<CommunityPage/>} />
          <Route path="/MyEstimate/RequestEstimate" element={<RequestEstimatePage />} />
          <Route path="/menu" element={<MenuBar />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
