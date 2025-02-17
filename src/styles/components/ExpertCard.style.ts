import styled from '@emotion/styled';
import Star from '@/assets/icons/Star.svg?react';

export const Card = styled.div`
  width: 290px;
  height: 339px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 200px;
    height: 252px;
  }

  @media (max-width: 480px) {
    width: 180px;
    height: 254px;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ExpertImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
`;

export const Gradient = styled.div`
  position: absolute;
  border-radius: 10px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%; 
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5));
`;

export const Information = styled.div`
  position: absolute;
  top: 68%;
  left: 7.5%;

  h1 {
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    color: rgba(255, 255, 255, 1);
    margin: 0;
  }
  h3 {
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    color: rgba(255, 255, 255, 1);
    margin: 0;
  }
`;

export const StarInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 6px;
  height: 24px;
  p {
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: rgba(237, 237, 237, 1);
  }
  h2 {
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: rgba(255, 255, 255, 1);
  }
`;

export const StarWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const StarImg = styled(Star)`
  width: 18px;
  height: 18px;
`;
