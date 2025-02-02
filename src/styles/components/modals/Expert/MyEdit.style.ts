import styled from '@emotion/styled';

import X from '@/assets/icons/X.svg?react';
import ChevronDownIcon from '@/assets/icons/ChevronDownGray.svg?react';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const CloseBtn = styled(X)`
  margin-top: 34px;
  margin-right: 34px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  & path {
    stroke: #2c2c2c;
  }
`;

export const Content = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  margin-top: 4px;
  margin-left: 5px;
  color: #000;
  font-family: PretendardRegular;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
`;

export const Input = styled.input`
  padding-top: 11px;
  padding-left: 16px;
  padding-bottom: 11px;
  height: 52px;
  border-radius: 6px;
  border: 1px solid #d9d9d9;
  color: #000;
  font-family: PretendardRegular;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 166%; /* 29.88px */
  &::placeholder {
    color: #d9d9d9;
    font-family: PretendardRegular;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 166%; /* 29.88px */
  }
`;

export const MaxLengthText = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 4px;
  margin-right: 9px;
  color: #8e8e8e;
  font-family: PretendardRegular;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;

export const Dropdowns = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const DropdownLabel = styled.span`
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
`;

export const ChevronDown = styled(ChevronDownIcon)<{ selected?: boolean }>`
  width: 24px;
  height: 24px;
  & path {
    stroke: #000;
  }
  cursor: pointer;
`;

export const Dropdown = styled.div<{ selected?: boolean }>`
  padding: 12px 14px 10px 16px;
  width: 150px;
  height: 52px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px solid #d9d9d9;

  ${DropdownLabel} {
    color: ${(props) => (props.selected ? '#000' : '#8E8E8E')};
    font-weight: ${(props) => (props.selected ? 500 : 400)};
  }

  ${ChevronDown} {
    & path {
      stroke: ${(props) => (props.selected ? '#000' : '#8E8E8E')};
    }
  }
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;
`;

export const CheckBox = styled.div<{ checked?: boolean }>`
  margin-left: 14px;
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

export const SaveBtn = styled.button`
  margin-top: 47px;
  display: flex;
  padding: 10px 54px;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  gap: 10px;
  border: none;
  border-radius: 8px;
  background: ${(props) => (props.disabled ? '#D9D9D9' : '#00a05e')};
  color: #fff;
  font-family: PretendardRegular;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 166%; /* 29.88px */
  cursor: pointer;
`;
