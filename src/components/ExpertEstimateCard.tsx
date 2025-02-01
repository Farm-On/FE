import * as E from '@/styles/components/ExpertEsimateCard.style';
import { CSSProperties } from 'react';

interface ExpertEstimateCardProps {
  id: number;
  title: string;
  subtitle: string;
  estimatedCost: string;
  date: string;
  cardStyle?: CSSProperties;
}

export const ExpertEstimateCard = ({
  id,
  title,
  subtitle,
  estimatedCost,
  date,
  cardStyle,
}: ExpertEstimateCardProps) => (
  <E.Card key={id} style={cardStyle}>
    <E.CardTitle>{title}</E.CardTitle>
    <E.CardProperties>{subtitle}</E.CardProperties>
    <E.CardDivider />
    <E.CardFooter>
      <E.CardEstimatedCost>₩ {estimatedCost}</E.CardEstimatedCost>
      <E.CardDate>{date}</E.CardDate>
    </E.CardFooter>
  </E.Card>
);
