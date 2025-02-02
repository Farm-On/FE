import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  //width: 100%;
  //position: relative;

  @media (max-width: 768px) {
    flex-direction: column; // 모바일에서는 세로로 배치
  }
`;

export const LeftCommunity = styled.div`
  @media (max-width: 768px) {
    width: 100%; // 태블릿에서는 전체 너비
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    width: 100%; // 모바일에서도 전체 너비
    padding: 0 10px;
  }
`;
export const RightCommunity = styled.div`
  @media (max-width: 768px) {
    padding: 20px;
    width: 90%;
  }

  @media (max-width: 480px) {
    padding: 10px;
    width: 90%;
  }
`;

export const Title = styled.div`
  width: 118px;
  height: 51px;
  padding-left: 18.75vw;
  padding-top: 11vw;
  h2 {
    color: #000;
    font-family: 'PretendardMedium';
    font-size: 34px;
    line-height: 150%; /* 51px */
    margin: 0;
    @media (max-width: 768px) {
      font-size: 35px;
      margin-bottom: 20px;
      white-space: nowrap;
    }

    @media (max-width: 480px) {
      font-size: 25px;
      margin-bottom: 15px;
    }
  }
`;
export const Item = styled.div<{ isSelected: boolean }>`
  display: flex;
  padding: 18px 160px 18px 24px;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: ${(props) => (props.isSelected ? '#00BA6D' : '')};
  cursor: pointer;
  @media (max-width: 768px) {
    height: 50px;
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    height: 50px;
    padding: 0 10px;
  }
  p {
    color: ${(props) => (props.isSelected ? 'rgba(255, 255, 255, 1)' : '#5D5D5D')};
    font-family: 'PretendardMedium';
    font-size: 20px;
    line-height: 150%; /* 30px */
    margin: 0;
    min-width: 52px;
    width: fit-content;
    white-space: nowrap;
    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
`;
export const CategoryItem = styled.div`
  width: 219px;
  height: 66px;
  @media (max-width: 768px) {
    width: 150px;
  }

  @media (max-width: 480px) {
    width: 150px;
  }
`;
export const Category = styled.div`
  padding-left: 18.75vw;
  padding-top: 3.6vw;
  display: flex;
  flex-direction: column;
  gap: 1px;
`;
export const FilterChip = styled.div`
  display: flex;
  padding: 6px 14px 6px 16px;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 66px;
  border: 0.7px solid #c1c1c1;
  width: 48px;
  height: 27px;
  color: #000;
  text-align: center;
  font-family: 'PretendardRegular';
  font-size: 16px;
  line-height: 166%; /* 26.56px */
  margin: 0;
  //position:absolute;
  margin-left: 7.3vw;
  margin-top: 30px;
`;
