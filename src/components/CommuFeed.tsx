//green box 없는 기본버전
import * as C from '@/styles/components/MainCommunityStyle.style';
import styled from '@emotion/styled';

interface FeedProps {
  headline: string;
  content: string;
  category: string;
  product: string;
  productDetail?: string;
  imgSrc?:string
}

export const CommuFeed = ({ headline, content, category, product, productDetail,imgSrc }: FeedProps) => {
  return (
    <Container>
      <SortCategory>
        <p>{category}</p>
        <p> • </p>
        <p>
          {product}
          {productDetail ? `(${productDetail})` : null}
        </p>
      </SortCategory>
      <div style={{display:'flex',gap:'11px'}}>
        <div>
          <C.Headline>{headline}</C.Headline>
          <Content>
            <p>{content}</p>
          </Content>
        </div>
        <div style={{paddingTop:"10px"}}>
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
    </Container>
  );
};



const Container = styled.div`
  width: 876px;
  @media (max-width: 768px) {
    width: 600px;
  }

  @media (max-width: 480px) {
    width: 550px;
  }
`;


const DividingLine = styled.div`
  width: 876px;
  height: 1px;
  background-color: rgba(206, 206, 206, 1);
  margin: 30px 0;
  margin-top: 30px;
    @media (max-width: 768px) {
    margin: 20px 0;
    width: 600px;
  }

  @media (max-width: 480px) {
    margin: 15px 0;
    width: 550px;
  }
`;

const Content = styled.div`
  min-width: 711px;
  max-width: 801px;
  width: fit-content;
  padding: 0;
  margin: 0;
  p {
    margin: 0;
    font-size: 16px;
    font-family: 'PretendardMedium';
    color: rgba(94, 94, 94, 1);
        @media (max-width: 768px) {
    margin: 20px 0;
    width: 600px;
  }

  @media (max-width: 480px) {
    margin: 15px 0;
    width: 550px;
  }
  }
`;
const SortCategory = styled.div`
  width: 801px;
  display: flex;
  gap:4px;
  align-items:center;
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