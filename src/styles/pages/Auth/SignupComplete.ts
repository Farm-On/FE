import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 0;

  @media (max-width: 767px) {
    padding: 30px 0;
  }
`;

export const Logo = styled.img`
  width: 172.05px;
  height: 35.61px;

  @media (max-width: 767px) {
    width: 140px;
    height: auto;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 0 0 300px;
  width: 100%;
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 1200px;
  height: 608px;
  background: #ffffff;
  border: 0.7px solid #c2c2c2;
  border-radius: 10px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 1199px) {
    width: 90%;
    height: auto;
    min-height: 500px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 108px;

  @media (max-width: 767px) {
    padding-top: 60px;
    gap: 15px;
  }
`;

export const CompleteIconWrapper = styled.div`
  width: 90px;
  height: 90px;
  margin-bottom: 28px;
  position: relative;
`;

export const CompleteIconCircle = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: linear-gradient(190.65deg, #00a677 -2.03%, #c6f2e4 160.17%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CompleteIconCheck = styled.div`
  width: 60px;
  height: 60px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 16.67%;
    right: 16.67%;
    top: 25%;
    bottom: 29.17%;
    border: 5px solid #ffffff;
    transform: rotate(45deg);
  }
`;

export const Title = styled.h1`
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 30px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #000000;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

export const Message = styled.p`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 18px;
  line-height: 166%;
  text-align: center;
  letter-spacing: -0.01em;
  color: #5d5d5d;
  margin: 0;
  max-width: 350px;

  @media (max-width: 767px) {
    font-size: 16px;
    padding: 0 20px;
  }
`;

export const MainButton = styled.button`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 64px;
  width: 340px;
  height: 64px;
  background: #00a05e;
  border-radius: 16px;
  border: none;
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;

  @media (max-width: 767px) {
    width: calc(100% - 40px);
    height: 56px;
    font-size: 18px;
    bottom: 40px;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  border-top: 1px solid #e5e5e5;
  position: absolute;
  bottom: 0;
  left: 0;
`;
