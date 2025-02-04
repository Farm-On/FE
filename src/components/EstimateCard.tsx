import * as EC from '@/styles/components/EstimateCard.style';
import styled from '@emotion/styled';

interface CardProps {
  title: string;
  product: string;
  date: string;
  category: string;
  region: string;
  productName: string;
  money: string;
}

export const EstimateCard = ({
  title,
  category,
  product,
  region,
  date,
  productName,
  money,
}: CardProps) => {
  return (
    <Container>
      <EC.Card>
        <EC.Content>
          <h2>{title}</h2>
          <h3>
            {productName}
            {`(${product})`} | {category} | {region}
          </h3>
          <ContentLine />
          <Bottom>
            <h4>₩ {money}</h4>
            <p>{date}</p>
          </Bottom>
        </EC.Content>
      </EC.Card>
    </Container>
  );
};

const Container = styled.div`
  width: 390px;
  height: 149px;

  @media (max-width: 768px) {
    width: 150px;
    height: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 98px;
  }
`;
const ContentLine = styled.div`
  width: 337px;
  height: 1px;
  background-color: #c1c1c1;

  
    @media (max-width: 768px) {
      width: 150px;
      display:none;
    }

    @media (max-width: 480px) {
      width: 130px;
      display:none;
    }
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  height:21px;
  
  h4 {
    margin-top: 20px;
    margin: 0;
    font-size: 14px;
    color: #666;
    padding-left:;
    font-family: 'Pretendard';
    height:21px;
    padding-top:5px;
  }
  p {
    color: #8E8E8E;
    font-family: 'Pretendard';
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 18px */
    margin:0;
    padding-top:5px;
  }


      @media (max-width: 768px) {
      display:none;
    }

    @media (max-width: 480px) {
      display:none;
    }
`;
