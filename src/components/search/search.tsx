import * as S from '@/styles/components/Search/Search.style';

import SearchImg from '@/assets/images/search.png';
import { Category } from './Category';
import { Banner } from './Banner';

export const Search = () => {
  return (
    <S.Container>
      <S.SearchSection>
        <S.BackgroundBlur />
        <S.Title1>지금 당신에게</S.Title1>
        <S.Title2>필요한 컨설팅을 찾아보세요.</S.Title2>
        <S.SearchBar>
          <S.StyledImage src={SearchImg} alt="Search" />
          <S.Input placeholder="인삼 재배법이 궁금하다면?" />
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
