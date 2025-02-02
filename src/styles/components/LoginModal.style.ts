import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  min-height: 100vh;
  min-height: -webkit-fill-available;
`;

export const ModalContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  width: 500px;
  height: auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 20px;
  z-index: 1001;
  padding: 30px;

  @media (max-width: 768px) {
    width: 90%;
    max-width: 500px;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 20px;
  }
`;

export const ExpertText = styled.p`
  font-family: 'Pretendard';
  font-size: 14px;
  color: #00a05e;
  text-align: center;
  margin: 0 0 20px;
  margin-top: -40px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 2px;
    background-color: #000;
    top: 50%;
    left: 50%;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const LogoImage = styled.img`
  width: 146px;
  height: 30px;
  display: block;
  margin: 40px auto 60px;

  @media (max-width: 768px) {
    width: 130px;
    height: 27px;
    margin: 30px auto 60px;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 440px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 12px;
`;

export const Input = styled.input<{ isError?: boolean }>`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border: 1px solid ${(props) => (props.isError ? '#FF0000' : '#d9d9d9')};
  border-radius: 8px;
  font-family: 'Pretendard';
  font-size: 16px;
  outline: none;

  &::placeholder {
    color: #8e8e8e;
  }

  &:focus {
    border-color: ${(props) => (props.isError ? '#FF0000' : '#00a05e')};
  }

  @media (max-width: 480px) {
    height: 45px;
    font-size: 14px;
    padding: 0 15px;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 14px;
  font-family: 'Pretendard';
  margin-top: -4px;
  margin-bottom: 16px;
  text-align: left;
  padding: 0 4px;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  background: #00a05e;
  border: none;
  border-radius: 8px;
  color: white;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin: 20px 0;

  @media (max-width: 480px) {
    height: 45px;
    font-size: 15px;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const RememberContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  margin: 0;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
  }
`;

export const RememberText = styled.label`
  font-family: 'Pretendard';
  font-size: 14px;
  color: #666;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const FindAccountLink = styled.span`
  font-family: 'Pretendard';
  font-size: 14px;
  color: #666;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const SignupButton = styled.button`
  width: 100%;
  height: 50px;
  background: white;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  color: #666;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 70px;

  @media (max-width: 768px) {
    margin-top: 50px;
    height: 45px;
  }

  @media (max-width: 480px) {
    margin-top: 40px;
    height: 45px;
    font-size: 15px;
  }
`;

export const SignupText = styled.p`
  font-family: 'Pretendard';
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 0;

  @media (max-width: 480px) {
    font-size: 12px;
    margin-top: 10px;
  }
`;
