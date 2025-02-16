import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

export const NavContainer = styled.nav`
  height: 60px;
  background: #ffffff;
  border-bottom: 1px solid #dadada;
  display: flex;
  justify-content: center;
  position: relative;

  @media (min-width: 768px) {
    height: 70px;
  }

  @media (min-width: 1024px) {
    height: 80px;
  }
`;

export const NavContent = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0 40px;
  }

  @media (min-width: 1200px) {
    padding: 0;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (min-width: 768px) {
    gap: 40px;
  }

  @media (min-width: 1024px) {
    gap: 60px;
  }
`;

export const Logo = styled(Link)`
  width: 90px;
  height: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;

  @media (min-width: 768px) {
    width: 100px;
    height: 22px;
  }

  @media (min-width: 1024px) {
    width: 119.14px;
    height: 24.71px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const MenuContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    gap: 24px;
  }
`;

export const MenuLink = styled(Link)`
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 18px;
  line-height: 166%;
  color: #000000;
  text-decoration: none;
  white-space: nowrap;

  &.active {
    color: #00a05e;
  }
`;

export const EstimateLink = styled(MenuLink)`
  font-size: 16px;
  font-weight: 400;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`;

export const AuthLinks = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 40px;
  }
`;

export const ExpertButton = styled.button`
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #00a05e;
  background: none;
  border: none;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
  text-decoration: none;
  white-space: nowrap;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const SignupButton = styled(Link)`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 88px;
    height: 40px;
    background: #00a05e;
    border-radius: 6px;
    text-decoration: none;
  }
`;

export const SignupText = styled.span`
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const NotificationIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #666666;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const UserDropdown = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export const UserName = styled.div`
  font-family: 'Pretendard';
  font-size: 16px;
  color: #2c2c2c;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    color: #2c2c2c;
  }
`;

export const ExpertBadge = styled.span`
  padding: 4px 8px;
  margin-right: 8px;
  background: #21d38a;
  border-radius: 4px;
  color: #ffffff;
  font-family: 'PretendardSemiBold';
  font-size: 12px;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  min-width: 120px;
  background-color: #222222;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 4px 0;
  z-index: 1000;
  margin-top: 4px;

  ${UserDropdown}:hover & {
    display: block;
  }
`;

export const DropdownItem = styled.div`
  padding: 8px 16px;
  font-family: 'Pretendard';
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #333333;
  }
`;

export const MenuIcon = styled(Menu)`
  width: 24px;
  height: 24px;
`;

export const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: #000000;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #ffffff;
  border-bottom: 1px solid #dadada;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 16px;
  z-index: 100;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MobileMenuLink = styled(Link)`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
  text-decoration: none;
  padding: 8px 0;

  &.active {
    color: #00a05e;
  }

  &.register {
    color: #00a05e;
    font-weight: 600;
  }
`;

export const MobileDivider = styled.div`
  height: 1px;
  background: #dadada;
  margin: 8px 0;
`;

export const MobileSignupButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background: #00a05e;
  border-radius: 6px;
  text-decoration: none;
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  margin-top: 8px;
`;
