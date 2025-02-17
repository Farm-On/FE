import styled from '@emotion/styled';

import X from '@/assets/icons/X.svg?react';
import UnselectedCircle from '@/assets/icons/UnselectedCircle.svg?react';
import SelectedGreenCircle from '@/assets/icons/SelectedGreenCircle.svg?react';
import ChevronDownGray from '@/assets/icons/ChevronDownGray.svg?react';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  padding-top: 16px;
  padding-right: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.span`
  color: #2c2c2c;
  font-family: PretendardRegular;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 166%; /* 29.88px */
`;

export const CloseBtn = styled(X)`
  cursor: pointer;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const Tabs = styled.div`
  margin-top: 20px;
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const TabLabel = styled.span<{ active?: boolean }>`
  margin-bottom: ${(props) => (props.active ? '-2px' : undefined)};
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  border-width: 34px;
  border-bottom: ${(props) => (props.active ? '2px solid #00a05e' : undefined)};
  color: ${(props) => (props.active ? '#00a05e' : '#8E8E8E')};
  font-family: PretendardRegular;
  font-size: 14px;
  font-style: normal;
  font-weight: ${(props) => (props.active ? 600 : 500)};
  line-height: 150%; /* 21px */
  cursor: pointer;
`;

export const Items = styled.div`
  padding-top: 20px;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RadioItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const ListItems = styled.div`
  padding-top: 20px;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const ListItem = styled.div<{ selected?: boolean | 'all' }>`
  margin-right: 11px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => (props.selected === true ? '#EFEFEF' : 'transparent')};
  cursor: pointer;
  color: ${(props) => (props.selected === 'all' ? '#00A05E' : '#5d5d5d')};
  font-family: PretendardRegular;
  font-size: 14px;
  font-style: normal;
  font-weight: ${(props) => (props.selected === 'all' ? 600 : 500)};
  line-height: 150%; /* 21px */
`;

export const SubListItem = styled.div<{ selected?: boolean }>`
  padding-top: 10px;
  padding-left: 16px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => (props.selected ? '#00A05E' : '#5d5d5d')};
  font-family: PretendardRegular;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  cursor: pointer;
`;

export const ChevronDown = styled(ChevronDownGray)<{ active?: boolean }>`
  transform: ${(props) => (props.active ? 'rotate(180deg)' : undefined)};
`;

export const ItemText = styled.span<{ selected?: boolean }>`
  color: ${(props) => (props.selected ? '#00a05e' : '#8E8E8E')};
  font-family: PretendardRegular;
  font-size: 14px;
  font-style: normal;
  font-weight: ${(props) => (props.selected ? 600 : 500)};
  line-height: 150%; /* 21px */
`;

export const UnselectedRadioBtn = styled(UnselectedCircle)`
  cursor: pointer;
`;

export const SelectedRadioBtn = styled(SelectedGreenCircle)`
  cursor: pointer;
`;

export const Footer = styled.div`
  display: flex;
  padding: 14px 28px 14px 0px;
  justify-content: flex-end;
  align-items: center;
  border-radius: 0px 0px 10px 10px;
  background: #fff;
  box-shadow: 0px -5px 15px 0px rgba(0, 0, 0, 0.03);
`;

export const ApplyBtn = styled.button`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 10px;
  background: #00a05e;
  cursor: pointer;
  color: #fff;
  font-family: PretendardRegular;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
`;
