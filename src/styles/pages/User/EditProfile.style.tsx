import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 84px 20px 0;

  @media (max-width: 768px) {
    padding: 60px 16px 0;
  }
`;

export const Title = styled.h1`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 150%;
  color: #000000;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  padding: 70px 20px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.03);
  border-radius: 28px;

  @media (max-width: 768px) {
    padding: 40px 16px;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 30px 12px;
    border-radius: 16px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`;

export const FieldGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  gap: 94px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 32px;
  }
`;

export const Label = styled.label`
  width: 82px;
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 18px;
  color: #000000;

  @media (max-width: 768px) {
    width: auto;
    font-size: 16px;
  }
`;

export const Value = styled.div`
  flex: 1;
  font-family: 'Pretendard';
  font-size: 18px;
  color: #000000;
  display: flex;
  align-items: center;
  gap: 52px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    gap: 16px;
  }
`;

export const Input = styled.input`
  flex: 1;
  height: 44px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 0 16px;
  font-family: 'Pretendard';
  font-size: 18px;

  &:disabled {
    background: #f5f5f5;
    color: #8e8e8e;
  }

  &:focus {
    outline: none;
    border-color: #00a05e;
  }

  @media (max-width: 768px) {
    height: 40px;
    font-size: 16px;
    padding: 0 12px;
  }
`;

const ButtonBase = styled.button`
  height: 44px;
  background: #8e8e8e;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;

  &:hover:not(:disabled) {
    background: #7a7a7a;
  }

  &:disabled {
    background: #d9d9d9;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    height: 40px;
    font-size: 14px;
  }
`;

export const ModifyButton = styled(ButtonBase)`
  padding: 4px 16px;
  min-width: 160px;

  @media (max-width: 768px) {
    min-width: 140px;
    padding: 4px 12px;
  }
`;

export const SmallModifyButton = styled(ButtonBase)`
  width: 60px;
  padding: 4px;

  @media (max-width: 768px) {
    width: 50px;
  }
`;

export const SaveButton = styled.button`
  width: 100%;
  height: 50px;
  background: #00a05e;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 30px;
  cursor: pointer;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: #008c52;
  }

  @media (max-width: 768px) {
    height: 46px;
    font-size: 15px;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff0000;
  font-family: 'Pretendard';
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 13px;
    margin-top: 16px;
  }
`;

export const SuccessMessage = styled.div`
  color: #00a05e;
  font-family: 'Pretendard';
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 13px;
    margin-top: 16px;
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
