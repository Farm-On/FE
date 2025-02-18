import styled from '@emotion/styled';

export const Title = styled.div`
  margin-bottom: 30px;
  color: #000;
  font-family: PretendardRegular;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 51px */
`;

export const FilterChips = styled.div`
  margin-bottom: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const FilterChip = styled.div`
  padding: 6px 14px 6px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  border-radius: 66px;
  border: 0.7px solid #c1c1c1;
`;

export const FilterChipLabel = styled.span`
  color: #000;
  text-align: center;
  font-family: PretendardRegular;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 166%; /* 26.56px */
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
