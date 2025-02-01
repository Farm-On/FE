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
import My from './pages/Expert/My';
import Estimates from './pages/Expert/Estimates';

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
          <Route path="/expert/my" element={<My />} />
          <Route path="/expert/estimates" element={<Estimates />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
