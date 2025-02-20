import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '@/api/axios';
import * as CP from '../../styles/pages/Community.Style';
import { CommunitySearch } from '@/components/CommunitySearch';
import DownIcon from '../../assets/icons/chevron-down.svg?react';
import styled from '@emotion/styled';
import { CommuPageBtn } from '@/components/CommuPageBtn';
import { CommunityModal } from '@/components/CommunityModal';
import { CommuFeed } from '@/components/CommuFeed';

interface Category {
  id: string;
  title: string;
  apiValue: string;
}

interface Post {
  id: number;
  headline: string;
  content: string;
  category: string;
  product: string;
  productDetail?: string;
  imgSrc?: string;
  boardId: number;
}

interface ApiPost {
  id: number;
  postTitle: string;
  postContent: string;
  category: string;
  postlike: number;
  postcomment: number;
  imgUrls?: string[];
}

const Categories: Category[] = [
  { id: '4', title: '인기글', apiValue: 'popular' },
  { id: '6', title: '전체', apiValue: 'all' },
  { id: '5', title: '자유게시판', apiValue: 'free' },
  { id: '1', title: 'Q&A', apiValue: 'qna' },
  { id: '3', title: '전문가 칼럼', apiValue: 'expertCol' },
];

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('popular');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handlePostClick = (postId: number, boardId: number) => {
    if (selectedCategory === 'qna') {
      navigate(`/qna/${postId}`);
    } else {
      navigate(`/${selectedCategory}/${boardId}/${postId}`);
    }
  };

  const decodeImageUrl = (url: string): string => {
    try {
      let decodedUrl = decodeURIComponent(url);
      if (decodedUrl.includes('https://umcfarmon.s3.ap-northeast-2.amazonaws.com/https://')) {
        decodedUrl = decodedUrl.replace('https://umcfarmon.s3.ap-northeast-2.amazonaws.com/', '');
      }
      return decodedUrl;
    } catch (e) {
      console.error('이미지 URL 디코딩 실패:', e);
      return url;
    }
  };

  const fetchCommunityPosts = async (boardId: number, pageNum: number, apiValue: string) => {
    setLoading(true);
    setError(null);

    const requestUrl = `/posts/${apiValue}/list/${boardId}`;
    console.log(`API 요청: ${requestUrl}?pageNum=${pageNum}&size=10&sort=DESC`);

    try {
      const response = await axiosInstance.get<{ result: { content: ApiPost[] } }>(requestUrl, {
        params: { pageNum, size: 10, sort: 'DESC' },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          Accept: '*/*',
        },
      });

      console.log('API 응답 데이터:', response.data);
      const fetchedPosts = response.data?.result?.content || [];

      const formattedPosts: Post[] = fetchedPosts.map((post: ApiPost) => ({
        id: post.id,
        headline: post.postTitle,
        content: post.postContent,
        category: post.category,
        product: '공통',
        productDetail: '',
        boardId: Number(boardId),
        imgSrc: post.imgUrls?.length ? decodeImageUrl(post.imgUrls[0]) : '',
      }));

      setPosts(formattedPosts);
    } catch (err) {
      console.error('API 호출 실패:', err);
      setError('데이터를 불러오는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const selectedCategoryData = Categories.find(
      (category) => category.apiValue === selectedCategory
    );
    if (selectedCategoryData) {
      fetchCommunityPosts(
        Number(selectedCategoryData.id),
        currentPage,
        selectedCategoryData.apiValue
      );
    }
  }, [selectedCategory, currentPage]);

  const handleCategoryClick = (id: string) => {
    const selectedApiValue =
      Categories.find((category) => category.id === id)?.apiValue || 'popular';
    if (selectedApiValue !== selectedCategory) {
      setSelectedCategory(selectedApiValue);
      setCurrentPage(1);
    }
  };

  return (
    <CP.Container style={{ display: 'flex' }}>
      {isModalOpen && (
        <>
          <Modal>
            <CommunityModal closeModal={() => setIsModalOpen(false)} />
          </Modal>
          <Overlay onClick={() => setIsModalOpen(false)} />
        </>
      )}

      <CP.LeftCommunity className="left">
        <CP.Title>커뮤니티</CP.Title>
        <CP.Category>
          {Categories.map((item) => (
            <CP.CategoryItem key={item.id}>
              <CP.Item
                onClick={() => handleCategoryClick(item.id)}
                isSelected={selectedCategory === item.apiValue}
              >
                <p>{item.title}</p>
              </CP.Item>
            </CP.CategoryItem>
          ))}
        </CP.Category>
      </CP.LeftCommunity>

      <CP.RightCommunity className="right">
        <div style={{ position: 'relative' }}>
          <CommunitySearch
            boardId={Number(Categories.find((c) => c.apiValue === selectedCategory)?.id || 4)}
          />
          <CP.FilterChip onClick={() => setIsModalOpen(true)}>
            <p>분야</p>
            <StyledDownIcon />
          </CP.FilterChip>
        </div>

        <div style={{ paddingLeft: '8vw', paddingTop: '30px' }}>
          {loading && <p>데이터 불러오는 중...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && posts.length === 0 && <p>게시글이 없습니다.</p>}

          {posts.map((post) => (
            <CommuFeed
              key={post.id}
              headline={post.headline}
              content={post.content}
              category={post.category}
              product={post.product}
              productDetail={post.productDetail}
              imgSrc={post.imgSrc || ''}
              onClick={() => handlePostClick(post.id, post.boardId)}
            />
          ))}
        </div>

        <div style={{ paddingLeft: '20.94vw', paddingBottom: '12.14vw' }}>
          <CommuPageBtn
            currentPage={currentPage}
            totalPages={24}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </CP.RightCommunity>
    </CP.Container>
  );
}

const StyledDownIcon = styled(DownIcon)`
  width: 16px;
  height: 16px;
`;

const Modal = styled.div`
  position: absolute;
  z-index: 100;
  top: 12.92vw;
  left: 35.28vw;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 1000vh;
  opacity: 0.5;
  background: #000;
  z-index: 50;
`;
