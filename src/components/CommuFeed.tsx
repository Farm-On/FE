//green box 없는 기본버전  
import * as C from '@/styles/components/MainCommunityStyle.style';
import styled from '@emotion/styled';

interface FeedProps {
  headline: string;
  content: string;
}

export const CommuFeed = ({ headline, content }: FeedProps) => {
  return (
    <div>
      <C.Headline>{headline}</C.Headline>
      <Content>
        <p>{content}</p>
      </Content>
      <C.Interactions>
        <C.StyledLike />
        <p>0</p>
        <C.StyledComment />
        <p>0</p>
      </C.Interactions>
      <DividingLine />
    </div>
  );
};

const DividingLine = styled.div`
  width: 876px;
  height: 1px;
  background-color: rgba(206, 206, 206, 1);
  margin: 30px 0;
  margin-top:30px;
`;

const Content = styled.div`
    min-width:711px;
    max-width:801px;
    width:fit-content;
  padding: 0;
  margin: 0;
  p {
    margin: 0;
    font-size: 16px;
    font-family: 'PretendardMedium';
    color: rgba(94, 94, 94, 1);
  }
`;