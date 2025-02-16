import * as S from '@/styles/components/Search/Search.style';
import SearchImg from '@/assets/images/search.png';
import { Category } from './Category';
import { Banner } from './Banner';
import { useEffect, useRef, useState } from 'react';
import XIcon from '@/assets/icons/greyX.svg?react';
import Background from '@/assets/images/blur.png';
import HighlightedText from './HighlightedText';
import {
  useSearch,
  useRecentSearch,
  useDeleteSearch,
  useDeleteAllSearch,
  useSearchResults,
  useRecommendSearch,
} from '@/hooks/useSearch';
import useAuthStore from '@/store/useAuthStore';

export const Search = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchWrapperRef = useRef<HTMLDivElement>(null); //검색창 + 드롭다운을 감싸는 ref

  const { mutate: saveSearch } = useSearch();
  const { mutate: deleteSearch } = useDeleteSearch();
  const { mutate: deleteAllSearch } = useDeleteAllSearch();
  const { userInfo, isLoggedIn } = useAuthStore();
  const { data: recentSearchData, refetch } = useRecentSearch(userInfo?.id ?? 0);
  const { data: searchResults } = useSearchResults(userInfo?.id ?? 0, searchInput);

  //최신 검색어 리스트 (중복 제거 & 최대 4개까지만 표시)
  const recentSearch: string[] = Array.from(
    new Set(recentSearchData?.result?.recentSearchList || [])
  ).slice(0, 4);

  console.log('현재 recentSearchData:', recentSearchData);

  useEffect(() => {
    if (userInfo?.id) {
      refetch();
    }
  }, [userInfo?.id]);

  //DropDown 바깥 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  //검색어 개별 삭제 함수
  const handleDeleteSearch = (name: string) => {
    if (!userInfo?.id) return;
    console.log(`검색어 삭제 요청: ${name}`);

    deleteSearch(
      { userId: userInfo.id, name },
      {
        onSuccess: () => {
          console.log(`검색어 삭제 완료: ${name}`);
          refetch(); //삭제 후 검색어 리스트 갱신
        },
      }
    );
  };

  //전체 검색어 삭제 함수
  const handleDeleteAllSearch = () => {
    if (!userInfo?.id) return;
    console.log('전체 검색어 삭제 요청');

    deleteAllSearch(
      { userId: userInfo.id },
      {
        onSuccess: () => {
          console.log('전체 검색어 삭제 완료');
          refetch(); // 삭제 후 검색어 리스트 갱신
        },
      }
    );
  };

  const { data: recommendSearchData } = useRecommendSearch(userInfo?.id ?? 0);

  //추천 검색어 리스트
  const recommendSearch: string[] = recommendSearchData?.result?.recommendSearchList || [];

  const handleSearchSubmit = (query?: string) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const searchQuery = query || searchInput;
    if (!searchQuery.trim()) {
      setIsSubmitting(false);
      return;
    }

    if (!isLoggedIn || !userInfo) {
      alert('로그인이 필요합니다.');
      setIsSubmitting(false);
      return;
    }

    if (!userInfo.id) {
      console.error('사용자 ID 없음:', userInfo);
      alert('사용자 정보를 불러올 수 없습니다.');
      setIsSubmitting(false);
      return;
    }

    const requestData = { userId: userInfo.id, name: searchQuery };

    console.log('POST 요청 전송 (검색어 저장):', requestData);

    saveSearch(requestData, {
      onSuccess: () => {
        console.log('검색어 저장 성공!');
        setSearchInput('');
        setIsSubmitting(false);

        setTimeout(() => {
          console.log('GET 요청 실행 (검색어 업데이트)');
          refetch();
        }, 500);
      },
      onError: (error) => {
        console.error('검색어 저장 실패:', error);
        setIsSubmitting(false);
      },
    });
  };

  return (
    <S.Container backgroundImage={Background}>
      <S.SearchSection>
        <S.Title>
          지금 당신에게 <br />
          필요한 컨설팅을 찾아보세요.
        </S.Title>
        <S.SearchBarWrapper ref={searchWrapperRef}>
          {' '}
          <S.SearchBar
            onFocus={() => setIsFocused(true)}
            onClick={(e) => e.stopPropagation()} // 내부 클릭 시 닫히지 않도록 방지
          >
            <S.StyledImage src={SearchImg} alt="Search" />
            <S.Input
              placeholder="어떤 서비스가 필요하세요?"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSearchSubmit();
                }
              }}
            />
          </S.SearchBar>
          {isFocused && (
            <S.DropDown onClick={(e) => e.stopPropagation()}>
              {/*검색 자동완성 목록 */}
              {searchInput && (searchResults?.result?.searchList ?? []).length > 0 ? (
                <S.AutoCompleteWrapper>
                  {searchResults?.result.searchList.map((item, index) => (
                    <S.AutoCompleteItem
                      key={`${item}-${index}`}
                      onClick={() => handleSearchSubmit(item)}
                    >
                      <HighlightedText inputValue={searchInput} text={item} />
                    </S.AutoCompleteItem>
                  ))}
                </S.AutoCompleteWrapper>
              ) : (
                <>
                  <S.RecentContainer>
                    <S.TitleWrapper>
                      <S.BarTitle>최근 검색어</S.BarTitle>
                      <S.DeleteAll onClick={handleDeleteAllSearch}>전체 삭제</S.DeleteAll>
                    </S.TitleWrapper>
                    <S.HistoryWrapper>
                      {recentSearch.map((item, index) => (
                        <S.HistoryContainer key={`${item}-${index}`}>
                          <S.HistoryInner>
                            <S.HistoryLabel onClick={() => handleSearchSubmit(item)}>
                              {item}
                            </S.HistoryLabel>
                            <XIcon onClick={() => handleDeleteSearch(item)} />
                          </S.HistoryInner>
                        </S.HistoryContainer>
                      ))}
                    </S.HistoryWrapper>
                  </S.RecentContainer>
                  <S.RecommendContainer>
                    <S.BarTitle>추천 검색어</S.BarTitle>
                    <S.TagListWrapper>
                      {recommendSearch.map((item, index) => (
                        <S.TagContainer
                          key={`${item}-${index}`}
                          onClick={() => handleSearchSubmit(item)}
                        >
                          <S.TagInner>
                            <S.TagLabel>{item}</S.TagLabel>
                          </S.TagInner>
                        </S.TagContainer>
                      ))}
                    </S.TagListWrapper>
                  </S.RecommendContainer>
                </>
              )}
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
