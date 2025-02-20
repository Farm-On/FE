import axiosInstance from '@/api/axios';
import { ProfileResponse } from '@/api/types/expert/profile';
import { EditMyPortfolioModal } from '@/components/modals/Expert/PortfolioEdit.modal';
import { useEditMyPortfolioModalStore } from '@/store/modals/useExpertModalStore';
import useAuthStore from '@/store/useAuthStore';
import * as ME from '@/styles/pages/Expert/PortfolioEdit.style';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function PortfolioEdit() {
  const navigate = useNavigate();

  // 내 포폴 편집 모달
  const { openModal } = useEditMyPortfolioModalStore();

  const { userInfo } = useAuthStore();
  const { setCareer } = useEditMyPortfolioModalStore();

  const { data } = useQuery<ProfileResponse>({
    queryKey: ['expertMyPortfolio'],
    queryFn: () =>
      axiosInstance.get(`/expert/${userInfo?.expertId}`).then((response) => response.data),
    enabled: !!userInfo?.expertId,
  });

  return (
    <>
      <EditMyPortfolioModal />
      <div style={{ marginTop: 84, paddingBottom: 200 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ME.Content>
            <ME.Title>내 포트폴리오 편집</ME.Title>

            {/* 경력 및 추가정보 */}
            <ME.Label>경력 및 추가정보</ME.Label>
            <ME.Card style={{ gap: 190 }}>
              {/* 경력 */}
              <ME.Section>
                <ME.CardHeader>경력</ME.CardHeader>
                <div>
                  <ME.CardContent>
                    {data?.result.careers.map((career) => (
                      <ME.CareerContainer key={career.careerId}>
                        <ME.CareerHeader>
                          <ME.Text>
                            {career.title} ({career.startYear} ~{' '}
                            {career.isOngoing ? '현재' : career.endYear})
                          </ME.Text>
                          <ME.CareerEdit
                            onClick={() => {
                              setCareer({ careerId: career.careerId });
                              openModal('경력');
                            }}
                          >
                            편집
                          </ME.CareerEdit>
                        </ME.CareerHeader>
                        {career.detailContent1 && (
                          <ME.CareerListText>{career.detailContent1}</ME.CareerListText>
                        )}
                        {career.detailContent2 && (
                          <ME.CareerListText>{career.detailContent2}</ME.CareerListText>
                        )}
                        {career.detailContent3 && (
                          <ME.CareerListText>{career.detailContent3}</ME.CareerListText>
                        )}
                        {career.detailContent4 && (
                          <ME.CareerListText>{career.detailContent4}</ME.CareerListText>
                        )}
                      </ME.CareerContainer>
                    ))}
                  </ME.CardContent>
                </div>
                <ME.Add
                  style={{ marginTop: '42px' }}
                  onClick={() => {
                    setCareer({
                      careerId: null,
                    });
                    openModal('경력');
                  }}
                >
                  + 추가하기
                </ME.Add>
              </ME.Section>
              {/* 추가정보 */}
              <ME.Section>
                <div>
                  <ME.CardHeader>추가정보</ME.CardHeader>
                  <ME.CardContent>
                    <ME.DetailContainer>
                      <ME.Pre>{data?.result.additionalInformation}</ME.Pre>
                      <ME.CareerEdit onClick={() => openModal('추가정보')}>편집</ME.CareerEdit>
                    </ME.DetailContainer>
                  </ME.CardContent>
                </div>
              </ME.Section>
            </ME.Card>

            {/* 대표 서비스 */}
            <ME.Label style={{ marginTop: '70px' }}>대표 서비스</ME.Label>
            <ME.Card>
              <ME.CardHeader style={{ margin: 0 }}>
                {data?.result.expertCropDetail} ({data?.result.expertCropCategory})
              </ME.CardHeader>
              <ME.MainServiceEdit onClick={() => openModal('대표 서비스')}>편집</ME.MainServiceEdit>
            </ME.Card>

            {/* 포트폴리오 */}
            <ME.Label style={{ marginTop: '70px' }}>포트폴리오</ME.Label>
            <ME.PortfolioContainer>
              {data?.result?.portfolio.map((portfolio) => (
                <ME.PortfolioCard key={portfolio.portfolioId}>
                  <ME.PortfolioCardImage src={portfolio.thumbnailImg} />
                  <ME.PortfolioCardText>{portfolio.title}</ME.PortfolioCardText>
                  <ME.PortfolioCardEdit
                    onClick={() => navigate(`/expert/portfolio/editor/${portfolio.portfolioId}`)}
                  >
                    편집
                  </ME.PortfolioCardEdit>
                </ME.PortfolioCard>
              ))}
              <ME.AddPortfolioContainer onClick={() => navigate(`/expert/portfolio/editor/new`)}>
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
