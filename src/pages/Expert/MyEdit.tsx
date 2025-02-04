import { EditMyPortfolioModal } from '@/components/modals/Expert/MyEdit.modal';
import { useEditMyPortfolioModalStore } from '@/store/modals/useExpertModalStore';
import * as ME from '@/styles/pages/Expert/MyEdit.style';

const careers = [
  {
    title: '개인 컨설턴트',
    startYear: 2009,
    startMonth: 6,
    endYear: 2011,
    endMonth: 1,
    isOngoing: false,
    detailContent1: '농업 기술 센터 방제 특강 강사 활동',
    detailContent2: '병해충 관리 업무',
    detailContent3: 'string',
    detailContent4: 'string',
  },
  {
    title: '개인 컨설턴트',
    startYear: 2009,
    startMonth: 6,
    endYear: 2011,
    endMonth: 1,
    isOngoing: false,
    detailContent1: '농업 기술 센터 방제 특강 강사 활동',
    detailContent2: '병해충 관리 업무',
    detailContent3: 'string',
    detailContent4: 'string',
  },
];

const details = [
  '농업생명과학과 졸업 (연세대학교)',
  '병해충 관리사 자격증 보유',
  '농업기술센터 병해충 방제 특강 강사 활동',
];

const portfolios = [
  {
    thumbnailImg:
      'https://s3-alpha-sig.figma.com/img/d589/03fc/efd4e6a3a0e8a920e1a9ec5c765a8c44?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oPJyuRwNW3-J7rH6kl75X4-hn0OBtQsCY6Xh0L0J8H6w4R4DetSsJQxp1bfutysRv1bq-bMzQeUKv~3QPIjdz9tiiQVl~97c3SAp7p8J5BgxXcmh6-KGjJHtvy0IFd3isR2BYFOfcphWXFTrCthGO5yqPtz-qMKFR3X35GjF50qU8IE5tTvN~Lm1wM-IMjr5KpudbYT95V4SzvqNoLfXtpNz8CZR9-~Y0VF9uuSXfsSOE1VBUtlBWa0aA4clsMUje0u1FEJ4iajL6OdCcDCHPkXf09TPJyBTthXNBUi7~H3pBNnzl~EStfBPS3re~ZRm~7Bj379HKgkXmRa5b8-jxA__',
    name: '보리 병해충 퇴치 프로젝트',
  },
  {
    thumbnailImg:
      'https://s3-alpha-sig.figma.com/img/93da/1a06/b388f9f9b7b61d5bb8c2e551ab26679f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VrD0nVwTewcg8JKVmEl4tgeGSajL2mRUWkNg6emLIcxONV620lPfkjEQdA2phqpS62KEbRZWCSkuv~sLONY7exgb9TaA7xy5ymDcGC24mElo2TMnACvWMc-~v7F5eY46JfL7nsAYsKY6zzpfDAecNBFYCLgy2QsH7EFtH50S37xbOqhvlNXOSby8kGOjf3EjrIKhIbsYWYGqz~3xhWCqaTWb~J3hhRIytiFeHsToO1ylKdCsG6bJ-~uiN21gngpHt9LXrHbIXtIz8C3MnkJil47vFb9AEVNiAT3Bynvte5ThwdKO9CxDQEFEDlOZMg~W~HvKV3Be-tUVj6xj~5Rusg__',
    name: '무선 토양센서 컨설팅',
  },
];

export default function MyEdit() {
  // 내 포폴 편집 모달
  const { openModal } = useEditMyPortfolioModalStore();

  return (
    <>
      <EditMyPortfolioModal />
      <div style={{ marginTop: 84 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ME.Content>
            <ME.Title>내 포트폴리오 편집</ME.Title>

            {/* 경력 및 추가정보 */}
            <ME.Label>경력 및 추가정보</ME.Label>
            <ME.Card>
              {/* 경력 */}
              <ME.Section>
                <ME.CardHeader>경력</ME.CardHeader>
                <div>
                  <ME.CardContent>
                    {careers.map((career, index) => (
                      <ME.CareerContainer key={index}>
                        <ME.CareerHeader>
                          <ME.Text>
                            {career.title} ({career.startYear} ~{' '}
                            {career.isOngoing ? '현재' : career.endYear})
                          </ME.Text>
                          <ME.CareerEdit onClick={() => openModal('경력')}>편집</ME.CareerEdit>
                        </ME.CareerHeader>
                        <ME.CareerListText>{career.detailContent1}</ME.CareerListText>
                        <ME.CareerListText>{career.detailContent2}</ME.CareerListText>
                        <ME.CareerListText>{career.detailContent3}</ME.CareerListText>
                        <ME.CareerListText>{career.detailContent4}</ME.CareerListText>
                      </ME.CareerContainer>
                    ))}
                  </ME.CardContent>
                </div>
                <ME.Add style={{ marginTop: '42px' }}>+ 추가하기</ME.Add>
              </ME.Section>
              {/* 추가정보 */}
              <ME.Section>
                <div>
                  <ME.CardHeader>추가정보</ME.CardHeader>
                  <ME.CardContent>
                    {details.map((detail, index) => (
                      <ME.DetailContainer key={index}>
                        <ME.Text>{detail}</ME.Text>
                        <ME.CareerEdit onClick={() => openModal('추가정보')}>편집</ME.CareerEdit>
                      </ME.DetailContainer>
                    ))}
                  </ME.CardContent>
                </div>
                <ME.Add style={{ marginTop: '42px' }}>+ 추가하기</ME.Add>
              </ME.Section>
            </ME.Card>

            {/* 대표 서비스 */}
            <ME.Label style={{ marginTop: '70px' }}>대표 서비스</ME.Label>
            <ME.Card>
              <ME.CardHeader style={{ margin: 0 }}>쌀 (곡물)</ME.CardHeader>
              <ME.MainServiceEdit onClick={() => openModal('대표 서비스')}>편집</ME.MainServiceEdit>
            </ME.Card>

            {/* 포트폴리오 */}
            <ME.Label style={{ marginTop: '70px' }}>포트폴리오</ME.Label>
            <ME.PortfolioContainer>
              {portfolios.map((portfolio, index) => (
                <ME.PortfolioCard key={index}>
                  <ME.PortfolioCardImage src={portfolio.thumbnailImg} />
                  <ME.PortfolioCardText>{portfolio.name}</ME.PortfolioCardText>
                  <ME.PortfolioCardEdit>편집</ME.PortfolioCardEdit>
                </ME.PortfolioCard>
              ))}
              <ME.AddPortfolioContainer>
                <ME.AddBtn />
                <ME.AddText>추가하기</ME.AddText>
              </ME.AddPortfolioContainer>
            </ME.PortfolioContainer>
            <ME.SaveBtn>저장하기</ME.SaveBtn>
          </ME.Content>
        </div>
      </div>
    </>
  );
}
