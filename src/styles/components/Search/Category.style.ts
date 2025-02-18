import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  margin-top: 3.75rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 768px) {
    margin-left: 30px;
  }

  @media (max-width: 480px) {
    margin-right: 30px;
    justify-content: space-between;
    flex-direction: row;
  }
`;
export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 3.125rem;

  @media (max-width: 768px) {
    margin-right: 2.3rem;
  }

  @media (max-width: 480px) {
    width: 22%; // 3개씩 배치
    max-width: 100px;
    margin-right: 0;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  height: 70px;
  width: 70px;
  background-color: #f5f5f5;
  border-radius: 4.658vw 0 4.658vw 4.658vw;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
  }

  @media (max-width: 480px) {
    height: 48px;
    width: 48px;
  }
`;

export const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
  }

  @media (max-width: 480px) {
    height: 30px;
    width: 30px;
  }
`;

export const StyledTitle = styled.p`
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;
