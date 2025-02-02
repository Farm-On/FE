import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  min-height: 100vh;
  position: relative;
`;

export const Main = styled.div`
  width: 1030px;
  height: 740px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 32px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    width: 600px;
    height: 600px;
    margin-top: 120px;
    margin-bottom: 24px;
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 700px;
    margin-top: 100px;
    margin-bottom: 16px;
    padding: 0 16px;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-family: 'PretendardSemiBold';
  font-weight: 600;
  color: black;
  margin-top: 88px;
  margin-bottom: 62px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-top: 60px;
    margin-bottom: 50px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-top: 40px;
    margin-bottom: 30px;
  }
`;

// 시/도와 시/구/군 목록을 감싸는 Wrapper
export const LocationListWrapper = styled.div`
  display: flex;
  width: 804px;
  height: 381px;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 600px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 280px;
    height: 500px;
    gap: 20px;
    flex-direction: column;
  }
`;

// 시/도 목록 컨테이너
export const SidoListContainer = styled.div`
  width: 250px;
  border: 1px solid #aeaeae;
  margin-right: 8px;

  /* 스크롤 설정 */
  overflow-y: auto;
  overflow-x: hidden;

  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 6px; /* 스크롤바 너비 */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #c2c2c2; /* 스크롤 핸들 색상 */
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    width: 200px;
    margin-right: 8px;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 8px; /* 시/구/군 컨테이너와 간격 */
  }
`;

// 시/구/군 목록 컨테이너
export const SubLocationListContainer = styled.div`
  width: 552px;
  border: 1px solid #aeaeae;

  /* 스크롤 설정 */
  overflow-y: auto;
  overflow-x: hidden;

  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #c2c2c2;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    width: 380px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

// 시/도 아이템
export const SidoItem = styled.div<{ selected: boolean }>`
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  font-size: 18px;
  cursor: pointer;
  color: ${(props) => (props.selected ? 'black' : '#8E8E8E')};
  background-color: ${(props) => (props.selected ? '#E8ECEA' : 'white')};
  border-bottom: 1px solid #d1d1d1;

  &:hover {
    background-color: #f2f2f2;
  }

  @media (max-width: 768px) {
    height: 60px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    height: 50px;
    font-size: 14px;
  }
`;

// 시/구/군 아이템
export const SubLocationItem = styled.div<{ selected: boolean }>`
  height: 54px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  font-size: 16px;
  cursor: pointer;
  color: ${(props) => (props.selected ? '#00A05E' : '#2F2F2F')};
  border-bottom: 1px solid #d1d1d1;
  background-color: ${(props) => (props.selected ? '#ecf9f3' : 'white')};

  &:hover {
    background-color: #f7f7f7;
  }

  @media (max-width: 768px) {
    height: 46px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    height: 40px;
    font-size: 13px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1030px;
  margin-bottom: 142px;

  @media (max-width: 768px) {
    width: 650px;
    margin-bottom: 100px;
  }

  @media (max-width: 480px) {
    width: 340px;
    margin-bottom: 40px;
  }
`;

export const PrevButton = styled.button`
  width: 138px;
  height: 54px;
  border-radius: 10px;
  border: none;
  background: #8e8e8e;
  color: #ffffff;
  font-size: 20px;
  font-family: 'PretendardSemiBold';
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 120px;
    height: 46px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 42px;
    font-size: 16px;
  }
`;

export const NextButton = styled.button<{ disabled: boolean }>`
  width: 138px;
  height: 54px;
  border-radius: 10px;
  border: none;
  background: ${(props) => (props.disabled ? '#d9d9d9' : '#00A05E')};
  color: white;
  font-size: 20px;
  font-family: 'PretendardSemiBold';
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => !props.disabled && '#008c4a'};
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 46px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 42px;
    font-size: 16px;
  }
`;

export const TagListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 804px;
  margin-bottom: 20px;
  align-self: flex-start;
  margin-left: 112px;

  @media (max-width: 768px) {
    max-width: 600px;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    max-width: 280px;
    margin-left: 10px;
  }
`;

export const TagContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 18px;
  background: white;
  border: 1px #00a05e solid;
  border-radius: 30px;

  @media (max-width: 768px) {
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
  }
`;

export const TagInner = styled.div`
  align-self: stretch;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const TagLabel = styled.div`
  text-align: center;
  color: #00a05e;
  font-size: 16px;
  font-family: 'Pretendard';
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const TagCloseIconContainer = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
    margin-bottom: 6px;
  }
`;
