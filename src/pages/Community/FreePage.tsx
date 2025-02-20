import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '@/api/axios';
import * as S from '@/styles/pages/Community/QnA.style';
import writerImg from '@/assets/icons/people.svg';
import LikeIcon from '@/assets/icons/thumbs-up.svg?react';
import ShareIcon from '@/assets/icons/share.svg?react';
import BlackMoreIcon from '@/assets/icons/black-more.svg?react';

interface Answer {
  id: number;
  content: string;
  author: string;
  role: string;
  createdAt: string;
}

interface Comment {
  id: number;
  content: string;
  authorName: string;
  parentId: number | null;
  groupId: number;
  createdAt: string;
}

interface PostDetail {
  postId: number;
  postTitle: string;
  subTitle: string | null;
  postContent: string;
  postLike: number;
  postComment: number;
  createdAt: string;
  subCategory: string | null;
  imageUrls: string[];
  answers: Answer[];
  comments: Comment[];
}

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

export const FreePage = () => {
  const { apiValue, boardId, postId } = useParams();
  const [post, setPost] = useState<PostDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPostDetail = async () => {
      if (!boardId || !apiValue || !postId) {
        setError('잘못된 접근입니다.');
        setLoading(false);
        return;
      }

      try {
        const response = await axiosInstance.get(`/posts/${apiValue}/list/${postId}/detail`, {
          params: { boardId: Number(boardId) },
        });

        console.log('상세 데이터:', response.data);

        const fetchedPost = response.data?.result;
        setPost({
          postId: fetchedPost.postId,
          postTitle: fetchedPost.postTitle,
          subTitle: fetchedPost.subTitle ?? null,
          postContent: fetchedPost.postContent,
          postLike: fetchedPost.postLike,
          postComment: fetchedPost.postComment,
          createdAt: fetchedPost.createdAt,
          subCategory: fetchedPost.subCategory ?? null,
          imageUrls: fetchedPost.imageUrls ? fetchedPost.imageUrls.map(decodeImageUrl) : [],
          answers: fetchedPost.answers ?? [],
          comments: fetchedPost.comments ?? [],
        });
      } catch (err) {
        console.error('데이터 불러오기 실패:', err);
        setError('게시글을 불러오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchPostDetail();
  }, [apiValue, boardId, postId]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return <p>게시글을 찾을 수 없습니다.</p>;

  return (
    <S.Container>
      <S.QuestionSection>
        <S.QuestionTitle>{post.postTitle}</S.QuestionTitle>
        <S.Category>{post.subCategory}</S.Category>
        <S.QuestionHeader>
          <S.AuthorInfo>
            <S.WriterImage src={writerImg} alt="작성자 이미지" />
            <div>
              <S.WriterName>익명</S.WriterName>
              <S.QuestionTime>{post.createdAt}</S.QuestionTime>
            </div>
          </S.AuthorInfo>
          <div>
            <ShareIcon />
            <BlackMoreIcon />
          </div>
        </S.QuestionHeader>
        <S.QuestionText>{post.postContent}</S.QuestionText>

        {post.imageUrls.length > 0 && (
          <S.QuestionImage src={post.imageUrls[0]} alt="게시글 이미지" />
        )}

        <S.AnswersHeader>
          <LikeIcon />
          <S.ViewCount>좋아요 {post.postLike}개</S.ViewCount>
        </S.AnswersHeader>
      </S.QuestionSection>

      {/* 댓글 목록 표시 */}
      <S.AnswersSection>
        <S.AnswersCount>
          {' '}
          {(post.answers?.length ?? 0) + (post.comments?.length ?? 0)}개 댓글
        </S.AnswersCount>

        {post.comments?.map((comment) => (
          <S.AnswerBox key={comment.id}>
            <S.AnswerBoxHeader>
              <S.AnswerInfo>
                <S.WriterImage src={writerImg} alt="댓글 작성자 이미지" />
                <S.AnswerAuthor>{comment.authorName} 님</S.AnswerAuthor>
              </S.AnswerInfo>
            </S.AnswerBoxHeader>
            <S.AnswerBody>
              <S.AnswerText>{comment.content}</S.AnswerText>
              <S.AnswerTime>{comment.createdAt}</S.AnswerTime>
            </S.AnswerBody>
          </S.AnswerBox>
        ))}
      </S.AnswersSection>

      <S.ReplyButtonWrapper>
        <S.ReplyButton>답변하기</S.ReplyButton>
      </S.ReplyButtonWrapper>
    </S.Container>
  );
};
