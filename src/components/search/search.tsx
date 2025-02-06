import * as S from '@/styles/components/Search/Search.style';

import SearchImg from '@/assets/images/search.png';
import { Category } from './Category';
import { Banner } from './Banner';
import { useState } from 'react';
import XIcon from '@/assets/icons/greyX.svg?react';

export const Search = () => {
  const [isFocused, setIsFocused] = useState(false);

  const recentSearch = ['무 농약 병충해 관리', '고추 수확 시기'];

  // 추천 검색어 카테고리 리스트
  const recommendSearch = [
    '벼',
    '사과',
    '쌀',
    '감귤',
    '딸기',
    '고구마',
    '엽채류',
    '향신료',
    '종지, 묘목',
    '인삼',
  ];

  return (
    <S.Container>
      <S.SearchSection>
        <S.BackgroundBlur />
        <S.Title>
          지금 당신에게 <br />
          필요한 컨설팅을 찾아보세요.
        </S.Title>
        <S.SearchBarWrapper>
          <S.SearchBar onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
            <S.StyledImage src={SearchImg} alt="Search" />
            <S.Input placeholder="어떤 서비스가 필요하세요?" />
          </S.SearchBar>
          {isFocused && (
            <S.DropDown>
              <S.RecentContainer>
                <S.TitleWrapper>
                  <S.BarTitle>최근 검색어</S.BarTitle>
                  <S.DeleteAll>전체 삭제</S.DeleteAll>
                </S.TitleWrapper>
                <S.HistoryWrapper>
                  {recentSearch.map((item) => (
                    <S.HistoryContainer key={item}>
                      <S.HistoryInner>
                        <S.HistoryLabel>{item}</S.HistoryLabel>
                        <XIcon />
                      </S.HistoryInner>
                    </S.HistoryContainer>
                  ))}
                </S.HistoryWrapper>
              </S.RecentContainer>
              <S.RecommendContainer>
                <S.BarTitle>추천 검색어</S.BarTitle>
                <S.TagListWrapper>
                  {recommendSearch.map((item) => (
                    <S.TagContainer key={item}>
                      <S.TagInner>
                        <S.TagLabel>{item}</S.TagLabel>
                      </S.TagInner>
                    </S.TagContainer>
                  ))}
                </S.TagListWrapper>
              </S.RecommendContainer>
            </S.DropDown>
          )}
        </S.SearchBarWrapper>
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
