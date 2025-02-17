import styled from '@emotion/styled';

export const Container = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Pretendard', sans-serif;
`;

export const QuestionSection = styled.div`
  padding-bottom: 20px;
  border-bottom: 2px solid #ddd;
`;

export const Category = styled.p`
  color: #8e8e8e;
  font-size: 16px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

export const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const QuestionTitle = styled.h2`
  font-size: 26px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  line-height: 39px;
  word-wrap: break-word;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  &::before {
    content: 'Q.';
    color: #00a05e;
    margin-right: 5px;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #666;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const WriterImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const WriterName = styled.span`
  color: black;
  font-size: 18px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  line-height: 29.88px;
  word-wrap: break-word;
  display: block;
`;

export const QuestionTime = styled.span`
  color: #5d5d5d;
  font-size: 12px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  line-height: 14.4px;
  word-wrap: break-word;
  display: block;
`;

export const QuestionText = styled.p`
  color: #2c2c2c;
  font-size: 18px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  line-height: 29.88px;
  word-wrap: break-word;
  margin-bottom: 10px;
  white-space: pre-line;
`;

export const QuestionImage = styled.img`
  width: 80%;
  border-radius: 8px;
  margin-top: 10px;
`;

export const AnswersSection = styled.div`
  margin-top: 20px;
`;

export const AnswersHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
`;

export const AnswersCount = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;

export const ViewCount = styled.p`
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
  color: #5d5d5d;
`;

export const AnswerBox = styled.div`
  width: 100%;
  height: 260px;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

export const AnswerBoxHeader = styled.div`
  height: 91px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  display: flex;
  background: #e1f6f0;
  padding: 20px 20px;
  border-radius: 10px;
`;

export const AnswerInfo = styled.div`
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

export const AnswerAuthor = styled.div`
  color: black;
  font-size: 18px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  line-height: 29.88px;
  word-wrap: break-word;
`;

export const AnswerBody = styled.div`
  width: 100%;
  height: 170px;
  margin-top: 26px;
  margin-left: 20px;
`;

export const MoreIconWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const MoreIcon = styled.img`
  width: 22px;
  height: 23px;
  cursor: pointer;
`;

export const AnswerText = styled.p`
  font-size: 16px;
  line-height: 1.4;
  margin: 5px 0;
  color: 'black';
  font-family: 'Pretendard';
  fontweight: 400;
  lineheight: 24;
  wordwrap: 'break-word';
`;

export const AnswerTime = styled.p`
  font-size: 14px;
  color: #8e8e8e;
  font-family: 'Pretendard';
  font-weight: 400;
  word-wrap: break-word;
  margin-top: 26px;
`;

export const ReplyButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const ReplyButton = styled.button`
  align-self: flex-end;
  display: flex;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #2c9c5e;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #267e4c;
  }
`;
