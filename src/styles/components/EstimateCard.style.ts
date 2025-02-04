import styled from '@emotion/styled';

export const Card = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(216, 216, 216, 1);
  border-radius: 20px;
  width: 390px;
  height: 149px;
  top: 245px;
  left: 360px;

  @media (max-width: 768px) {
    width: 180px;
    height: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 98px;
  }
`;

export const Content = styled.div`
  width: 337px;
  height: 106px;
  padding-left: 27px;
  padding-top: 22px;
  margin: 0;
  line-height: 21px;
  white-space:no-wrap;
  display:flex;
  flex-direction:column;
  gap:6px;

  @media (max-width: 768px) {
    width: 130px;
    height: 120px;
    padding-left: 22px;
    padding-top:20px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 98px;
    padding-left: 5px;
    padding-top: 10px;
  }

  h2 {
    font-size: 20px;
    margin: 0;
    font-family:'PretendardRegular';
    padding-bottom:6px;
    @media (max-width: 768px) {
      font-size: 13px;
      width:128px;
    }

    @media (max-width: 480px) {
      font-size: 9px;
      width:96px;
    }
  }
  h3 {
    margin: 0;
    color: #8E8E8E;
    font-family: 'PretendardRegular';
    font-size: 14px;
    line-height: 150%; /* 21px */
    padding-bottom:13px;

    @media (max-width: 768px) {
      font-size: 13px;
      width:128px;
    }

    @media (max-width: 480px) {
      font-size: 8px;
      width:90px;
    }
  }

`;
