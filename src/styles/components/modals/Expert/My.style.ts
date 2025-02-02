import styled from '@emotion/styled';

import X from '@/assets/icons/X.svg?react';

export const Header = styled.div`
  padding-top: 20px;
  padding-right: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Content = styled.div`
  margin-top: 4px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
`;

export const CloseBtn = styled(X)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const Title = styled.span`
  margin-left: 5px;
  margin-bottom: 8px;
  color: #000;
  font-family: PretendardRegular;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
`;

export const Input = styled.input`
  padding: 11px 18px 11px 18px;
  border-radius: 6px;
  border: 1px solid #d9d9d9;
  &::placeholder {
    padding-top: 11px;
    color: #d9d9d9;
    font-family: PretendardRegular;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 166%; /* 29.88px */
  }
`;

export const MaxLengthText = styled.span`
  margin-top: 4px;
  margin-right: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  color: #8e8e8e;
  font-family: PretendardRegular;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;

export const CheckBoxContainer = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;
`;

export const CheckBox = styled.div<{ checked?: boolean }>`
  margin-left: 5px;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2.571px;
  border: ${(props) => (props.checked ? '1px solid transparent' : '1px solid #5d5d5d')};
  background: ${(props) => (props.checked ? '#00a05e' : undefined)};
  cursor: pointer;
`;

export const CheckBoxLabel = styled.span`
  color: #2c2c2c;
  font-family: PretendardRegular;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 166%; /* 29.88px */
`;

export const SaveBtn = styled.button<{ active?: boolean }>`
  margin-top: 42px;
  display: flex;
  padding: 10px 54px;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  gap: 10px;
  border: none;
  border-radius: 8px;
  background: ${(props) => (props.active ? '#00A05E' : '#d9d9d9')};
  color: #fff;
  font-family: PretendardRegular;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 166%; /* 29.88px */
  cursor: pointer;
`;
