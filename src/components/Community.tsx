import { useState, useEffect } from 'react';
import axios from 'axios';
import * as C from '@/styles/components/MainCommunityStyle.style';
import { QnAFeed } from './QnAfeed';
import { Feed } from './Feed';

interface Post {
  postId: number;
  postType: 'QNA' | 'FREE' | 'EXPERT_COLUMN' | 'POPULAR' | 'ALL';
  postTitle: string;
  postContent: string;
  likeCount: number;
  commentCount: number;
}
interface Category {
  id: string;
  title: string;
  apiValue: string;
}

const categories: Category[] = [
  { id: '1', title: '인기', apiValue: 'POPULAR' },
  { id: '2', title: '전체', apiValue: 'ALL' },
  { id: '3', title: 'Q&A', apiValue: 'QNA' },
  { id: '4', title: '전문가 칼럼', apiValue: 'EXPERT_COLUMN' },
];

export const Community = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('POPULAR'); // 기본값 'POPULAR'
  const [posts, setPosts] = useState<Post[]>([]); // API에서 가져온 게시글 저장
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  //카테고리 변경 시 API 호출
  const fetchCommunityPosts = async (category: string) => {
    setLoading(true);
    setError(null);
    console.log(`API 요청: /api/home/community?category=${category}`);

    try {
      const response = await axios.get(`/api/home/community?category=${category}`);
      console.log('API 응답 데이터:', response.data.result.postList);
      setPosts(response.data.result.postList);
    } catch (err) {
      console.error('API 호출 실패:', err);
      setError('데이터를 불러오는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  // 카테고리 변경 시 데이터 가져오기
  useEffect(() => {
    fetchCommunityPosts(selectedCategory);
  }, [selectedCategory]);

  // 카테고리 선택 핸들러
  const handleCategoryClick = (category: string) => {
    console.log(`선택한 카테고리: ${category}`);
    setSelectedCategory(category);
  };

  return (
    <C.CommunityContainer>
      <C.ContentWrapper>
        {/* 카테고리 선택 */}
        <C.CategoryWrapper>
          {categories.map((category) => (
            <div key={category.id}>
              <C.Category
                isSelected={selectedCategory === category.apiValue}
                onClick={() => handleCategoryClick(category.apiValue)}
              >
                <p>{category.title}</p>
              </C.Category>
            </div>
          ))}
        </C.CategoryWrapper>

        {/* 피드 데이터 표시 */}
        <C.FeedWrapper>
          {loading && <p>데이터 불러오는 중...</p>}
          {error && <p> {error}</p>}
          {!loading && !error && posts.length === 0 && <p> 게시글이 없습니다.</p>}

          {!loading &&
            !error &&
            posts.map((post) =>
              post.postType === 'QNA' ? (
                <QnAFeed
                  key={post.postId}
                  topic={post.postType}
                  headline={post.postTitle}
                  content={post.postContent}
                />
              ) : (
                <Feed
                  key={post.postId}
                  topic={post.postType}
                  headline={post.postTitle}
                  content={post.postContent}
                />
              )
            )}
        </C.FeedWrapper>
      </C.ContentWrapper>
    </C.CommunityContainer>
  );
};
