import styled from '@emotion/styled';

export const TrendingCardContainer = styled.div`
  position: relative;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
`;

export const CircleButton = styled.div`
  position: absolute;
  right: -22px;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 9999px;
  filter: drop-shadow(0px 0px 7px rgba(0, 0, 0, 0.15));
`;

export const Card = styled.div`
  width: 286px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: #f3f3f3;
`;

export const Content = styled.div`
  padding-top: 15px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 26px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: hidden;
`;

export const ThumbnailImage = styled.img`
  width: 286px;
  height: 225px;
  border-radius: 20px 20px 0px 0px;
`;

export const Title = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  text-transform: uppercase;
`;

export const Description = styled.span`
  color: #2c2c2c;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  text-transform: uppercase;
`;

export const AuthorContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const AuthorAvatar = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 22px;
  overflow: hidden;
`;

export const AuthorUsername = styled.span`
  color: #2c2c2c;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
  text-transform: uppercase;
`;
