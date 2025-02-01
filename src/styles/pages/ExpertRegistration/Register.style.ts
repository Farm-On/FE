import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  min-height: 100vh;
  position: relative;
  padding-bottom: 180px;
`;

export const NavWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
`;

export const Main = styled.div`
  width: 1030px;
  min-height: 740px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-family: 'PretendardSemiBold';
  font-weight: 600;
  color: black;
  margin-top: 88px;
  margin-bottom: 109px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-top: 60px;
    margin-bottom: 80px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-top: 40px;
    margin-bottom: 60px;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 46px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 14px;
  }
`;

export const CategoryBox = styled.div<{ isSelected: boolean }>`
  width: 130px;
  height: 160px;
  padding: 20px 18px 10px;
  border-radius: 9px;
  border: 2px solid ${(props) => (props.isSelected ? '#00A05E' : '#d9d9d9')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;

  @media (max-width: 768px) {
    width: 100px;
    height: 130px;
    padding: 16px 14px 8px;
  }

  @media (max-width: 480px) {
    width: 70px;
    height: 90px;
    padding: 12px 10px 6px;
  }
`;

export const CategoryImage = styled.img`
  width: 61px;
  height: 61px;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

export const CategoryTitle = styled.p<{ isSelected: boolean }>`
  font-size: 20px;
  font-family: 'PretendardMedium';
  color: ${(props) => (props.isSelected ? '#00A05E' : '#8E8E8E')};

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const NextButton = styled.button<{ disabled: boolean }>`
  width: 138px;
  height: 54px;
  border-radius: 10px;
  border: none;
  background: ${(props) => (props.disabled ? '#d9d9d9' : '#00A05E')};
  color: white;
  font-size: 20px;
  font-family: 'PretendardSemiBold';
  font-weight: 600;
  margin-left: 890px;
  margin-bottom: 142px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => !props.disabled && '#008c4a'};
  }

  @media (max-width: 768px) {
    width: 110px;
    height: 48px;
    font-size: 18px;
    margin-right: 360px;
    margin-bottom: 100px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 40px;
    font-size: 16px;
    margin-right: 640px;
    margin-bottom: 80px;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  position: absolute; /* Footer를 페이지의 가장 아래에 고정 */
  bottom: 0;
`;
