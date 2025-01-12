import styled from 'styled-components';
import { TrendingCardData } from './Home_3';
import DefaultAvatar from '../assets/DefaultAvatar.svg?react';

export const TrendingCard = ({ data }: { data: TrendingCardData }) => {
  return (
    <Card>
      <ThumbnailImage src={data.thumbnail_url} alt="" />
      <Content>
        <Title>{data.title}</Title>
        <Description>{data.description}</Description>
        <AuthorContainer>
          {data.author_avatar_url ? (
            <AuthorAvatar src={data.author_avatar_url} alt="" />
          ) : (
            <DefaultAvatar />
          )}
          <AuthorUsername>{data.author_username}</AuthorUsername>
        </AuthorContainer>
      </Content>
    </Card>
  );
};

const Card = styled.div`
  width: 286px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: #f3f3f3;
`;

const Content = styled.div`
  padding-top: 15px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 26px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: hidden;
`;

const ThumbnailImage = styled.img`
  width: 286px;
  height: 225px;
  border-radius: 20px 20px 0px 0px;
`;

const Title = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  text-transform: uppercase;
`;

const Description = styled.span`
  color: #2c2c2c;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  text-transform: uppercase;
`;

const AuthorContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const AuthorAvatar = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 22px;
  overflow: hidden;
`;

const AuthorUsername = styled.span`
  color: #2c2c2c;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
  text-transform: uppercase;
`;
