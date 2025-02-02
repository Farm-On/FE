import styled from '@emotion/styled';

export const Container = styled.div`
  padding-left: 360px;
  max-width: 1920px;
  width: 1920px;
  @media (max-width: 768px) {
    padding-left: 60px;
  }

  @media (max-width: 480px) {
    padding-left: 60px;
  }
`;
export const Title1 = styled.div`
  padding-top: 84px;
  width: 1200px;
  height: 51px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: start;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: start;
  }

  h2 {
    font-family: 'PretendardSemiBold';
    font-size: 34px;
    margin: 0;
  }
`;
export const Title2 = styled.div`
  padding-top: 84px;
  width: 140px;
  height: 99px;
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
  gap: 6px;
  position: relative;
  h2 {
    font-family: 'PretendardSemiBold';
    font-size: 30px;
    margin: 0;
  }

  h3 {
    font-family: Pretendard;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(95, 95, 95, 1);
    margin: 0;
  }
`;

export const ViewAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  h4 {
    font-family: 'PretendardMedium';
    margin: 0;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 160, 94, 1);
  }
  p {
    margin: 0;
    width: 20px;
    height: 20px;
    color: rgba(0, 160, 94, 1);
  }
`;
export const MyCards = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;
export const AddCard = styled.div`
  background-color: rgba(255, 255, 255, 1);
  background-image: url("data:image/svg+xml,%3Csvg width='320' height='122' viewBox='0 0 320 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='319' height='121' rx='9.5' fill='white' stroke='%23BBBBBB' stroke-dasharray='6 6'/%3E%3C/svg%3E");
  width: 320px;
  height: 122px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 150px;
    height: 120px;
    top: 260px;
  }

  @media (max-width: 480px) {
    width: 158px;
    height: 118px;
    top: 260px;
  }
  p {
    font-size: 14px;
    margin-top: 7px;
  }
`;

export const DividingLine = styled.div`
  width: 1200px;
  height: 0.7px;
  background-color: rgba(187, 187, 187, 1);
  margin-top: 110px;
  @media (max-width: 768px) {
    width: 800px;
  }

  @media (max-width: 480px) {
    width: 600px;
  }
`;

export const ExpertCardWrap = styled.div`
  display: flex;
  gap: 14px;
  position: absolute;
  top: 573px;
  left: 662px;

  @media (max-width: 768px) {
    left: 60px;
    top: 630px;
  }

  @media (max-width: 480px) {
    left: 60px;
    top: 600px;
  }
`;

export const ChevronRight = styled.div`
  position: absolute;
  z-index: 50;
  left: 97%;
  top: 40%;
`;
