import React from 'react';
import * as C from '../styles/pages/MainCommunityStyle';

interface FeedProps {
  topic: string;
  headline: string;
  content: string;
}

export const Feed: React.FC<FeedProps> = ({ topic, headline, content }) => {
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


