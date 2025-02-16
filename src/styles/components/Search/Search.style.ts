import styled from '@emotion/styled';

export const BannerContainer = styled.div`
  width: 100%;
  margin-top: 80px;
`;

export const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const SearchSection = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  margin-top: -160px;
  padding-top: 80px;
  clip-path: polygon(0 80px, 100% 80px, 100% 100%, 0 100%);
`;

export const BackgroundBlur = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  opacity: 0.6;
  background: radial-gradient(
    100% 100% at 50% 50%,
    rgba(111, 216, 146, 0.5) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: 66px 66px 66px rgba(0, 0, 0, 0.1);
  border-radius: 9999px;
  filter: blur(66px);
  z-index: 0;
  top: -158px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Title1 = styled.h1`
  font-family: 'Pretendard';
  font-size: 44px;
  font-weight: bold;
  margin: 0;
  margin-top: 137px;
  text-align: center;
`;

export const Title2 = styled.h1`
  font-family: 'Pretendard';
  font-size: 44px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 86px;
  text-align: center;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 684px;
  height: 66px;
  background-color: #f5f5f5;
  border-radius: 16px;
  margin-bottom: 40px;
`;

export const StyledImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  margin-left: 24px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-family: 'Pretendard';
  font-size: 18px;
  color: #8e8e8e;
  background: none;
  margin: 0 24px;
  &::placeholder {
    color: #8e8e8e;
  }
`;
