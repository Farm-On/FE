import styled from '@emotion/styled';

export const Card = styled.div`
  box-sizing: border-box;
  padding-left: 24px;
  padding-top: 34px;
  padding-right: 16px;
  padding-bottom: 15px;
  width: 390px;
  display: flex;
  flex-direction: row;
  gap: 22px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 0.436px solid #d7d7d7;
  background: #fff;
`;

export const Avatar = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 84px;
  object-fit: cover;
`;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  color: #000;
  font-family: PretendardRegular;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 166%; /* 29.88px */
  text-transform: uppercase;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const RatingsText = styled.span`
  color: #2c2c2c;
  font-family: PretendardRegular;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
`;

export const InfoText = styled.span`
  color: #2c2c2c;
  font-family: PretendardRegular;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;

export const FieldText = styled.span`
  color: #2c2c2c;
  font-family: PretendardRegular;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;

export const IntroductionText = styled.span`
  color: #8e8e8e;
  font-family: PretendardRegular;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
`;

export const ViewPortfolioBtn = styled.button`
  margin-top: 15px;
  display: flex;
  padding: 12px 30px;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  gap: 10px;
  border: none;
  border-radius: 10px;
  background: #c6f2e4;
  color: #00a05e;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 21px */
  cursor: pointer;
`;
