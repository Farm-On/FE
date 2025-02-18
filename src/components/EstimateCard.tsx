import * as EC from '@/styles/components/EstimateCard.style';

interface CardProps {
  title: string;
  product: string;
  date: string;
  category: string;
  region: string;
  productName: string;
  money: string;
  onClick:()=>void;
}

export const EstimateCard = ({
  title,
  category,
  product,
  region,
  date,
  productName,
  money,
  onClick
}: CardProps) => {
  return (
    <EC.Container>
      <EC.Card onClick={onClick}>
        <EC.Content>
          <h2>{title}</h2>
          <h3>
            {productName}
            {`(${product})`} | {category} | {region}
          </h3>
          <EC.ContentLine />
          <EC.Bottom>
            <h4>₩ {money}</h4>
            <p>{date}</p>
          </EC.Bottom>
        </EC.Content>
      </EC.Card>
    </EC.Container>
  );
};

