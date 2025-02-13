import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 360px;
  justify-content: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  margin-top: 84px;
  margin-bottom: 20px;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 34px;
  font-weight: 600;
  font-family: PretendardRegular;
  font-style: semiBold;
  color: black;
  margin-right: 5px;
`;

export const CategorySelect = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  align-self: flex-start;
  height: 39px;
  width: 121px;
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
`;

export const TextAreaWrapper = styled.div`
  width: 1200px;
  height: 569px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background: white;
`;

export const UploadBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 10px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 77px;
  height: 99px;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
`;

export const ImagePreview = styled.img`
  width: 77px;
  height: 77px;
  object-fit: cover;
  border-radius: 6px;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const InputField = styled.input`
  width: 1200px;
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
`;

export const AddPictureWrapper = styled.label`
  cursor: pointer;
`;
