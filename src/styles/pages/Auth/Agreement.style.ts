import styled from '@emotion/styled';

// 전체 페이지 컨테이너
export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  position: relative;
`;

// 로고를 감싸는 컨테이너
export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 0;

  @media (max-width: 767px) {
    padding: 30px 0;
  }
`;

// 로고 이미지
export const Logo = styled.img`
  width: 146.33px;
  height: 30.29px;

  @media (max-width: 767px) {
    width: 120px;
    height: auto;
  }
`;

// 메인 콘텐츠 영역
export const MainContent = styled.div`
  flex: 1;
  padding: 0 0 400px; // Footer와의 간격 확보
  width: 100%;

  @media (max-width: 1199px) {
    padding: 0 0 400px;
  }

  @media (max-width: 767px) {
    padding: 0 0 350px;
  }
`;

// 실제 컨텐츠를 감싸는 흰색 박스
export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 1200px;
  background: #ffffff;
  border: 0.7px solid #c2c2c2;
  border-radius: 10px;
  margin: 0 auto;
  padding: 40px;
  position: relative;

  @media (max-width: 1199px) {
    width: 90%;
    padding: 30px;
  }

  @media (max-width: 767px) {
    width: 95%;
    padding: 20px;
  }
`;

// 페이지 제목
export const Title = styled.h1`
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.01em;
  color: #000000;
  margin-bottom: 40px;

  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 30px;
  }
`;

// 콘텐츠 영역
export const Content = styled.div`
  width: 100%;
`;

// 체크박스와 라벨을 감싸는 컨테이너
export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 0;

  @media (max-width: 767px) {
    padding: 10px 0;
  }
`;

// 체크박스 입력
export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  border: 1px solid #b3b3b3;
  border-radius: 4px;
  cursor: pointer;
  margin: 0;

  @media (max-width: 767px) {
    width: 18px;
    height: 18px;
  }
`;

// 체크박스 라벨
export const Label = styled.label`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #222222;

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

// 구분선
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #bcbcbc;
  margin: 15px 0;
`;

// 약관 내용을 보여주는 박스
export const TermsBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 150px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 20px;
  font-family: 'Pretendard';
  font-size: 14px;
  line-height: 1.8;
  color: #8f8f8f;
  overflow-y: scroll;
  margin: 10px 0 20px;
  background: #ffffff;
  white-space: pre-line;

  // 스크롤바 스타일링
  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-thumb {
    background: #b9b9b9;
    border-radius: 0;
  }

  &::-webkit-scrollbar-track {
    background: #e6e6e6;
  }

  @media (max-width: 767px) {
    height: 120px;
    padding: 15px;
    font-size: 13px;
    margin: 8px 0 16px;
  }
`;

// 다음으로 버튼을 감싸는 컨테이너
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  @media (max-width: 767px) {
    margin-top: 30px;
  }
`;

// 다음으로 버튼
export const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 64px;
  background: #01a05e;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;

  // 비활성화 상태 스타일
  &:disabled {
    background: #01a05e;
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 56px;
    font-size: 18px;
    line-height: 21px;
  }
`;

// 푸터를 감싸는 컨테이너
export const FooterWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  border-top: 1px solid #e5e5e5;
  position: absolute;
  bottom: 0;
  left: 0;
`;
