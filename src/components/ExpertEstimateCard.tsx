import * as E from '@/styles/components/ExpertEsimateCard.style';
import { CSSProperties } from 'react';

interface ExpertEstimateCardProps {
  id: number;
  title: string;
  subtitle: string;
  estimatedCost: string;
  date: string;
  isDone?: boolean;
  cardStyle?: CSSProperties;
}

export const ExpertEstimateCard = ({
  id,
  title,
  subtitle,
  estimatedCost,
  date,
  isDone,
  cardStyle,
}: ExpertEstimateCardProps) => (
  <E.Card key={id} style={cardStyle}>
    <E.CardHeader>
      <E.CardTitle>{title}</E.CardTitle>
      {isDone && <E.DoneChip>완료</E.DoneChip>}
    </E.CardHeader>
    <E.CardProperties>{subtitle}</E.CardProperties>
    <E.CardDivider />
    <E.CardFooter>
      <E.CardEstimatedCost>₩ {estimatedCost}</E.CardEstimatedCost>
      <E.CardDate>{date}</E.CardDate>
    </E.CardFooter>
  </E.Card>
);
