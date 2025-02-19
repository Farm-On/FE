import styled from '@emotion/styled';

import ChevronDownIcon from '@/assets/icons/ChevronDownGray.svg?react';

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
`;

export const DropdownContainer = styled.div<{ disabled?: boolean }>`
  position: relative;
  width: 150px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  ${DropdownLabel} {
    color: ${(props) => (props.disabled ? '#8E8E8E' : '#000')};
    font-weight: ${(props) => (props.disabled ? 500 : 400)};
  }

  ${ChevronDown} {
    & path {
      stroke: ${(props) => (props.disabled ? '#8E8E8E' : '#000')};
    }
  }
`;

export const Dropdown = styled.div`
  padding: 12px 14px 10px 16px;
  width: 100%;
  height: 52px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px solid #d9d9d9;
`;

export const Options = styled.div`
  overflow-y: auto;
  position: absolute;
  top: 60px;
  width: 100%;
  max-height: 200px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

export const Option = styled.div`
  padding: 12px 14px 10px 16px;
  color: #000;
  font-family: PretendardRegular;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 166%; /* 29.88px */
  cursor: pointer;
`;
