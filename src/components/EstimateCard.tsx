import * as EC from '@/styles/components/EstimateCard.style';

interface CardProps {
  productName: string;
  product: string;
  date: string;
}

export const EstimateCard = ({ productName, product, date }: CardProps) => {
  return (
    <div>
      <EC.Card>
        <EC.Content>
          <h4>
            {productName} ({product})
          </h4>
          <h4>신청 견적 보기</h4>
          <p>{date}</p>
        </EC.Content>
      </EC.Card>
    </div>
  );
};
