import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  min-height: 100vh;
  position: relative;
`;
export const Main = styled.div`
  width: 1030px;
  min-height: 740px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  margin-bottom: 32px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    width: 600px;
    height: 600px;
    margin-top: 120px;
    margin-bottom: 24px;
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 200px;
    margin-top: 100px;
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
`;

export const SubTitle = styled.p`
  font-size: 18px;
  font-family: 'PretendardMedium';
  color: #5d5d5d;
  margin: 0;
  margin-bottom: 2px;

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
`;
