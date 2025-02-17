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

export const Chip = styled.div`
  display: inline-flex;
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  gap: 3.57px;
  border-radius: 26.802px;
  border: 0.893px solid #00a05e;
  background: #fff;
`;

export const ChipLabel = styled.span`
  color: #00a05e;
  text-align: center;
  font-family: PretendardRegular;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;

export const ChipXBtn = styled(X)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  & path {
    stroke: #00a05e;
    stroke-width: 1.48899;
  }
`;

export const LocationContainer = styled.div`
  margin-top: 8px;
  height: 270px;
  display: flex;
  flex-direction: row;
  border-radius: 6px;
  border: 0.71px solid #aeaeae;
`;

export const Locations = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LocationsHeader = styled.div`
  width: 178px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 0.71px solid #aeaeae;
  color: #2f2f2f;
  text-align: center;
  font-family: PretendardRegular;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;

export const Location = styled.div<{ selected?: boolean }>`
  padding-top: 16px;
  padding-bottom: 16px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: ${(props) => (props.selected ? '#fff' : '#E8ECEA')};
  color: ${(props) => (props.selected ? '#000' : '#8E8E8E')};
  text-align: center;
  font-family: PretendardRegular;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  cursor: pointer;
`;

export const Divider = styled.div`
  height: 270px;
  width: 0.71px;
  background-color: #aeaeae;
`;

export const DetailedLocations = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const DetailedLocationsHeader = styled.div`
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 0.71px solid #aeaeae;
  color: #2f2f2f;
  text-align: center;
  font-family: PretendardRegular;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;

export const DetailedLocation = styled.div<{ selected?: boolean }>`
  display: flex;
  margin-right: 15px;
  padding: 12px 314px 12px 26px;
  align-items: center;
  border-bottom: 0.7px solid #d1d1d1;
  color: ${(props) => (props.selected ? '#000' : '#8E8E8E')};
  font-family: PretendardRegular;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  cursor: pointer;
`;

export const LocationScroller = styled.div`
  height: 227px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4.262px;
  }
  &::-webkit-scrollbar-track {
    width: 4.262px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #7e7e7e;
  }
`;

export const Options = styled.div`
  margin-top: 26px;
  display: flex;
  flex-direction: column;
`;

export const SecondaryText = styled.span`
  margin-left: 4px;
  color: #5d5d5d;
  font-family: PretendardRegular;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
`;
