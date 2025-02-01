import styled from '@emotion/styled';

export const Title = styled.div`
  margin-bottom: 36px;
  color: #000;
  font-family: PretendardRegular;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 51px */
`;

export const TabContainer = styled.div`
  margin-bottom: 38.5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid #d9d9d9;
  cursor: pointer;
`;

export const Tab = styled.div<{ active?: boolean }>`
  padding: 10px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: ${(props) => (props.active ? '2px solid #000' : undefined)};
  color: ${(props) => (props.active ? '#000' : '#8E8E8E')};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: ${(props) => (props.active ? 600 : 500)};
  line-height: normal;
`;

export const Grid = styled.div`
  margin-bottom: 70px;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(390px, 1fr)); /* TODO 반응형 */
  grid-template-rows: auto;
  column-gap: 15px;
  row-gap: 12px;
`;
