import styled from '@emotion/styled';

import Sliders from '@/assets/icons/Sliders.svg?react';

export const Title = styled.div`
  margin-bottom: 30px;
  color: #000;
  font-family: PretendardRegular;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 51px */
`;

export const Container = styled.div`
  margin-top: 52px;
  display: flex;
  flex-direction: row;
  gap: 105px;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Menu = styled.div<{ active?: boolean }>`
  display: flex;
  width: 219px;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 24px;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  ${(props) => (props.active ? 'background: #00BA6D;' : undefined)}
  color: ${(props) => (props.active ? '#fff' : '#5D5D5D')};
  font-family: PretendardRegular;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
`;

export const SubMenuContainer = styled.div`
  margin-left: 27px;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SubMenu = styled.span`
  color: #888;
  font-family: PretendardRegular;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  margin-bottom: 31px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SelectedCategoryLabel = styled.span`
  margin-left: 4px;
  color: #000;
  text-align: center;
  font-family: PretendardRegular;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 33px */
`;

export const FilterBtn = styled(Sliders)`
  cursor: pointer;
`;

export const Grid = styled.div`
  margin-bottom: 70px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  column-gap: 16px;
  row-gap: 20px;
`;
