import styled from '@emotion/styled';

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    width: 95%;
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0 10px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  margin-top: 84px;
  margin-bottom: 20px;
  align-self: flex-start;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 50px;
  }

  @media (max-width: 480px) {
    margin-top: 40px;
  }
`;

export const Title = styled.h1`
  font-size: 34px;
  font-weight: 600;
  font-family: PretendardRegular;
  font-style: semiBold;
  color: black;
  margin-right: 5px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const CategorySelect = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  align-self: flex-start;
  height: 39px;
  width: 121px;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

export const SelectButton = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  border: 0.7px solid #c1c1c1;
  border-radius: 66px;
  background: white;
  font-size: 16px;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    width: 40%;
    height: 80%;
    font-size: 14px;
  }
`;

export const DropdownItemTitle = styled.h1`
  color: #5d5d5d;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 21px;
  word-wrap: break-word;
  margin-bottom: 5px;
  margin-top: 8px;
`;

export const TextAreaWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  min-height: 400px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background: white;

  @media (max-width: 768px) {
    min-height: 350px;
  }

  @media (max-width: 480px) {
    min-height: 300px;
    padding: 8px;
  }
`;

export const UploadBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 77px;
  height: 99px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    width: 65px;
    height: 85px;
    margin-right: 10px;
  }
`;

export const ImagePreview = styled.img`
  width: 77px;
  height: 77px;
  object-fit: cover;
  border-radius: 6px;

  @media (max-width: 480px) {
    width: 65px;
    height: 65px;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 480px) {
    top: -3px;
    right: -3px;
  }
`;

export const AddPictureWrapper = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DropdownButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  margin-top: 130px;
  margin-left: 30px;
  width: 140px;
  height: 88px;
  background: white;
  box-shadow: 0px 0px 6.73px rgba(0, 0, 0, 0.12);
  border-radius: 5.05px;
  border: 0.59px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputField = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #d9d9d9;
  font-family: PretendardMedium;
  border-radius: 6px;
  padding: 10px;
  font-size: 18px;
  margin-bottom: 20px;
  outline: none;
  &::placeholder {
    color: #8e8e8e;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    height: 45px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 470px;
  border: none;
  padding: 10px;
  font-size: 18px;
  resize: none;
  margin-bottom: 20px;
  outline: none;
  line-height: 29.88px;
  &::placeholder {
    color: #8e8e8e;
    line-height: 29.88px;
  }

  @media (max-width: 480px) {
    height: 300px;
    font-size: 14px;
  }
`;

export const SubmitButton = styled.button<{ isEnabled: boolean }>`
  width: 197px;
  height: 61px;
  padding: 14px;
  margin-top: 20px;
  background: ${({ isEnabled }) => (isEnabled ? '#00A05E' : '#d9d9d9')};
  color: white;
  font-size: 22px;
  font-weight: 500;
  border-radius: 10px;
  cursor: ${({ isEnabled }) => (isEnabled ? 'pointer' : 'not-allowed')};
  border: none;
  text-align: center;
  align-self: flex-end;
  margin-bottom: 120px;

  @media (max-width: 480px) {
    width: 100%;
    height: 45px;
    font-size: 16px;
    margin-bottom: 60px;
  }
`;

export const DropdownItem = styled.div`
  color: black;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 500;
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    background: #f1f1f1;
    border-radius: 5px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;
