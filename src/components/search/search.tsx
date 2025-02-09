import * as S from '@/styles/components/Search/Search.style';

import SearchImg from '@/assets/images/search.png';
import { Category } from './Category';
import { Banner } from './Banner';
import { useState } from 'react';
import XIcon from '@/assets/icons/greyX.svg?react';
import { useSearch } from '@/hooks/useSearch';
import useAuthStore from '@/store/useAuthStore';

export const Search = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [recentSearch, setRecentSearch] = useState(['무 농약 병충해 관리', '고추 수확 시기']);
  const { mutate: saveSearch } = useSearch();
  const { userInfo, isLoggedIn } = useAuthStore(); // 로그인한 사용자 정보 가져오기

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

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = () => {
    if (!searchInput.trim()) return;

    if (!isLoggedIn || !userInfo) {
      alert('로그인이 필요합니다.');
      return;
    }

    if (!userInfo.id) {
      console.error('사용자 ID가 없습니다. userInfo:', userInfo);
      alert('사용자 정보를 불러올 수 없습니다.');
      return;
    }

    const requestData = { userId: userInfo.id, name: searchInput };

    saveSearch(requestData, {
      onSuccess: () => {
        setRecentSearch((prev) => [searchInput, ...prev.filter((s) => s !== searchInput)]); // 중복 제거 후 추가
        setSearchInput('');
      },
    });
  };

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
            <S.Input
              placeholder="어떤 서비스가 필요하세요?"
              value={searchInput}
              onChange={handleSearchInput}
              onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()}
            />
          </S.SearchBar>
          {isFocused && (
            <S.DropDown>
              <S.RecentContainer>
                <S.TitleWrapper>
                  <S.BarTitle>최근 검색어</S.BarTitle>
                  <S.DeleteAll onClick={() => setRecentSearch([])}>전체 삭제</S.DeleteAll>
                </S.TitleWrapper>
                <S.HistoryWrapper>
                  {recentSearch.map((item) => (
                    <S.HistoryContainer key={item}>
                      <S.HistoryInner>
                        <S.HistoryLabel>{item}</S.HistoryLabel>
                        <XIcon
                          onClick={() => setRecentSearch(recentSearch.filter((s) => s !== item))}
                        />
                      </S.HistoryInner>
                    </S.HistoryContainer>
                  ))}
                </S.HistoryWrapper>
              </S.RecentContainer>
              <S.RecommendContainer>
                <S.BarTitle>추천 검색어</S.BarTitle>
                <S.TagListWrapper>
                  {recommendSearch.map((item) => (
                    <S.TagContainer key={item} onClick={() => setSearchInput(item)}>
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
