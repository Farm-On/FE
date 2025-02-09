import styled from '@emotion/styled';


export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding-bottom: 487px;
  box-sizing: border-box;
`


export const Container = styled.div`
  padding-left: 80px;
  max-width: 1920px;
  width: 90%;
  margin:0 auto;
  @media (max-width: 768px) {
    padding-left: 60px;
  }

  @media (max-width: 480px) {
    padding-left: 60px;
  }
`;
export const Title1 = styled.div`
  padding-top: 84px;
  width: 1200px;
  height: 51px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: start;
    padding-top: 70px;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: start;
    padding-top: 70px;
  }

  h2 {
    font-family: 'PretendardSemiBold';
    font-size: 34px;
    margin: 0;
  }
`;
export const Title2 = styled.div`
  padding-top: 84px;
  width: 140px;
  height: 99px;
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
  gap: 6px;
  position: relative;
  h2 {
    font-family: 'PretendardSemiBold';
    font-size: 30px;
    margin: 0;
  }

  h3 {
    font-family: Pretendard;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(95, 95, 95, 1);
    margin: 0;
  }
`;

export const ViewAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  h4 {
    font-family: 'PretendardRegular';
    margin: 0;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 160, 94, 1);
  }
  p {
    margin: 0;
    width: 20px;
    height: 20px;
    color: rgba(0, 160, 94, 1);
  }
  

`;
export const MyCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 15px;
  row-gap: 18px;
  margin-top: 50px;
  max-width: 1200px;

  @media (max-width: 768px) {
    max-width: 700px;  
    grid-template-columns: repeat(3, 1fr);
    column-gap: 5px;
    row-gap: 8px;
  }

  @media (max-width: 480px) {
    max-width: 400px;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 5px;
    row-gap: 8px;
  }
`;
export const AddCard = styled.div`
  background-color: rgba(255, 255, 255, 1);
  background-image: url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 320 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='319' height='121' rx='9.5' fill='white' stroke='%23BBBBBB' stroke-dasharray='6 6'/%3E%3C/svg%3E");
  background-repeat:no-repeat;
  background-size: contain;
  width: 390px;
  height: 149px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap:10px;
  background-size: 100% 100%;
  @media (max-width: 768px) {
    width: 180px;
    height: 120px;
    background-image: none;
  }

  @media (max-width: 480px) {
    width: 138px;
    height: 108px;
    top: 260px;
    background-image:none;
  }
  p {
    font-size: 14px;
    color:#5D5D5D;
    margin:0;
    white-space: nowrap;
  }
`;

export const DividingLine = styled.div`
  width: 1200px;
  height: 0.7px;
  background-color: rgba(187, 187, 187, 1);
  margin-top: 110px;
  @media (max-width: 768px) {
    width: 700px;
  }

  @media (max-width: 480px) {
    width: 400px;
  }
`;

export const ExpertCardWrap = styled.div`
  display: flex;
  gap: 14px;
  position: absolute;
  top: 753px;
  left: 462px;

  @media (max-width: 768px) {
    left: 60px;
    top: 800px;
  }

  @media (max-width: 480px) {
    left: 60px;
    top: 750px;
  }
`;

export const ChevronRight = styled.div`
  position: absolute;
  z-index: 50;
  left: 97%;
  top: 40%;
`;
