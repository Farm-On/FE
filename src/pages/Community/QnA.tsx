import { useState } from 'react';
import * as S from '@/styles/pages/Community/QnA.style';
import appleImage from '@/assets/images/appleImg.png';
import writerImg from '@/assets/icons/people.svg';
import moreIcon from '@/assets/icons/more.svg';
import LikeIcon from '@/assets/icons/thumbs-up.svg?react';
import ShareIcon from '@/assets/icons/share.svg?react';
import BlackMoreIcon from '@/assets/icons/black-more.svg?react';

const QnA = () => {
  const [answers, setAnswers] = useState([
    {
      author: '김민수',
      role: '전문가',
      text: '사과 수확량을 늘리려면 가지치기를 통해 나무의 통풍과 햇빛이 잘 들도록 해주세요. 특히 중심 가지를 집중적으로 정리하고, 열매가 많이 달리면 직접 작업으로 개별 품질을 높이는 것도 중요합니다.',
      time: '2025.01.22',
    },
    {
      author: '이장민',
      role: '비전문가',
      text: '물 관리가 제일 중요해요. 특히 개화기나 과실이 커질 때 물이 부족하지 않게 꾸준히 챙겨주세요. 또, 토양에 유기질 비료를 넣으면 나무가 건강해지고 열매도 잘 맺힐 거예요. 주변 농사 환경을 한 번 알아보시면 좋을 것 같네요.',
      time: '1시간 전',
    },
  ]);

  return (
    <S.Container>
      <S.QuestionSection>
        <S.QuestionTitle>사과 재배 시 수확량을 높이는 방법이 궁금합니다.</S.QuestionTitle>
        <S.Category>사과(과일)</S.Category>
        <S.QuestionHeader>
          <S.AuthorInfo>
            <S.WriterImage src={writerImg} alt="작성자 이미지" />
            <div>
              <S.WriterName>김철수</S.WriterName>
              <S.QuestionTime>3시간 전</S.QuestionTime>
            </div>
          </S.AuthorInfo>
          <div>
            <ShareIcon />
            <BlackMoreIcon />
          </div>
        </S.QuestionHeader>
        <S.QuestionText>
          올해 사과 농사를 시작한 초보 농부입니다. 사과 수확량을 높이기 위해 어떤 방법이 효과적인지
          궁금합니다. 경험이 많으신 분들의 조언 부탁드립니다.
        </S.QuestionText>
        <S.QuestionImage src={appleImage} alt="사과 나무" />
        <S.AnswersHeader>
          <LikeIcon />
          <S.ViewCount>조회 4</S.ViewCount>
        </S.AnswersHeader>
      </S.QuestionSection>

      <S.AnswersSection>
        <S.AnswersCount>{answers.length}개 답변</S.AnswersCount>

        {answers.map((answer, index) => (
          <S.AnswerBox key={index}>
            <S.AnswerBoxHeader>
              <S.AnswerInfo>
                <S.WriterImage src={writerImg} alt="답변자 이미지" />
                <S.AnswerAuthor>{answer.author} 님 답변</S.AnswerAuthor>
              </S.AnswerInfo>
              <S.MoreIcon src={moreIcon} alt="더보기 아이콘" />
            </S.AnswerBoxHeader>
            <S.AnswerBody>
              <S.AnswerText>{answer.text}</S.AnswerText>
              <S.AnswerTime>{answer.time}</S.AnswerTime>
            </S.AnswerBody>
          </S.AnswerBox>
        ))}
      </S.AnswersSection>

      {/* 답변하기 버튼 */}
      <S.ReplyButtonWrapper>
        <S.ReplyButton>답변하기</S.ReplyButton>
      </S.ReplyButtonWrapper>
    </S.Container>
  );
};

export default QnA;
