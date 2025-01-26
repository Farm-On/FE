import styled from '@emotion/styled';
import Star from '@/assets/icons/Star.svg?react';
import Camera from '@/assets/icons/Camera.svg?react';
import GPS from '@/assets/icons/GPS.svg?react';

export const Title = styled.div`
  margin-bottom: 30px;
  color: #000;
  font-family: PretendardRegular;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 51px */
`;

export const Card = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 28px;
  background: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.03);
`;

export const EditText = styled.span`
  display: block;
  align-self: flex-end;
  margin-top: 30px;
  margin-right: 40px;
  color: #7b7b7b;
  font-family: PretendardRegular;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 146%; /* 23.36px */
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
`;

export const AvatarContainer = styled.div`
  position: relative;
  width: 126px;
  height: 126px;
`;

export const Avatar = styled.img`
  width: 126px;
  height: 126px;
  border-radius: 999px;
  object-fit: cover;
`;

export const CameraIcon = styled(Camera)`
  position: absolute;
  bottom: 0;
  right: -4.2px;
`;

export const MyInfoContainer = styled.div`
  padding-left: 62px;
  padding-bottom: 57px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 49px;
`;

export const MyInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MyName = styled.span`
  color: #000;
  font-family: PretendardRegular;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 33px */
`;

export const VerifiedBadge = styled.div`
  display: inline-flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: #d4ddf9;
  color: #27246b;
  font-family: PretendardRegular;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 14.4px */
`;

export const MyIntroduction = styled.span`
  margin-top: 15px;
  color: #000;
  font-family: PretendardRegular;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
`;

export const MyStatsContainer = styled.div`
  margin-top: 16px;
  margin-left: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 28px;
`;

export const MyStats = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

export const MyStatsText = styled.span`
  color: #000;
  font-family: PretendardRegular;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 166%; /* 29.88px */
`;

export const StarIcon = styled(Star)`
  width: 24px;
  height: 24px;
`;

export const PortfolioContainer = styled.div`
  padding-left: 51px;
  padding-bottom: 60px;
`;

export const PortfolioImageCard = styled.div`
  padding-top: 22px;
  padding-bottom: 22px;
  width: 180px;
  border-radius: 17.43px;
  border: 1px solid #d7d7d7;
  background: #f4f4f4;
`;

export const PortfolioImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const PortfolioImage = styled.img`
  overflow: hidden;
  margin-left: 29px;
  margin-right: 29px;
  width: 122px;
  height: 122px;
  border-radius: 10px;
`;

export const PortfolioImageAlt = styled.span`
  padding-left: 18px;
  padding-right: 18px;
  color: #000;
  font-family: PretendardRegular;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;

export const RegionContainer = styled.div`
  padding-left: 36px;
  padding-bottom: 31px;
  display: flex;
  flex-direction: row;
  gap: 23px;
`;

export const GPSIcon = styled(GPS)`
  width: 30px;
  height: 30px;
`;

export const RegionDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RegionPrimaryText = styled.span`
  color: #000;
  font-family: PretendardRegular;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 33px */
`;

export const RegionSecondaryText = styled.span`
  color: #5d5d5d;
  font-family: PretendardRegular;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 166%; /* 29.88px */
`;
