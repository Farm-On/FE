import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

interface ModalProps{
    onClick:()=>void;
}

export const RequestModal = ({onClick}:ModalProps) => {
  const navigate = useNavigate();
  return (
    <ModalOverlay>
      <Container>
        <Top>
          <Left>한 번 신청한 견적은</Left>
          <Right>수정이 불가능합니다.</Right>
        </Top>
        <CheckP>신청하시겠습니까?</CheckP>
        <ButtonWrapper>
          <BackBtn onClick={onClick}>돌아가기</BackBtn>
          <ApplyBtn onClick={() => navigate('/MyEstimate/allEstimates')}>신청하기</ApplyBtn>
        </ButtonWrapper>
      </Container>
    </ModalOverlay>
  );
};

const BackBtn = styled.button`
  width: 197px;
  height: 61px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 0.763px solid var(--gray-400, #8e8e8e);
  color: rgba(93, 93, 93, 1);
  background: rgba(255, 255, 255, 1);
  cursor: pointer;
  font-size: 22px;
  font-weight: 500;
  font-family: Pretendard;
  white-space: nowrap;

  &:hover {
    background: #8e8e8e;
    color:  rgba(255, 255, 255, 1);
  }

  @media (max-width: 768px) {
    width: 157px;
    height: 61px;
  }

  @media (max-width: 480px) {
    width: 127px;
    height: 41px;
    font-size: 15px;
  }
`;

const ApplyBtn = styled.button`
  width: 197px;
  height: 61px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: none;
  background: #00a05e;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  font-size: 22px;
  font-weight: 500;
  font-family: Pretendard;
  white-space: nowrap;

  @media (max-width: 768px) {
    width: 157px;
    height: 61px;
  }

  @media (max-width: 480px) {
    width: 127px;
    height: 41px;
    font-size: 15px;
  }
`;

const CheckP = styled.p`
  color: #000;
  text-align: center;
  font-family: 'PretendardMedium';
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const Container = styled.div`
  width: 486px;
  height: 267px;
  border-radius: 15.257px;
  background: #fff;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 400px;
    height: 240px;
  }

  @media (max-width: 480px) {
    width: 320px;
    height: 220px;
    margin: 0 20px;
  }
`;

const Left = styled.p`
  color: #000;
  text-align: center;
  font-family: 'PretendardMedium';
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Right = styled.p`
  color: var(--Main, #00a05e);
  font-family: 'PretendardMedium';
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  p {
    margin: 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 14px;
  padding-top: 43px;

  @media (max-width: 480px) {
    padding-top: 30px;
  }
`;
