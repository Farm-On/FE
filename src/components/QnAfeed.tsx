import * as C from '@/styles/components/MainCommunityStyle.style';
import styled from '@emotion/styled';

interface FeedProps {
  topic: string;
  headline: string;
  content: string;
}

export const QnAFeed = ({ topic, headline, content }: FeedProps) => {
  return (
    <CardWrapper>
      <C.GreenBox>
        <p>{topic}</p>
      </C.GreenBox>
      <C.Headline style={{display:'flex',alignItems:'center'}}>
        <p style={{color:'#00A05E'}}>Q.</p>
        {headline}
      </C.Headline>
      <C.Content>
        <p>{content}</p>
      </C.Content>
      <C.Interactions>
        <C.StyledLike />
        <p>0</p>
        <C.StyledComment />
        <p>0</p>
      </C.Interactions>
      <C.DividingLine />
    </CardWrapper>
  );
};

const CardWrapper = styled.div`

  @media (max-width: 768px) {
    width: 720px;
  }

  @media (max-width: 480px) {
    width: 460px;
  }


`