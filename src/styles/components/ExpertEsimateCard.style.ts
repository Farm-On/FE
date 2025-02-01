import styled from '@emotion/styled';

export const Card = styled.div`
  width: 346px;
  padding: 23px 40px 20px 40px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 0.436px solid #d7d7d7;
  background: #fff;
`;

export const CardHeader = styled.div`
  margin-bottom: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DoneChip = styled.div`
  display: flex;
  padding: 4px 13px;
  justify-content: center;
  align-items: center;
  gap: 29px;
  flex-shrink: 0;
  border-radius: 17px;
  background: #ffd27f;
  color: #f18912;
  font-family: PretendardRegular;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  text-transform: uppercase;
`;

export const CardTitle = styled.span`
  color: #000;
  font-family: PretendardRegular;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  text-transform: uppercase;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
