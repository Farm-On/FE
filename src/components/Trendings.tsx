import * as T from '@/styles/components/Trendings.style';

import ChevronRight from '@/assets/icons/ChevronRight.svg?react';
import DefaultAvatar from '@/assets/icons/DefaultAvatar.svg?react';

interface TrendingCardData {
  id: number;
  thumbnail_url: string | undefined;
  title: string | undefined;
  description: string | undefined;
  author_avatar_url: string | undefined;
  author_username: string | undefined;
}

export const TrendingCard = ({ data }: { data: TrendingCardData }) => {
  return (
    <T.Card>
      <T.ThumbnailImage src={data.thumbnail_url} alt="" />
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
    author_avatar_url:
      'https://s3-alpha-sig.figma.com/img/ec3f/ed4d/a01a668e28f955a728e8e8eea6e870e7?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ALTKlgeL3YBGpj16q7mi6PHDsNA7L68eGoLDtNrfaqavl~nJJMQRkUV6qq4zStJyp9Baytl1izdIyQSvMx4n7qciTpsofaVYObZDbCVSs7CF1OC1HHH5bjBSBtn-gcjJ-CbZur-~HR0SvD4xCS9A8XgfBxWVwg1OLqP3n7bLVoH9s~En5nwmRjmIHBA7tWcU6M1Ap~fITpM4XDXgG89N~PhRmyt2ELEU~DE2Pmp1OufcP~m3rqzRxgYTLpe468frsskmmN5Ey72nU5p3VlDX3zmVyMWGZAmQm~Jz4TlnX88uh6-klxAdjYbuSxdGGdzN-x5cwaUcqpKhWwy2IJg8nw__',
    author_username: '김용수',
  },
  {
    id: 1,
    thumbnail_url:
      'https://s3-alpha-sig.figma.com/img/432b/43df/940c71971b0e2ba05b77608ea33a3aa8?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m0vKG5DpNF80ucIRAax254zlJaxorJWVW7FMCJHKbWZMGACd4KF0SRWbe0OKFxHn5J2dqU2BEb202igHsaKzbse5Xa5C-7uafcFQg-JOUZ5rHagH7U0IOuLJHigdnp0Cfi4uD9uKQ4dNMM6bFBaZ8PIjg8OXN4TnGQbR--ldpqwMhwIxXIBHz2C3PCfPZ5j-jy-YhBbzApN5AcE3j~AVIpq53bkwJHDnETRdIkP9dQoQQ8F2JD37GBK9H1wQY1rz6gH~6Mg28x9MAIr7N3b8zHjegqJQZyAwGCgQm6~6DujNNZ9R8A0dW2d33~vd5ARxF2D5OPkNB9i~-ypBlVipJg__',
    title: '신선딸기 수출의 과제',
    description: '수출 딸기의 확대를 위해 해결해야 할...',
    author_avatar_url:
      'https://s3-alpha-sig.figma.com/img/0f6f/5ba3/ce259c6dc333cfe627726e6c65831a37?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I73T-3Kq3XmXLzJQ0IP71CBUum9sqDQH1B1n2gpY3zbGb5qAE3inBc63h6ggAeI7c6yjB9ayIU~j75zQaYhwShco1iNawxjYbGOlhTyNPJ1PaGFKTlGvt0nwFMFJe-u36HmPA~EB~k4iJJL1-b3WfcRROFkOJ8omYNx6FgVTgpcMnMD2BBghYEJzuyrdqEkfZDYjFwM9wYjpZ4HkrM1fa534dVkJITrRSO3IsZEG6ExhNWB3~EO3~1NQKchcblkYzjF59jgld3JtrZkpvZULHEQqYie3pZwGKR9QnUUiemx8f8kC8PFftI0kavMWWn3N59-LpqyBkTu1DrK3n8ta0g__',
    author_username: '써니',
  },
  {
    id: 2,
    thumbnail_url:
      'https://s3-alpha-sig.figma.com/img/2de7/25cd/885e2894e9db634d3067a7875532d39e?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Xhh8kW~6LF88ciMR9PBRd7NaDTwN5AXOtY~DerpR6IE8R4wIBIij82B7MNtoZhqm0rpRquTTawYx6RWGNlDHakZm5HjLa2gZdo-eVhVAjN6RZqFEWOITQfMi~8upj--sHzJGQROQsNM86~cA7WsDVt5gp2iOxMpELzlsBbE8KYYyU6n-aeLMypXWRxus2X4SJtoJzqOSnzl9-lyHss-bApKPPOPgQwkmfNjieT7~T2MBg25y921PI6RQFYbGETxMOr~8pDCrGskes39~~nor-6WRuAHBf5cSr~rTVebQt9xMgIvp6oZxpODYgKRN0U5clos4HWKhbQwujrIc-jP7CQ__',
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
    author_avatar_url:
      'https://s3-alpha-sig.figma.com/img/1417/14f2/fe9cfc56f74e78334b8c4cc1d163d9e2?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EePwORJNvhv1eLjirs0pQC5pthGapDEgKIts9I-JwX9AHCfy60LEgNqRbw76G3WjmhVx2my~V4Dxmn5eFObb81wOzZYjGiq8elp4IY6C7wFXjOi~HgzIYns5DbH0jVhzB3GUyccuN7M8bMVTZakmnWc30RhUvCq62JsA0-2MBysbF7WOTbz7cECb98jbVpHh2oI7qf7XwFmDBu4BLvB~MPACtFwL5i9GHOYlDMkhta7iLAzey80NFnBehJH91DtrhfeKlTWOck5-5zCxU~oXduqIEMNBVABx~WxaFc40QlisZdRb82ggg78bxbppwto6XdpC18mpdmpcZdVw8Rxjew__',
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
