import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 0;

  @media (max-width: 767px) {
    padding: 20px 0;
  }
`;

export const Logo = styled.img`
  width: 146.33px;
  height: 30.29px;

  @media (max-width: 767px) {
    width: 110px;
    height: auto;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 0 0 300px;
  width: 100%;
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 1200px;
  background: #ffffff;
  border: 0.7px solid #c2c2c2;
  border-radius: 10px;
  margin: 0 auto;
  padding: 40px;
  position: relative;

  @media (max-width: 1199px) {
    width: 90%;
    padding: 25px;
  }

  @media (max-width: 767px) {
    width: 95%;
    padding: 15px;
  }
`;

export const Title = styled.h1`
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  color: #000000;
  margin-bottom: 60px;
  margin-left: 40px;

  @media (max-width: 767px) {
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 30px;
    margin-left: 15px;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  padding: 0 40px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 767px) {
    padding: 0 15px;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  @media (max-width: 767px) {
    margin-bottom: 24px;
  }
`;

export const Label = styled.label`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #222222;
  margin-bottom: 12px;

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 8px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 0 16px;
  font-family: 'Pretendard';
  font-size: 16px;
  line-height: 19px;
  color: #222222;
  background: #ffffff;
  box-sizing: border-box;

  &::placeholder {
    color: #999999;
  }

  &:focus {
    outline: none;
    border-color: #01a05e;
  }

  @media (max-width: 767px) {
    width: 425px;
    height: 44px;
    font-size: 14px;
    line-height: 17px;
    padding: 0 12px;
  }
`;

export const PasswordWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const PasswordToggle = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: #999999;

  &:hover {
    color: #666666;
  }

  @media (max-width: 767px) {
    right: 12px;
  }
`;

export const ErrorMessage = styled.span`
  font-family: 'Pretendard';
  font-size: 12px;
  line-height: 1.5;
  color: #ff0000;
  margin-top: 4px;

  @media (max-width: 767px) {
    font-size: 11px;
  }
`;

export const SubmitButton = styled.button`
  width: 400px;
  height: 64px;
  background: #01a05e;
  border-radius: 16px;
  border: none;
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
  margin-top: 40px;
  position: relative;
  left: 84%;
  transform: translateX(-50%);

  &:hover {
    background: #018c52;
  }

  @media (max-width: 767px) {
    width: calc(100% - 30px);
    height: 48px;
    font-size: 16px;
    transform: none;
    left: 0;
    margin-top: 30px;
    border-radius: 12px;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  border-top: 1px solid #e5e5e5;
  position: absolute;
  bottom: 0;
  left: 0;
`;
