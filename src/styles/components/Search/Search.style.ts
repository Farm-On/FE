import styled from '@emotion/styled';

export const BannerContainer = styled.div`
  width: 100%;
  margin-top: 110px;
`;

export const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
`;

export const SearchSection = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  justify-content: center;
  padding-top: 80px;
  margin-top: -160px;
  overflow: visible;
`;

export const BackgroundBlur = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  opacity: 0.6;
  background: radial-gradient(
    100% 100% at 50% 50%,
    rgba(111, 216, 146, 0.5) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: 66px 66px 66px rgba(0, 0, 0, 0.1);
  border-radius: 9999px;
  filter: blur(66px);
  z-index: 0;
  top: -158px;
  left: 50%;
  transform: translateX(-50%);
  mix-blend-mode: difference;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 480px) {
  }
`;

export const Title = styled.h1`
  font-family: 'Pretendard';
  font-size: 44px;
  font-weight: bold;
  margin-top: 137px;
  text-align: center;
  color: #002415;
  line-height: 1.4;
  margin-bottom: 86px;

  @media (max-width: 768px) {
    font-size: 38px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

export const SearchBarWrapper = styled.div`
  position: relative;
  width: 684px;
  height: 66px;

  @media (max-width: 768px) {
    width: 600px;
    height: 66px;
  }

  @media (max-width: 480px) {
    width: 350px;
    height: 50px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  border-radius: 16px;
  margin-bottom: 50px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DropDown = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  width: 684px;
  height: 330px;
  background-color: white;
  border-radius: 20px;
  z-index: 10;
  margin-top: 13px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
`;

export const BarTitle = styled.p`
  color: 'black';
  fontsize: 14px;
  font-family: 'Pretendard';
  font-weight: '500';
  margin: 0;
`;
export const DeleteAll = styled.div`
  color: #00a05e;
  font-size: 14px;
  font-family: 'Pretendard';
  font-weight: 500;
  line-height: 21px;
  word-wrap: break-word;
  cursor: pointer;
`;

export const RecentContainer = styled.div`
  width: 620px;
  height: 160px;
  margin-top: 24px;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 20px;
`;

export const RecommendContainer = styled.div`
  width: 550px;
  height: 100px;
  margin-left: 32px;
  margin-bottom: 28px;
`;

export const StyledImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  margin-left: 24px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-family: 'PretendardMedium';
  font-size: 18px;
  color: #000000;
  background: none;
  margin: 0 24px;

  &::placeholder {
    color: #8e8e8e;
  }
`;
export const TagListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
`;

export const TagContainer = styled.div`
  padding: 6px 10px;
  border-radius: 50px;
  border: 0.7px solid #8e8e8e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TagInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TagLabel = styled.div`
  color: #5d5d5d;
  font-size: 14px;
  font-family: 'Pretendard';
  font-weight: 500;
  line-height: 21px;
  word-wrap: break-word;
`;
export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 22px;
`;

export const HistoryContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
  margin-bottom: 6px;
`;

export const HistoryInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const HistoryLabel = styled.div`
  color: black;
  font-size: 16px;
  font-family: 'Pretendard';
  font-weight: 600;
  line-height: 24px;
  word-wrap: break-word;
`;

export const HistoryIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 12px;
    height: 12px;
    position: absolute;
    border: 2px solid #8e8e8e;
  }
`;
export const AutoCompleteWrapper = styled.div`
  width: 90%;
  padding: 12px 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
`;

export const AutoCompleteItem = styled.div`
  font-size: 16px;
  font-family: 'Pretendard';
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px 0;

  &:hover {
    background-color: #f5f5f5;
  }
`;
