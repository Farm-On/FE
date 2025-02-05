import * as S from '@/styles/components/Search/Search.style';

import SearchImg from '@/assets/images/search.png';
import { Category } from './Category';
import { Banner } from './Banner';

export const Search = () => {
  return (
    <S.Container>
      <S.SearchSection>
        <S.BackgroundBlur />
        <S.Title>
          지금 당신에게 <br />
          필요한 컨설팅을 찾아보세요.
        </S.Title>
        <S.SearchBar>
          <S.StyledImage src={SearchImg} alt="Search" />
          <S.Input placeholder="어떤 서비스가 필요하세요?" />
        </S.SearchBar>
        <S.CategoryContainer>
          <Category />
        </S.CategoryContainer>
      </S.SearchSection>
      <S.BannerContainer>
        <Banner />
      </S.BannerContainer>
    </S.Container>
  );
};
