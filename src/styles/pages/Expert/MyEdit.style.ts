import styled from '@emotion/styled';

import AddBtnGray from '@/assets/icons/AddBtnGray.svg?react';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  margin-bottom: 80px;
  color: #000;
  font-family: PretendardRegular;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 51px */
`;

export const Label = styled.p`
  margin-left: 17px;
  margin-bottom: 14px;
  color: #2c2c2c;
  font-family: PretendardRegular;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 36px */
`;

export const Card = styled.div`
  padding: 35px 50px 35px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap; /* TODO 반응형 */
  border-radius: 28px;
  border: 1px solid #d8d8d8;
  background: #fff;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardHeader = styled.div`
  margin-bottom: 30px;
  color: #000;
  font-family: PretendardRegular;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const CareerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CareerHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CareerEdit = styled.span`
  color: #8e8e8e;
  font-family: PretendardRegular;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  cursor: pointer;
`;

export const Text = styled.span`
  color: #222;
  font-family: PretendardRegular;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 166%; /* 29.88px */
`;

export const CareerListText = styled(Text)`
  &:before {
    content: '•';
    margin-right: 8px;
  }
`;

export const Add = styled.button`
  display: inline-flex;
  padding: 18px 300px 18px 30px;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 6px;
  background: #eee;
  color: #8e8e8e;
  font-family: PretendardRegular;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  cursor: pointer;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 26px;
`;

export const PortfolioCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 17.43px;
  border: 1px solid #d7d7d7;
  background: #fff;
`;

export const PortfolioCardImage = styled.img`
  margin: 22px 29px 0px 29px;
  width: 122px;
  height: 122px;
  border-radius: 10px;
  background: url(${(props) => props.src}) lightgray 50% / cover no-repeat;
`;

export const PortfolioCardText = styled.span`
  margin-top: 16px;
  color: #000;
  font-family: PretendardRegular;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;

export const PortfolioCardEdit = styled.span`
  margin-top: 11px;
  margin-bottom: 14px;
  color: #8e8e8e;
  font-family: PretendardRegular;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  cursor: pointer;
`;

export const AddPortfolioContainer = styled.div`
  margin-left: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const AddBtn = styled(AddBtnGray)`
  cursor: pointer;
`;

export const AddText = styled.span`
  color: #8e8e8e;
  text-align: center;
  font-family: PretendardRegular;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 166%; /* 29.88px */
`;

export const SaveBtn = styled.button`
  margin-top: 200px;
  display: flex;
  padding: 20px 135px 20px 136px;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 10px;
  border: none;
  border-radius: 16px;
  background: #00a05e;
  color: #fff;
  font-family: PretendardRegular;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
  cursor: pointer;
`;
