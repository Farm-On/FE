import styled from 'styled-components';
import ChevronRight from '../assets/ChevronRight.svg?react';
import { TrendingCard } from './TrendingCard';

export interface TrendingCardData {
  id: number;
  thumbnail_url: string | undefined;
  title: string | undefined;
  description: string | undefined;
  author_avatar_url: string | undefined;
  author_username: string | undefined;
}

const dummy_trendings = [
  {
    id: 0,
    thumbnail_url:
      'https://s3-alpha-sig.figma.com/img/69bb/de2a/18415efc0483d6a47fe54fdf248cf085?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mOYFlxL0zoURubHjmNFlKU3bS0-gSknVs4hQ6JmNoZ0XNgSJDjImtx6C0a2wayBYDiKD-ER1iCVJXVKdo6HtLHhkMR8DdruaIRylDJzk08iVomdgN~i275Fu3Pv2dliRlccRWC807bG781FDMinDdqmajRz5lviKlAY8iBSXpX5vKpLV-Ia-Vo5JByReHy0s6ZK3K2e5xkkeCk2l5YkiONy9ueJgvbCyJR0F6kuaWTwPKiBrMq43elDBir~cdlpTGPHeGg9I36zREG2TcMjZ4uPeHvMpJRl55DEur17NwNKfGXTnsF1NET6OtX1pC1x067i4~RyrxavstmFIkvzIrA__',
    title: '스마트팜, 농업의 미래를 열다',
    description: '구축 시 고려해야 할 초기 비용과 운영...',
    author_avatar_url:
      'https://s3-alpha-sig.figma.com/img/ec3f/ed4d/a01a668e28f955a728e8e8eea6e870e7?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mhyYhxMCP~NZtDIYWnOrC-NzKh0BZQhMZI-u1eUqtllLF17z2V5h73Bs31h8ybXgkh2SFDYCrVWrQjgw9EKZQa1QJKpcqvN6SYAbIZsKPzs6BN56KSdZ0I-o9HmgwYRft0iU0qAdrfp9hu43xlBW-SSP5kGzqUqy4Uyp2RLMFu-JDRJvMjt9ID-MyZfb8n7ChQZu41y4tweTdhCMioYZFWlRBt77qJvqjjSvwVYGnKJEIuGq8ufNVEh7H2CdlueFnFoRPWhAl~5MRENsXPfcwrUnm45a~irtBW894mGKqCJCerNdVBqrlEmbCZTtL65g9lyaPGYwGzpL1dVsNyoWcA__',
    author_username: '김용수',
  },
  {
    id: 1,
    thumbnail_url:
      'https://s3-alpha-sig.figma.com/img/432b/43df/940c71971b0e2ba05b77608ea33a3aa8?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUmcyESMNnftlhmUU7I-a8k1BUzXzGtXTKjz8AwNGUER1PFZ~2DUK7lFbXjzZJTp13g-AH~yprB-u0eZ~BTHue-6TuFMANXd8oRDYcja-~90EuFgofrkMMquJfZpNeE7PyfQ3jdeGbBb-U2kLWNXwQvVo5iK~N6Sfr5~UC1nWGu5yx5ABsnrzkDNpKSHXApwPU0vz8b3Q7Zcm8VYiZq5UpUMlW0njSJPqaYxpl5hpmCK-IlE6ng5ApLiVKCsbwHlpQXICyJNLGJQkLvbkr7RBNYSq843PIje~73sMOY0brBtKM8wpBhk9T5PJRQjtQ0KPbQ8CL02gKTIic9P5uTVMQ__',
    title: '신선딸기 수출의 과제',
    description: '수출 딸기의 확대를 위해 해결해야 할...',
    author_avatar_url:
      'https://s3-alpha-sig.figma.com/img/0f6f/5ba3/ce259c6dc333cfe627726e6c65831a37?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I73T-3Kq3XmXLzJQ0IP71CBUum9sqDQH1B1n2gpY3zbGb5qAE3inBc63h6ggAeI7c6yjB9ayIU~j75zQaYhwShco1iNawxjYbGOlhTyNPJ1PaGFKTlGvt0nwFMFJe-u36HmPA~EB~k4iJJL1-b3WfcRROFkOJ8omYNx6FgVTgpcMnMD2BBghYEJzuyrdqEkfZDYjFwM9wYjpZ4HkrM1fa534dVkJITrRSO3IsZEG6ExhNWB3~EO3~1NQKchcblkYzjF59jgld3JtrZkpvZULHEQqYie3pZwGKR9QnUUiemx8f8kC8PFftI0kavMWWn3N59-LpqyBkTu1DrK3n8ta0g__',
    author_username: '써니',
  },
  {
    id: 2,
    thumbnail_url:
      'https://s3-alpha-sig.figma.com/img/2de7/25cd/885e2894e9db634d3067a7875532d39e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yl3zDeVg9XAlJe26~vNBgRC668gXcH-4LX4KHqklUHPvrekQEws1vUVE7-otucTitGNYxWKEe56ea52DcGKwXtsHVCP9vs~HNZJUljmlGmQGWbI71DOIY8kZnQJAvm9y1ynjKVxV3qk1icqCMmRlYK2wuu0B28Zd3qr8fUnUcmxEX2k0i1govpH9WynwQexZTnQccuGtsHQM2jiEwNUJ7UesMQmDAJ8WP8cb-j1ts-90R6COt8fiHVxkywjGO6MsmGzqqkBTBrkfB~LUjYM5xhZ3nWy-8m62rcYym7qdqo8~MkEIZA3ZAX2lUHRCM6V47EXCx6igcfcs~-tsxPBATQ__',
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
      'https://s3-alpha-sig.figma.com/img/1417/14f2/fe9cfc56f74e78334b8c4cc1d163d9e2?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KUeSyh2rPLYQtlIYZDRyc7HyOCwdaY4Oa7jkjdLhJanfvluj1je6yUFyv-88XQj6WZpJ~w0B3GITNtSj~gTpXh5dnSL8Z6bEPDUW2swMr3UPzRZSE1tRPxj1toUDO4SP9HOLVz-nK4xRBEIZcYhpbLIGJHTNJ4r9cb6SkmP89Qyc7XaVztFLrZl7GP227to4JGxoOBYWk1pXqTZPAMJxpV~TxKKNR7BYCZ3c0NlFOm3LOY-zdMYuaJsnK4myg0JoNWKL52fZ-Al-CKXSx8ED1HDonAYeiD2nWYbztMlt7m4fKVuBSVGvsMu~jvFVLZxfb4KgXegujhFEzsC9r3WHgQ__',
    author_username: '이수환',
  },
];

export const Trendings = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderTitle>지금 인기있는 칼럼</HeaderTitle>
        <HeaderViewAllContainer>
          <HeaderViewAllText>전체보기</HeaderViewAllText>
          <ChevronRight />
        </HeaderViewAllContainer>
      </HeaderContainer>
      <TrendingCardContainer>
        <CircleButton>
          <ChevronRight width={30} height={30} />
        </CircleButton>
        {dummy_trendings.map((data) => (
          <TrendingCard key={data.id} data={data} />
        ))}
      </TrendingCardContainer>
    </>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.span`
  color: #252525;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 39px */
  text-transform: uppercase;
`;

const HeaderViewAllContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderViewAllText = styled.span`
  color: #00a05e;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  text-transform: uppercase;
`;

const TrendingCardContainer = styled.div`
  position: relative;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
`;

const CircleButton = styled.div`
  position: absolute;
  right: -22px;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 9999px;
  filter: drop-shadow(0px 0px 7px rgba(0, 0, 0, 0.15));
`;
