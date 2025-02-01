import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  min-height: 180px;
  display: flex;
  justify-content: center;
  padding: 22px 0 30px;
  background: #ffffff;

  @media (max-width: 1199px) {
    padding: 20px 40px;
  }

  @media (max-width: 767px) {
    padding: 20px;
    min-height: 150px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 1200px;
  height: auto;
  min-height: 128px;

  @media (max-width: 1199px) {
    width: 100%;
    flex-direction: column;
    gap: 30px;
  }

  @media (max-width: 767px) {
    gap: 20px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 20px;
  width: 789px;
  height: auto;

  @media (max-width: 1199px) {
    width: 100%;
    align-items: center;
  }

  @media (max-width: 767px) {
    gap: 15px;
  }
`;

export const LinkSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 40px;
  width: auto;
  height: auto;

  @media (max-width: 767px) {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const FooterLink = styled(Link)`
  font-family: 'Pretendard';
  font-style: normal;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  text-transform: uppercase;
  color: #2c2c2c;
  text-decoration: none;

  &.bold {
    font-weight: 600;
  }

  &.normal {
    font-weight: 500;
  }

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 10px;
  width: 789px;
  height: auto;

  @media (max-width: 1199px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const CompanyTitle = styled.div`
  width: 100%;
  height: auto;
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  display: flex;
  align-items: flex-end;
  color: #5e5e5e;

  @media (max-width: 1199px) {
    justify-content: center;
  }

  @media (max-width: 767px) {
    font-size: 13px;
  }
`;

export const CompanyInfo = styled.div`
  width: 100%;
  height: auto;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #8e8e8e;
  white-space: pre-line;

  @media (max-width: 1199px) {
    text-align: center;
    line-height: 140%;
  }

  @media (max-width: 767px) {
    font-size: 11px;
    line-height: 130%;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  @media (max-width: 1199px) {
    width: auto;
  }
`;

export const SocialIcon = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  padding: 7px;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background: #2c2c2c;

  @media (max-width: 767px) {
    width: 24px;
    height: 24px;
    padding: 6px;
  }
`;
