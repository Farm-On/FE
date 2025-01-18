import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import styled from '@emotion/styled';
import MyEstimatePage from './pages/Home/MyEstimate';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MyEstimate" element={<MyEstimatePage />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
