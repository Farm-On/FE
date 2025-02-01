import styled from '@emotion/styled';

import ChevronRightGray from '@/assets/icons/ChevronRightGray.svg?react';

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

export const Grid = styled.div`
  margin-bottom: 70px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  column-gap: 16px;
  row-gap: 20px;
`;

export const Card = styled.div`
  width: 346px;
  padding: 23px 40px 20px 40px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 0.436px solid #d7d7d7;
  background: #fff;
`;

export const CardTitle = styled.span`
  margin-bottom: 6px;
  color: #000;
  font-family: PretendardRegular;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  text-transform: uppercase;
`;

export const CardProperties = styled.span`
  color: #8e8e8e;
  font-family: PretendardRegular;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;

export const CardDivider = styled.div`
  width: 100%;
  margin-top: 18px;
  margin-bottom: 10px;
  border-bottom: 0.7px solid #c1c1c1;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardEstimatedCost = styled.span`
  color: #666;
  font-family: PretendardRegular;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;

export const CardDate = styled.span`
  color: #8e8e8e;
  font-family: PretendardRegular;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
`;

export const NextPage = styled(ChevronRightGray)<{ disabled?: boolean }>`
  & path {
    stroke: ${(props) => (props.disabled ? '#D9D9D9' : '#8E8E8E')};
  }
`;

export const PreviousPage = styled(NextPage)`
  transform: rotate(180deg);
`;

export const PageButton = styled.button<{ active?: boolean }>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 7.551px;
  background: ${(props) => (props.active ? '#00a05e' : 'transparent')};
  color: ${(props) => (props.active ? '#fff' : '#8E8E8E')};
  font-family: PretendardRegular;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
`;
