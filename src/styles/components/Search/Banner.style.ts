import styled from '@emotion/styled';

export const BannerContainer = styled.div`
  position: relative;
  width: 1650px;
  height: 290px;
  left: calc(50% - 1650px / 2);
  background: linear-gradient(180deg, #00a05e 0%, #00b168 100%);
  border-radius: 30px;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 800px;
    height: 260px;
    padding: 15px;
    left: 0;
  }

  @media (max-width: 768px) {
    width: 700px;
    height: 220px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    width: 360px;
    height: 180px;
    padding: 5px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 0px 34px;
  gap: 8px;
  position: absolute;
  width: 298px;
  height: 158px;
  left: 420px;
  top: 51px;

  @media (max-width: 1024px) {
    width: 260px;
    height: 140px;
    left: 50px;
    top: 51px;
  }

  @media (max-width: 768px) {
    width: 220px;
    height: 120px;
    padding-left: 20px;
  }

  @media (max-width: 480px) {
    width: 180px;
    height: 100px;
    padding-left: 0px;
  }
`;

export const StyledTitle = styled.div`
  width: 264px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 150%;
  text-transform: uppercase;
  color: #ffffff;

  @media (max-width: 1024px) {
    font-size: 26px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const StyledP = styled.div`
  width: 216px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 166%;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 16px;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  position: absolute;
  width: 40px;
  height: 8px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 18px;
`;

export const StyledPage = styled.div<{ active?: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => (props.active ? '#FFFFFF' : '#000000')};
  opacity: ${(props) => (props.active ? 1 : 0.2)};

  @media (max-width: 768px) {
    width: 6px;
    height: 6px;
  }

  @media (max-width: 480px) {
    width: 5px;
    height: 5px;
  }
`;

export const ImgContainer = styled.div`
  position: absolute;
  width: 401px;
  height: 274px;
  right: 330px;
  top: 8px;
  margin-top: 50px;

  @media (max-width: 1024px) {
    width: 350px;
    height: 240px;
    right: 60px;
    margin-top: 50px;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 210px;
    right: 30px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 140px;
    right: -10px;
    margin-top: 80px;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
  }

  @media (max-width: 480px) {
    width: 85%;
    height: 85%;
  }
`;

export const ChevronButton = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.direction === 'left' ? 'left: 293px;' : 'right: 234px;')}
  width: 48px;
  height: 48px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  z-index: 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
    ${(props) => (props.direction === 'left' ? 'left: 3%;' : 'right: 3%;')}
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
  }
`;
