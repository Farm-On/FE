import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BannerContainer = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 2px;
  display: flex;
  justify-content: center;
  background: #26282e;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`;

export const BannerWrapper = styled.div`
  position: relative;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 60px;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 40px;
  }
`;

export const ContentWrapper = styled.div`
  position: absolute;
  left: 60px;
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 1200px) {
    left: 40px;
  }
`;

export const BoardImage = styled.img`
  width: 84.46px;
  height: 81px;
  object-fit: contain;

  @media (max-width: 1200px) {
    width: 70px;
    height: 67px;
  }
`;

export const BannerContent = styled.div`
  font-family: 'Pretendard Variable';
  font-weight: 600;
  font-size: 22px;
  line-height: 150%;
  color: #ffffff;
  white-space: pre-line;

  @media (max-width: 1200px) {
    font-size: 20px;
  }
`;

export const InquiryButton = styled(Link)`
  position: absolute;
  right: 220px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 38px;
  background: #ffffff;
  border-radius: 16px;
  text-decoration: none;
  font-family: 'Pretendard Variable';
  font-weight: 600;
  font-size: 16px;
  color: #474747;
  z-index: 2;

  @media (max-width: 1200px) {
    right: 180px;
    padding: 12px 32px;
  }
`;

export const OnionImage = styled.img`
  position: absolute;
  width: 43px;
  height: 53px;
  right: 110px;
  top: 2px;
  object-fit: contain;

  @media (max-width: 1200px) {
    width: 38px;
    height: 47px;
    right: 90px;
  }
`;

export const CabbageImage = styled.img`
  position: absolute;
  width: 120px;
  height: 120px;
  right: 0;
  bottom: -30px;
  object-fit: contain;

  @media (max-width: 1200px) {
    width: 100px;
    height: 100px;
  }
`;

export const BananaImage = styled.img`
  position: absolute;
  width: 31.8px;
  height: 33px;
  right: 370px;
  top: 57px;
  object-fit: contain;
  transform: rotate(-23.09deg);
  z-index: 1;

  @media (max-width: 1200px) {
    width: 28px;
    height: 29px;
    right: 310px;
    top: 50px;
  }
`;
