import * as EC from '@/styles/components/ExpertCard.style';

interface ExpertProps {
  name: string;
  product: string;
  star: number;
  years: number;
  url: string | undefined;
}

export const ExpertCard = ({ name, product, star, years, url }: ExpertProps) => {
  return (
    <EC.Card className="card">
      <EC.CardContainer>
        <EC.ExpertImg src={url} />
        <EC.Gradient></EC.Gradient> {/*그라디언트 */}
        <EC.Information>
          <h1>{name}</h1>
          <h3>{product}</h3>
          <EC.StarInfo>
            <EC.StarWrap>
              <EC.StarImg />
              <h2>{star}</h2>
            </EC.StarWrap>
            <p>경력 {years}년</p>
          </EC.StarInfo>
        </EC.Information>
      </EC.CardContainer>
    </EC.Card>
  );
};
