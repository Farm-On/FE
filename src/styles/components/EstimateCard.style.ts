import styled from '@emotion/styled';

export const Card = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(216, 216, 216, 1);
  border-radius: 10px;
  width: 320px;
  height: 122px;
  top: 245px;
  left: 360px;
  @media (max-width: 768px) {
    width: 150px;
    height: 120px;
  }

  @media (max-width: 480px) {
    width: 158px;
    height: 118px;
  }
`;

export const Content = styled.div`
  width: 100px;
  height: 83px;
  padding-left: 30px;
  padding-top: 20px;
  margin: 0;
  line-height: 21px;

  @media (max-width: 768px) {
    width: 80px;
    height: 120px;
  }

  @media (max-width: 480px) {
    width: 70px;
    height: 118px;
  }
  h4 {
    font-size: 16px;
    margin: 0;
    @media (max-width: 768px) {
      font-size: 13px;
    }

    @media (max-width: 480px) {
      font-size: 13px;
    }
  }
  p {
    font-size: 14px;
    color: rgba(142, 142, 142, 1);
  }
`;
