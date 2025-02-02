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
    padding: 30px 0;
  }
`;

export const Logo = styled.img`
  width: 146.33px;
  height: 30.29px;

  @media (max-width: 767px) {
    width: 120px;
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
    padding: 30px;
  }

  @media (max-width: 767px) {
    width: 95%;
    padding: 20px;
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
    font-size: 24px;
    margin-bottom: 40px;
    margin-left: 20px;
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
    padding: 0 20px;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #222222;
  margin-bottom: 12px;
`;

export const Required = styled.span`
  color: #ff0000;
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
`;

export const Divider = styled.div`
  width: calc(173% + 80px);
  height: 1px;
  background: #e5e5e5;
  margin: 40px -40px;
  transform: translateX(-20%);

  @media (max-width: 767px) {
    width: calc(100% + 40px);
    margin: 30px -20px;
    transform: none;
  }
`;

export const BirthInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4.5px;
`;

export const BirthInput = styled(Input)`
  width: 165px;
  text-align: center;

  @media (max-width: 767px) {
    width: calc(33.333% - 10px);
  }
`;

export const BirthDivider = styled.span`
  font-size: 16px;
  color: #999999;
`;

export const GenderGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RadioInput = styled.input`
  width: 20px;
  height: 20px;
  margin: 0;
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  font-family: 'Pretendard';
  font-size: 16px;
  color: #222222;
  cursor: pointer;
`;

export const GenderNotice = styled.span`
  font-family: 'Pretendard';
  font-size: 14px;
  color: #999999;
  margin-left: 8px;
`;

export const PhoneInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const PhoneInput = styled(Input)`
  width: 155px;
  text-align: center;

  @media (max-width: 767px) {
    width: calc(33.333% - 10px);
  }
`;

export const PhoneDivider = styled(BirthDivider)``;

export const VerificationGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const VerificationControlGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const VerificationInput = styled(Input)<{ isValid?: boolean; isChecked?: boolean }>`
  width: 250px;
  border-color: ${({ isChecked, isValid }) =>
    isChecked ? (isValid ? '#01a05e' : '#ff0000') : '#d9d9d9'};

  @media (max-width: 767px) {
    width: calc(100% - 170px);
  }
`;

export const VerificationTimeText = styled.span`
  font-family: 'Pretendard';
  font-size: 14px;
  color: #999999;
  margin: 0 8px;
`;

export const VerificationMessage = styled.span<{ isValid: boolean }>`
  font-family: 'Pretendard';
  font-size: 12px;
  line-height: 1.5;
  color: ${({ isValid }) => (isValid ? '#01a05e' : '#ff0000')};
  margin-top: 4px;
`;

export const ErrorMessage = styled.span`
  font-family: 'Pretendard';
  font-size: 12px;
  line-height: 1.5;
  color: #ff0000;
  margin-top: 4px;
`;

const ButtonBase = styled.button`
  height: 52px;
  border: none;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const VerificationButton = styled(ButtonBase)`
  width: 140px;
  min-width: 140px;
  background: #e5e5e5;
  color: #999999;

  @media (max-width: 767px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const ConfirmButton = styled(ButtonBase)`
  width: 90px;
  background: #424242;
  color: #ffffff;

  &:disabled {
    opacity: 0.5;
  }
`;

export const ResendButton = styled(ButtonBase)`
  width: 140px;
  background: #f5f5f5;
  color: #424242;

  &:hover {
    background: #e8e8e8;
  }

  @media (max-width: 767px) {
    width: 100%;
    margin-top: 10px;
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
  margin-top: 60px;
  position: relative;
  left: 50%;
  transform: translateX(0%);

  &:hover {
    background: #018c52;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 56px;
    font-size: 18px;
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
