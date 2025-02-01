import * as E from '@/styles/components/ExpertEsimateCard.style';

interface ExpertEstimateCardProps {
  id: number;
  title: string;
  subtitle: string;
  estimatedCost: string;
  date: string;
}

export const ExpertEstimateCard = ({
  id,
  title,
  subtitle,
  estimatedCost,
  date,
}: ExpertEstimateCardProps) => (
  <E.Card key={id}>
    <E.CardTitle>{title}</E.CardTitle>
    <E.CardProperties>{subtitle}</E.CardProperties>
    <E.CardDivider />
    <E.CardFooter>
      <E.CardEstimatedCost>₩ {estimatedCost}</E.CardEstimatedCost>
      <E.CardDate>{date}</E.CardDate>
    </E.CardFooter>
  </E.Card>
);
