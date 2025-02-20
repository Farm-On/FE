import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axiosInstance from '@/api/axios';
import SearchIcon from '../assets/icons/search.svg?react';
import { CommuFeed } from '@/components/CommuFeed';
import { useNavigate } from 'react-router-dom';

interface CSProps {
  boardId: number; // 검색 시 필요한 boardId
}

interface ApiSearchPost {
  id: number;
  postTitle: string;
  postContent: string;
  postLike: number;
  postComment: number;
  imgUrls?: string[];
}

export const CommunitySearch = ({ boardId }: CSProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchResults, setSearchResults] = useState<ApiSearchPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // 검색 API 호출 함수
  const fetchSearchResults = async () => {
    if (!searchValue.trim()) {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.get('/posts/search', {
        params: {
          검색어: searchValue,
          boardId: boardId,
          page: 0,
          size: 10,
          sort: 'DESC',
        },
      });

      console.log('검색 결과:', response.data);
      setSearchResults(response.data.result.content || []);
    } catch (err) {
      console.error('검색 API 오류:', err);
      setError('검색 결과를 불러오는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  // 입력값 변경될 때 검색 실행 (디바운스 적용)
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchSearchResults();
    }, 500); // 0.5초 딜레이 후 API 호출

    return () => clearTimeout(delayDebounceFn); // 이전 요청 취소
  }, [searchValue]);

  // 게시글 클릭 시 FreePage로 이동
  const handlePostClick = (postId: number) => {
    navigate(`/free/${boardId}/${postId}`);
  };

  const decodeImageUrl = (url: string): string => {
    try {
      let decodedUrl = decodeURIComponent(url);
      if (decodedUrl.startsWith('https://umcfarmon.s3.ap-northeast-2.amazonaws.com/https://')) {
        decodedUrl = decodedUrl.replace('https://umcfarmon.s3.ap-northeast-2.amazonaws.com/', '');
      }
      return decodedUrl;
    } catch (e) {
      console.error('이미지 URL 디코딩 실패:', e);
      return url;
    }
  };

  return (
    <ContainerWrapper>
      <SearchContainer>
        <Container
          placeholder="찾고싶은 글을 검색하세요"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          type="text"
        />
        <StyledIcon />
      </SearchContainer>

      {/* 검색 결과 출력 */}
      {loading && <p>검색 중...</p>}
      {error && <p>{error}</p>}
      {!loading && searchResults.length === 0 && searchValue && <p>검색 결과가 없습니다.</p>}

      {/* 검색 결과만 CommuFeed로 렌더링 */}
      {!loading && searchResults.length > 0 && (
        <SearchResultsContainer>
          {searchResults.map((post) => (
            <CommuFeed
              key={post.id}
              headline={post.postTitle}
              content={post.postContent}
              category="검색결과"
              product=""
              productDetail=""
              imgSrc={post.imgUrls?.length ? decodeImageUrl(post.imgUrls[0]) : ''}
              onClick={() => handlePostClick(post.id)} // FreePage로 이동
            />
          ))}
        </SearchResultsContainer>
      )}
    </ContainerWrapper>
  );
};

const ContainerWrapper = styled.div`
  padding-left: 7.3vw;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 876px;
`;

const Container = styled.input`
  width: 814px;
  height: 66px;
  border-radius: 18px;
  background: #eee;
  border: none;
  padding-left: 80px;
  color: #8e8e8e;
  font-size: 18px;
  line-height: 166%;
  text-transform: uppercase;
`;

const StyledIcon = styled(SearchIcon)`
  width: 32px;
  height: 32px;
  position: absolute;
  left: 30px;
  top: 17px;
`;

const SearchResultsContainer = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;
