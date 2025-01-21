import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
  height: 80px;
  background: #ffffff;
  border-bottom: 1px solid #dadada;
  display: flex;
  justify-content: center;
`;

export const NavContent = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const Logo = styled(Link)`
  width: 119.14px;
  height: 24.71px;
  display: flex;
  align-items: center;
  text-decoration: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const MenuLink = styled(Link)`
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 18px;
  line-height: 166%;
  color: #000000;
  text-decoration: none;
  white-space: nowrap;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`;

export const AuthLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const RegisterLink = styled(Link)`
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #00a05e;
  text-decoration: none;
  white-space: nowrap;
`;

export const LoginLink = styled(Link)`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
  text-decoration: none;
  white-space: nowrap;
`;

export const SignupButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 40px;
  background: #00a05e;
  border-radius: 6px;
  text-decoration: none;
`;

export const SignupText = styled.span`
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
`;
