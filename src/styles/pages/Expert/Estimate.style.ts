import styled from '@emotion/styled';

export const Title = styled.div`
  color: #000;
  font-family: PretendardRegular;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 51px */
`;

export const Subtitle = styled.span`
  margin-top: 6px;
  margin-left: 1px;
  color: #8e8e8e;
  font-family: PretendardRegular;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 166%; /* 29.88px */
`;

export const Content = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Card = styled.div`
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.03);
`;

export const Inline = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

export const Name = styled.span`
  color: #000;
  font-family: PretendardRegular;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 166%; /* 29.88px */
  &:before {
    content: '•';
    margin-right: 8px;
  }
`;

export const Value = styled.span`
  color: #2c2c2c;
  font-family: PretendardRegular;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 166%; /* 29.88px */
`;

export const ConsultingImageContainer = styled.div`
  margin-top: 32px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const ConsultingImage = styled.img`
  width: 147px;
  height: 142px;
  border-radius: 20px;
  background: url(${(props) => props.src}) lightgray 50% / cover no-repeat;
`;

export const ConsultingContent = styled.pre`
  width: 865px;
  color: #5d5d5d;
  font-family: PretendardRegular;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  white-space: pre-wrap;
`;

export const ChatButton = styled.button`
  margin-top: 109px;
  padding: 18px 160px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 10px;
  border-radius: 16px;
  border: none;
  background: #00a05e;
  color: #fff;
  font-family: PretendardRegular;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 166%; /* 29.88px */
`;
