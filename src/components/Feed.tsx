import * as C from '@/styles/components/MainCommunityStyle.style';

interface FeedProps {
  topic: string;
  headline: string;
  content: string;
}

export const Feed = ({ topic, headline, content }: FeedProps) => {
  return (
    <div>
      <C.GreenBox>
        <p>{topic}</p>
      </C.GreenBox>
      <C.Headline>{headline}</C.Headline>
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
    </div>
  );
};
