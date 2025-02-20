import * as EC from '@/styles/components/ExpertCard.style';

interface ExpertProps {
  name: string;
  cropCategory: string;
  cropName: string,
  star: number;
  years: number;
  url: string | undefined;
  nickName:string|null;
  onClick:()=>void;
}

export const ExpertCard = ({ name, cropCategory, cropName, url,nickName,years,onClick }: ExpertProps) => {
  return (
    <EC.Card className="card">
      <EC.CardContainer onClick={onClick}>
        <EC.ExpertImg src={url} />
        <EC.Gradient></EC.Gradient> {/*그라디언트 */}
        <EC.Information>
          <h1>{name} ({nickName})</h1>
          <h3>{cropCategory}, {cropName}</h3>
          <h3>경력 {years}년</h3>
        </EC.Information>
      </EC.CardContainer>
    </EC.Card>
  );
};
