//green box 없는 QNA 버전
import * as C from '@/styles/components/MainCommunityStyle.style';
import styled from '@emotion/styled';

interface FeedProps {
  headline: string;
  content: string;
  category: string;
  product: string;
  productDetail?: string;
  imgSrc?:string;
}

export const CommuQnAFeed = ({
  headline,
  content,
  category,
  product,
  productDetail,
  imgSrc
}: FeedProps) => {
  return (
    <div style={{ width: '876px' }}>
      <SortCategory>
        <p>{category}</p>
        <p> • </p>
        <p>
          {product}
          {productDetail ? `(${productDetail})` : null}
        </p>
      </SortCategory>
      <div>
        <div>
          <C.Headline style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ color: '#00A05E' }}>Q.</p>
            {headline}
          </C.Headline>
          <C.Content>
            <p>{content}</p>
            <img src=""></img>
          </C.Content>
        </div>
        <div>
          {imgSrc&& <StyledImg src={imgSrc}/>}
        </div>
      </div>
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
  margin-top: 30px;
`;

const SortCategory = styled.div`
  width: 801px;
  display: flex;
  gap: 4px;
  align-items: center;
  p {
    color: var(--gray-600, #5d5d5d);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    margin: 0;
  }
`;
const StyledImg = styled.img`
  width:100px;
  height:100px;
  object-fit:cover;
  border-radius: 8px;
`