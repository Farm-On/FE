import styled from '@emotion/styled';

export const Title = styled.div`
  height: 51px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  h2 {
    margin: 0;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Category = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  gap: 2px;
  p {
    color: rgba(87, 87, 87, 1);
    white-space: nowrap;
  }
`;

export const Process = styled.div`
  padding-left: 1008px;
  p {
    margin: 0;
    color: rgba(87, 87, 87, 1);
    white-space: nowrap;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const Bubble = styled.div`
  background-color: rgba(198, 242, 228, 1);
  min-width: 174px;
  width: fit-content;
  height: 62px;
  padding: 16px 30px 16px 30px;
  gap: 10px;
  border-radius: 0px 16px 16px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-family: 'PretendardSemiBold';
  color: rgba(44, 44, 44, 1);
`;
export const Chip = styled.div<{ isSelected: boolean }>`
  min-width: 60px;
  width: fit-content;
  height: 44px;
  padding: 10px 20px 10px 20px;
  gap: 4px;
  border-radius: 60px;
  border: 1px solid
    ${(props) => (props.isSelected ? 'rgba(0, 160, 94, 1)' : 'rgba(183, 183, 183, 1)')};
  color: ${(props) => (props.isSelected ? 'rgba(0, 160, 94, 1)' : 'rgba(93, 93, 93, 1)')};
  font-size: 16px;
  font-family: 'Pretendard';
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 768px) {
    min-width: 20px;
    width: fit-content;
    height: 10px;
    font-size: 10px;
    white-space: nowrap;
  }

  @media (max-width: 480px) {
    width: 20px;
    width: fit-content;
    height: 10px;
    font-size: 10px;
    white-space: nowrap;
  }
`;
export const Chips = styled.div`
  width: 1200px;
  display: flex;
  gap: 16px;
  padding-left: 6px;
  padding-top: 50px; //임시패딩값

  @media (max-width: 768px) {
    width: 720px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    width: 300px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const DividingLine = styled.div`
  width: 1200px;
  height: 1.5px;
  background-color: rgba(206, 206, 206, 1);
  margin: 14px 0;
  margin-top: 100px; //임시 값
  margin-bottom: 40px; //임시 값

  @media (max-width: 768px) {
    width: 750px;
  }

  @media (max-width: 480px) {
    width: 460px;
  }
`;

export const Button = styled.div`
  width: 98px;
  //height: 30px;
  padding-top: 2445px;
  padding: 18px 160px 18px 160px;
  gap: 10px;
  border-radius: 16px;
  background-color: rgba(0, 160, 94, 1);
  font-size: 18px;
  color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 594px;
  height: 186px;
  gap: 30px;
  padding-top: 40px;
  padding-left: 10px;
`;

export const MinBudget = styled.input`
  width: 246px;
  height: 24px;
  padding: 10px 160px 10px 16px;
  gap: 10px;
  border-radius: 8px;
  border: 0.6px solid rgba(217, 217, 217, 1);
  font-size: 16px;
  color: rgba(217, 217, 217, 1);

  @media (max-width: 768px) {
    width: 80px;
    height: 24px;
    font-size: 12px;
    padding: 10px 60px 10px 16px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 14px;
    font-size: 12px;
    padding: 10px 60px 10px 16px;
  }
`;
export const MaxBudget = styled.input`
  width: 246px;
  height: 24px;
  padding: 10px 160px 10px 16px;
  gap: 10px;
  border-radius: 8px;
  border: 0.6px solid rgba(217, 217, 217, 1);
  font-size: 16px;
  color: rgba(217, 217, 217, 1);

  @media (max-width: 768px) {
    width: 80px;
    height: 24px;
    font-size: 12px;
    padding: 10px 60px 10px 16px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 14px;
    font-size: 12px;
    padding: 10px 60px 10px 16px;
  }
`;
export const Apply = styled.div`
  width: 28px;
  height: 24px;
  padding: 10px 20px 10px 20px;
  border-radius: 8px;
  border: 0.6px solid rgba(217, 217, 217, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(217, 217, 217, 1);
  font-size: 16px;
  white-space: nowrap;
  background-color: rgba(255, 255, 255, 1);
  cursor: pointer;
  &:hover {
    color: rgba(0, 160, 94, 1);
  }
`;

export const PostTitle = styled.input`
  width: 1194px;
  height: 64px;
  border-radius: 8px;
  border: 1px solid rgba(142, 142, 142, 1);
  padding-left: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-family: 'PretendardRegular';
  position: relative;

  @media (max-width: 768px) {
    width: 720px;
    height: 54px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 430px;
    height: 54px;
    font-size: 14px;
  }
`;

export const TitleLength = styled.div`
  color: rgba(129, 129, 129, 1);
  font-size: 14px;
  min-width: 31px;
  white-space: nowrap;
  position: absolute;
  right: 15px;
  top: 24px;
  transform: translateX(35px);

  @media (max-width: 768px) {
    right: 27px;
  }

  @media (max-width: 480px) {
    right: 27px;
  }
`;

export const ContentLength = styled.div`
  color: rgba(129, 129, 129, 1);
  font-size: 14px;
  min-width: 49px;
  white-space: nowrap;
  position: absolute;
  right: 15px;
  top: 25px;

  @media (max-width: 768px) {
    left: 680px;
  }

  @media (max-width: 480px) {
    left: 390px;
  }
`;

export const PostContent = styled.textarea`
  width: 1194px;
  min-height: 172px;
  border-radius: 8px;
  border: 1px solid rgba(142, 142, 142, 1);
  padding-left: 16px;
  padding-top: 24px;
  padding-bottom:160px;
  font-size: 16px;
  font-family: 'PretendardRegular';
  resize: none;

  @media (max-width: 768px) {
    width: 720px;
    height: 154px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 430px;
    height: 154px;
    font-size: 14px;
  }
`;

export const TypeBudget = styled.div`
  display: flex;
  gap: 10px;
  height: 44px;
  margin-bottom: 198px;
  margin-top: 18px;
  padding-left: 6px;

  @media (max-width: 768px) {
    width: 80px;
    height: 24px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 14px;
  }
`;
export const CancleX = styled.div`
  padding-top: 30px;
  padding-bottom: 12px;
  padding-left: 6px;
`;

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #f9f9f9;
`;

export const CenteredContainer = styled.div`
  width: 100%;
  max-width: 1200px; // 또는 원하는 최대 너비
  //margin: 0 auto;
  padding: 0 20px; 
  box-sizing: border-box;
  position: relative;
`;
