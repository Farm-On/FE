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

interface PostDetail {
  postId: number;
  postTitle: string;
  subTitle: string;
  postContent: string;
  postLike: number;
  postComment: number;
  createdAt: string;
  subCategory: string;
  imageUrls: string[] | null;
  answers: Answer[] | null;
}

const QnA = () => {
  const { postId } = useParams(); // URL에서 postId 가져오기
  const [post, setPost] = useState<PostDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const response = await axiosInstance.get(`/posts/qna/list/${postId}/detail`, {
          params: { boardId: 1 }, //QnA 게시판 boardId=1
        });

        console.log('QnA 상세 데이터:', response.data);

        // post 데이터 설정, null 값 방지
        const fetchedPost = response.data.result.post;
        setPost({
          ...fetchedPost,
          imageUrls: fetchedPost.imageUrls ?? [],
          answers: fetchedPost.answers ?? [],
        });
      } catch (err) {
        console.error('QnA 데이터 불러오기 실패:', err);
        setError('게시글을 불러오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchPostDetail();
  }, [postId]);

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

        {/* 이미지가 있는 경우에만 렌더링 */}
        {post.imageUrls && post.imageUrls.length > 0 && (
          <S.QuestionImage src={post.imageUrls[0]} alt="게시글 이미지" />
        )}

        <S.AnswersHeader>
          <LikeIcon />
          <S.ViewCount>좋아요 {post.postLike}개</S.ViewCount>
        </S.AnswersHeader>
      </S.QuestionSection>

      {/* 댓글 목록 표시 */}
      <S.AnswersSection>
        <S.AnswersCount>{post.answers?.length ?? 0}개 댓글</S.AnswersCount>

        {post.answers?.map((answer) => (
          <S.AnswerBox key={answer.id}>
            <S.AnswerBoxHeader>
              <S.AnswerInfo>
                <S.WriterImage src={writerImg} alt="답변자 이미지" />
                <S.AnswerAuthor>
                  {answer.author} 님 ({answer.role})
                </S.AnswerAuthor>
              </S.AnswerInfo>
            </S.AnswerBoxHeader>
            <S.AnswerBody>
              <S.AnswerText>{answer.content}</S.AnswerText>
              <S.AnswerTime>{answer.createdAt}</S.AnswerTime>
            </S.AnswerBody>
          </S.AnswerBox>
        ))}
      </S.AnswersSection>

      {/* 답변하기 버튼 */}
      <S.ReplyButtonWrapper>{/* <S.ReplyButton>답변하기</S.ReplyButton> */}</S.ReplyButtonWrapper>
    </S.Container>
  );
};

export default QnA;
