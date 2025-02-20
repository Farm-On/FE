import * as T from '@/styles/components/Trendings.style';

import ChevronRight from '@/assets/icons/ChevronRight.svg?react';
import DefaultAvatar from '@/assets/icons/DefaultAvatar.svg?react';
import healthImg from '@/assets/images/image.png';
import strawberryImg from '@/assets/images/freshStrawberry.png';

interface TrendingCardData {
  id: number;
  thumbnail_url: string | undefined;
  title: string | undefined;
  description: string | undefined;
  author_avatar_url: string | undefined;
  author_username: string | undefined;
}

export const TrendingCard = ({ data }: { data: TrendingCardData }) => {
  const isValidUrl = (url: string | undefined): boolean => {
    if (!url) return false;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const imageSrc =
    data.id === 1
      ? strawberryImg // id가 1이면 strawberryImg 사용
      : isValidUrl(data.thumbnail_url)
        ? data.thumbnail_url
        : healthImg; // 유효한 URL이 없으면 healthImg 사용

  return (
    <T.Card>
      <T.ThumbnailImage src={imageSrc} alt="" />
      <T.Content>
        <T.Title>{data.title}</T.Title>
        <T.Description>{data.description}</T.Description>
        <T.AuthorContainer>
          {data.author_avatar_url ? (
            <T.AuthorAvatar src={data.author_avatar_url} alt="" />
          ) : (
            <DefaultAvatar />
          )}
          <T.AuthorUsername>{data.author_username}</T.AuthorUsername>
        </T.AuthorContainer>
      </T.Content>
    </T.Card>
  );
};

const dummy_trendings = [
  {
    id: 0,
    thumbnail_url:
      'https://www.figma.com/file/lUNHiREZRQJqQihbPdLdOv/image/69bbde2a18415efc0483d6a47fe54fdf248cf085',
    title: '스마트팜, 농업의 미래를 열다',
    description: '구축 시 고려해야 할 초기 비용과 운영...',
    author_avatar_url: undefined,
    author_username: '김용수',
  },
  {
    id: 1,
    thumbnail_url:
      'https://s3-alpha-sig.figma.com/img/432b/43df/940c71971b0e2ba05b77608ea33a3aa8?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m0vKG5DpNF80ucIRAax254zlJaxorJWVW7FMCJHKbWZMGACd4KF0SRWbe0OKFxHn5J2dqU2BEb202igHsaKzbse5Xa5C-7uafcFQg-JOUZ5rHagH7U0IOuLJHigdnp0Cfi4uD9uKQ4dNMM6bFBaZ8PIjg8OXN4TnGQbR--ldpqwMhwIxXIBHz2C3PCfPZ5j-jy-YhBbzApN5AcE3j~AVIpq53bkwJHDnETRdIkP9dQoQQ8F2JD37GBK9H1wQY1rz6gH~6Mg28x9MAIr7N3b8zHjegqJQZyAwGCgQm6~6DujNNZ9R8A0dW2d33~vd5ARxF2D5OPkNB9i~-ypBlVipJg__',
    title: '신선딸기 수출의 과제',
    description: '수출 딸기의 확대를 위해 해결해야 할...',
    author_avatar_url: undefined,
    author_username: '써니',
  },
  {
    id: 2,
    thumbnail_url: '',
    title: '작물별 병해충 예방 및 대처법',
    description: '건강한 작물을 위한 필수 관리',
    author_avatar_url: undefined,
    author_username: '김지연',
  },
  {
    id: 3,
    thumbnail_url:
      'https://www.figma.com/file/lUNHiREZRQJqQihbPdLdOv/image/bf03fdafe7df025921ca6102640fe48a916c0ef0',
    title: '귀농인의 첫해, 꼭 알아야 할...',
    description: '초보 농업인들을 위한 체크리스트',
    author_avatar_url: undefined,
    author_username: '이수환',
  },
];

export const Trendings = () => {
  return (
    <T.TrendingCardContainer>
      <T.CircleButton>
        <ChevronRight width={30} height={30} />
      </T.CircleButton>
      {dummy_trendings.map((data) => (
        <TrendingCard key={data.id} data={data} />
      ))}
    </T.TrendingCardContainer>
  );
};
