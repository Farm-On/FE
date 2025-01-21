import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 180px;
  bottom: 2px;
  border-top: 0.7px solid #b8b8b8;
  display: flex;
  justify-content: center;
  padding: 22px 0 30px;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  height: 128px;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 20px;
  width: 789px;
  height: 128px;
`;

export const LinkSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 40px;
  width: 315px;
  height: 21px;
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
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 10px;
  width: 789px;
  height: 87px;
`;

export const CompanyTitle = styled.div`
  width: 789px;
  height: 21px;
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  display: flex;
  align-items: flex-end;
  color: #5e5e5e;
`;

export const CompanyInfo = styled.div`
  width: 789px;
  height: 56px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 120%;
  color: #8e8e8e;
  white-space: pre-line;
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 94px;
  height: 26px;
`;

export const SocialIcon = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  padding: 7px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 9999px;
  background: #2c2c2c;
`;
