import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  min-height: 100vh;
  position: relative;
`;

export const Main = styled.div`
  width: 1030px;
  height: 740px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 32px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    width: 600px;
    height: 600px;
    margin-top: 120px;
    margin-bottom: 24px;
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 500px;
    margin-top: 100px;
    margin-bottom: 16px;
    padding: 0 16px;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-family: 'PretendardSemiBold';
  font-weight: 600;
  color: black;
  margin-top: 88px;
  margin-bottom: 62px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-top: 60px;
    margin-bottom: 50px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-top: 40px;
    margin-bottom: 30px;
  }
`;

export const OptionList = styled.div`
  width: 470px;
  height: 66px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 768px) {
    width: 400px;
    height: 80px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    width: 260px;
    height: auto;
  }
`;

export const Option = styled.label<{ isSelected: boolean }>`
  width: 100%;
  padding: 20px 20px;
  border: 2px solid ${(props) => (props.isSelected ? '#00A05E' : '#d9d9d9')};
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: #ffffff;
  transition: border 0.3s ease;

  &:hover {
    border-color: ${(props) => !props.isSelected && '#00A05E'};
  }

  input[type='radio'] {
    display: none;
  }

  &::before {
    content: '';
    width: 18px;
    height: 18px;
    border: 2px solid ${(props) => (props.isSelected ? '#00A05E' : '#d9d9d9')};
    border-radius: 50%;
    background: ${(props) => (props.isSelected ? '#00A05E' : 'transparent')};
  }

  @media (max-width: 768px) {
    padding: 14px;

    &::before {
      width: 16px;
      height: 16px;
    }
  }

  @media (max-width: 480px) {
    padding: 12px;

    &::before {
      width: 14px;
      height: 14px;
    }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1030px;
  margin-bottom: 142px;

  @media (max-width: 768px) {
    width: 650px;
    margin-bottom: 100px;
  }

  @media (max-width: 480px) {
    width: 340px;
    margin-bottom: 40px;
  }
`;

export const PrevButton = styled.button`
  width: 138px;
  height: 54px;
  border-radius: 10px;
  border: none;
  background: #8e8e8e;
  color: #ffffff;
  font-size: 20px;
  font-family: 'PretendardSemiBold';
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 120px;
    height: 46px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 42px;
    font-size: 16px;
  }
`;

export const NextButton = styled.button<{ disabled: boolean }>`
  width: 138px;
  height: 54px;
  border-radius: 10px;
  border: none;
  background: ${(props) => (props.disabled ? '#d9d9d9' : '#00A05E')};
  color: white;
  font-size: 20px;
  font-family: 'PretendardSemiBold';
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => !props.disabled && '#008c4a'};
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 46px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 42px;
    font-size: 16px;
  }
`;
