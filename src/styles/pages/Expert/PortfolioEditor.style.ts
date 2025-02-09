import styled from '@emotion/styled';
import RemoveBtn from '@/assets/icons/removeBtn.svg?react';

export const Title = styled.div`
  margin-bottom: 80px;
  color: #000;
  font-family: PretendardRegular;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 51px */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleInput = styled.input`
  border: none;
  color: #000;
  font-family: PretendardRegular;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 41.6px */
  &::placeholder {
    color: #5d5d5d;
    font-weight: 500;
  }
`;

export const Divider = styled.div`
  margin-top: 18px;
  height: 1px;
  background: #d9d9d9;
`;

export const MainImageContainer = styled.div`
  display: flex;
  padding: 30px 4px 40px 10px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

export const MainImagePlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  color: #8e8e8e;
  font-family: PretendardRegular;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 14.4px */
`;

export const MainImage = styled.div<{ base64Url?: string }>`
  position: relative;
  width: 160px;
  height: 120px;
  border-radius: 6px;
  background: url(${(props) => props.base64Url}) lightgray 50% / cover no-repeat;
`;

export const RemoveButton = styled(RemoveBtn)`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

export const SaveBtn = styled.button`
  margin-top: 42px;
  display: flex;
  padding: 10px 54px;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  gap: 10px;
  border: none;
  border-radius: 8px;
  background: ${(props) => (props.disabled ? '#d9d9d9' : '#00A05E')};
  color: #fff;
  font-family: PretendardRegular;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 166%; /* 29.88px */
  cursor: pointer;
`;
