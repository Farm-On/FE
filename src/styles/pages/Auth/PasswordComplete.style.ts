import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  min-height: 100vh;
  position: relative;
  padding-bottom: 200px;

  @media (max-width: 768px) {
    padding-bottom: 150px;
  }

  @media (max-width: 480px) {
    padding-bottom: 100px;
  }
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

export const Main = styled.div`
  width: 1030px;
  min-height: 740px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 32px;
  background-color: #ffffff;
  border: 0.7px solid #c2c2c2;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 600px;
    height: 600px;
    margin-top: 40px;
    margin-bottom: 24px;
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 400px;
    margin-top: 30px;
    margin-bottom: 16px;
    padding: 0 16px;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-family: 'PretendardBold';
  font-weight: 600;
  color: black;
  margin-top: 30px;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

export const SubTitle = styled.p`
  font-size: 18px;
  font-family: 'PretendardMedium';
  color: #5d5d5d;
  margin: 0;
  margin-bottom: 2px;
  text-align: center;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  font-size: 20px;
  font-family: 'PretendardSemiBold';
  width: 340px;
  height: 64px;
  border-radius: 16px;
  border: none;
  background: #00a05e;
  color: #ffffff;
  margin-top: 122px;
  cursor: pointer;

  @media (max-width: 767px) {
    width: calc(100% - 40px);
    height: 56px;
    font-size: 18px;
    margin-top: 80px;
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
