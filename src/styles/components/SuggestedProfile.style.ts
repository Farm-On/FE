import styled from '@emotion/styled';

export const Card = styled.div`
  position: relative;
  box-sizing: border-box;
  padding-left: 39px;
  padding-top: 39px;
  padding-right: 42px;
  padding-bottom: 41px;
  width: 590px;
  height: 330px;
  display: flex;
  flex-direction: row;
  gap: 22px;
  flex-shrink: 0;
  border-radius: 28px;
  border: 0.7px solid #d7d7d7;
  background: #fff;

  @media (max-width: 768px) {
    width: 390px;
    height: 230px;
  }

  @media (max-width: 480px) {
    width: 390px;
    height: 230px;
  }
`;

export const Avatar = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 130px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  color: #000;
  font-family: 'PretendardMedium';
  font-size: 27.26px;
  font-style: normal;
  font-weight: 500;
  line-height: 166%; /* 45.251px */
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const RatingsText = styled.span`
  color: #2c2c2c;
  font-family: 'PretendardRegular';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  padding-left: 3px;
  margin: 0;
  padding-top: 3px;
  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const InfoText = styled.span`
  color: #2c2c2c;
  font-family: 'PretendardRegular';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  padding-top: 3px;
  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const FieldText = styled.span`
  color: #2c2c2c;
  font-family: PretendardRegular;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;

export const IntroductionText = styled.span`
  color: var(--gray-400, #8e8e8e);
  font-family: 'PretendardRegular';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 166%; /* 29.88px */
  padding-top: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 351px;

  @media (max-width: 768px) {
    width: 200px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    width: 200px;
    font-size: 13px;
  }
`;

export const ViewPortfolioBtn = styled.button`
  display: flex;
  width: 225px;
  height: 62px;
  padding: 16px 40px;
  justify-content: center;
  align-items: center;
  gap: 15.144px;
  cursor: pointer;
  border-radius: 15.144px;
  border: 1px solid var(--Sub01, #00ba6d);
  background: #fff;
  color: #00a05e;
  font-size: 18px;

  @media (max-width: 768px) {
    width: 100px;
    height: 40px;
    font-size: 13px;
    white-space: nowrap;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 40px;
    font-size: 13px;
    white-space: nowrap;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  top: 227px;
  left: 59px;

  @media (max-width: 768px) {
    top: 170px;
    left: 90px;
  }

  @media (max-width: 480px) {
    top: 170px;
    left: 90px;
  }
`;
export const GoChattingBtn = styled.button`
  display: flex;
  padding: 16px 40px;
  justify-content: center;
  align-items: center;
  gap: 15.144px;
  border-radius: 15.144px;
  background: #c6f2e4;
  width: 226px;
  height: 62px;
  border: none;
  cursor: pointer;
  color: #00a05e;
  font-size: 18px;

  @media (max-width: 768px) {
    width: 100px;
    height: 40px;
    font-size: 13px;
    white-space: nowrap;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 40px;
    font-size: 13px;
    white-space: nowrap;
  }
`;
