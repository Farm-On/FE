import styled from '@emotion/styled';
import SearchIcon from '../assets/icons/search.svg?react';

interface CSProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const CommunitySearch = ({ onChange, value }: CSProps) => {
  return (
    <ContainerWrapper style={{ paddingLeft: '7.3vw', paddingTop: '12.5vw' }}>
      <SearchContainer style={{ position: 'relative', width: '876px' }}>
        <Container
          placeholder="찾고싶은 글을 검색하세요"
          onChange={onChange}
          value={value}
          type="text"
        ></Container>
        <StyledIcon />
      </SearchContainer>
    </ContainerWrapper>
  );
};

const ContainerWrapper = styled.div`
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-top: 40px;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding-left: 10px;
    padding-top: 20px;
    width: 100%;
  }
`;
const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 876px; 

  @media (max-width: 768px) {
    max-width: 100%; 
  }
`;
const Container = styled.input`
  width: 814px;
  height: 66px;
  flex-shrink: 0;
  border-radius: 18px;
  background: #eee;
  border: none;
  padding-left: 80px;
  color: var(--gray-400, #8e8e8e);
  font-family: 'PretendardRegular';
  font-size: 18px;
  line-height: 166%; /* 29.88px */
  text-transform: uppercase;

  @media (max-width: 768px) {
    width: 500px;  //검색창크기
    height: 46px;
    font-size: 16px;
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    width: 360px;  
    height: 46px;
    font-size: 14px;
  }
`;
const StyledIcon = styled(SearchIcon)`
  width: 32px;
  height: 32px;
  position: absolute;
  left: 30px;
  top: 17px;

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    left: 20px;
    top: 14px;
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
    left: 15px;
    top: 14px;
  }
`;
