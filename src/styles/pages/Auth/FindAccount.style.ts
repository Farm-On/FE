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
  margin-bottom: 40px;
  margin-left: 40px;

  @media (max-width: 767px) {
    font-size: 24px;
    margin-bottom: 30px;
    margin-left: 20px;
  }
`;

export const TabWrapper = styled.div`
  display: flex;
  margin: 0 40px;
  margin-bottom: 40px;
  border-bottom: 1px solid #e5e5e5;

  @media (max-width: 767px) {
    margin: 0 20px 30px;
  }
`;

export const Tab = styled.div<{ active: boolean }>`
  padding: 12px 24px;
  font-family: 'Pretendard';
  font-size: 18px;
  color: ${(props) => (props.active ? '#000000' : '#8E8E8E')};
  font-weight: ${(props) => (props.active ? '600' : '400')};
  cursor: pointer;
  border-bottom: 2px solid ${(props) => (props.active ? '#000000' : 'transparent')};
  transition: all 0.2s ease-in-out;

  @media (max-width: 767px) {
    font-size: 16px;
    padding: 10px 20px;
  }
`;

export const FormContainer = styled.div`
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
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #222222;
  margin-bottom: 12px;
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

export const PhoneDivider = styled.span`
  font-size: 16px;
  color: #999999;
`;

export const VerificationGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const VerificationContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

export const VerificationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

export const VerificationInput = styled(Input)<{ isValid?: boolean; isChecked?: boolean }>`
  width: calc(100% - 200px);
  border-color: ${({ isChecked, isValid }) =>
    isChecked ? (isValid ? '#01a05e' : '#ff0000') : '#d9d9d9'};
`;

export const VerificationTimeText = styled.span`
  font-family: 'Pretendard';
  font-size: 14px;
  color: #999999;
  margin-left: 8px;
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
    opacity: 0.5;
  }
`;

export const VerificationButton = styled(ButtonBase)`
  width: 140px;
  background: #e5e5e5;
  color: #999999;

  &:not(:disabled) {
    background: #01a05e;
    color: #ffffff;
  }

  @media (max-width: 767px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const ResendButton = styled(ButtonBase)`
  width: 140px;
  min-width: 140px;
  background: #f5f5f5;
  color: #424242;

  &:hover {
    background: #e8e8e8;
  }
`;

// 새로 추가된 인증번호 입력 후 사용하는 작은 확인 버튼 스타일
export const VerificationConfirmButton = styled(ButtonBase)`
  width: 140px; // ResendButton과 동일한 너비
  background: #01a05e;
  color: #ffffff;
  font-size: 16px;
  border-radius: 4px;

  &:hover:not(:disabled) {
    background: #018c52;
  }

  &:disabled {
    background: #d9d9d9;
  }
`;

// 아이디/비밀번호 찾기 페이지 하단의 큰 확인 버튼 스타일
export const ConfirmButton = styled(ButtonBase)`
  width: 400px;
  height: 64px;
  background: #01a05e;
  color: #ffffff;
  font-size: 20px;
  border-radius: 16px;
  margin: 60px auto 0;
  display: block;

  &:hover:not(:disabled) {
    background: #018c52;
  }

  &:disabled {
    background: #d9d9d9;
  }

  @media (max-width: 767px) {
    width: calc(100% - 40px);
    height: 56px;
    font-size: 18px;
  }
`;

export const VerificationMessage = styled.span<{ isValid: boolean }>`
  font-family: 'Pretendard';
  font-size: 12px;
  line-height: 1.5;
  color: ${({ isValid }) => (isValid ? '#01a05e' : '#ff0000')};
  margin-top: 4px;
  display: block;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  border-top: 1px solid #e5e5e5;
  position: absolute;
  bottom: 0;
  left: 0;
`;
