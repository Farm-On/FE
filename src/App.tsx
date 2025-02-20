import { RouterProvider, createBrowserRouter } from 'react-router-dom';
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
import AllEstimates from './pages/Home/AllEstimates';
import Estimates from './pages/Expert/Estimates';
import Estimate from './pages/Expert/Estimate';
import ExpertMyEstimate from './pages/Expert/MyEstimate';
import PortfolioEdit from './pages/Expert/PortfolioEdit';
import PortfolioEditor from './pages/Expert/PortfolioEditor';
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
import FindAccount from './pages/Auth/FindAccount';
import FindAccountComplete from './pages/Auth/FindAccountComplete';
import PasswordReset from './pages/Auth/PasswordReset';
import PasswordComplete from './pages/Auth/PasswordComplete';
import EditProfile from './pages/User/EditProfile';
import CheckMyEstimatePage from './pages/Home/EstimateCheckPage';
import ExpertProfileList from './pages/Expert/ProfileList';
import Profile from './pages/Expert/Profile';
import EstimateSheet from './pages/Home/EstimateSheet';

// 레이아웃
import MainLayout from './layouts/MainLayout';

// 토스트
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
    },
  },
});

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

ReactModal.setAppElement('#root');

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'my/estimate', element: <MyEstimatePage /> },
      { path: 'update-info', element: <EditProfile /> },
      { path: 'expert/profile', element: <ExpertProfileList /> },
      { path: 'expert/portfolio/edit', element: <PortfolioEdit /> },
      { path: 'expert/portfolio/editor/:portfolioId', element: <PortfolioEditor /> },
      { path: 'expert/profile/:userID', element: <Profile /> },
      { path: 'expert/estimates', element: <Estimates /> },
      { path: 'expert/estimate/:estimateId', element: <Estimate /> },
      { path: 'expert/my/estimate', element: <ExpertMyEstimate /> },
      { path: 'expert/register', element: <Register /> },
      { path: 'expert/register/category/:categoryId', element: <DetailCategory /> },
      { path: 'expert/register/location', element: <Location /> },
      { path: 'expert/register/complete', element: <RegisterComplete /> },
      { path: 'community', element: <CommunityPage /> },
      { path: 'my/estimate/request', element: <RequestEstimatePage /> },
      { path: 'my/estimate/request/:estimateId', element: <CheckMyEstimatePage /> },
      { path: 'menu', element: <MenuBar /> },
      { path: 'chat', element: <ChatList /> },
      { path: 'chat/:roomId', element: <ChatRoom /> },
      { path: 'signup/agreement', element: <Agreement /> },
      { path: 'signup', element: <Signup /> },
      { path: 'signup/complete', element: <SignupComplete /> },
      { path: 'my/estimate/all', element: <AllEstimates /> },
      { path: 'my/estimate/:estimateId', element: <EstimateSheet /> },
      { path: 'find-account', element: <FindAccount /> },
      { path: 'find-account/id-complete', element: <FindAccountComplete /> },
      { path: 'find-account/password-reset', element: <PasswordReset /> },
      { path: 'find-account/password-complete', element: <PasswordComplete /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <Global
          styles={css`
            *,
            *::before,
            *::after {
              box-sizing: border-box;
            }

            :root {
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }

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
              overflow: overlay;
            }

            .ReactModal__Body--open {
              overflow: hidden;
            }

            ::-webkit-scrollbar {
              width: 14px;
              height: 14px;
            }

            ::-webkit-scrollbar-thumb {
              outline: none;
              border-radius: 10px;
              border: 4px solid transparent;
              box-shadow: inset 6px 6px 0 rgba(34, 34, 34, 0.15);
            }

            ::-webkit-scrollbar-thumb:hover {
              border: 4px solid transparent;
              box-shadow: inset 6px 6px 0 rgba(34, 34, 34, 0.3);
            }

            ::-webkit-scrollbar-track {
              box-shadow: none;
              background-color: transparent;
            }
          `}
        />
        <RouterProvider router={router} />
      </AppContainer>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
