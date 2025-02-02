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

export const UserName = styled.div`
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 16px;
  color: #2c2c2c;
  padding: 8px;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  right: 0;
  min-width: 120px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 8px;
  z-index: 1;
`;

export const UserDropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover {
    cursor: pointer;

    ${DropdownContent} {
      display: block;
    }
  }
`;

export const DropdownButton = styled.button`
  width: 100%;
  padding: 8px 16px;
  text-align: left;
  background: none;
  border: none;
  font-family: 'Pretendard';
  font-size: 14px;
  color: #2c2c2c;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
    border-radius: 4px;
  }
`;
