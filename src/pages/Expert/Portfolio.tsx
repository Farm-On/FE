import * as M from '@/styles/pages/Expert/Portfolio.style';
import { EditMyProfileModal } from '@/components/modals/Expert/Portfolio.modal';
import { useEditMyProfileModalStore } from '@/store/modals/useExpertModalStore';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/api/axios';
import { PortfolioResponse } from '@/api/types/expert/portfolio';
import DefaultAvatar from '@/assets/icons/DefaultAvatar.svg?react';
import useAuthStore from '@/store/useAuthStore';

export default function Portfolio() {
  // 내 프로필, 활동 지역 모달
  const { openModal } = useEditMyProfileModalStore();

  const navigate = useNavigate();
  const { userID } = useParams();

  const { data } = useQuery<PortfolioResponse>({
    queryKey: ['expertPortfolio', userID],
    queryFn: () => axiosInstance.get(`/expert/${userID}`).then((response) => response.data),
    enabled: !!userID,
  });

  const { userInfo } = useAuthStore();

  // 내 프로필인 경우
  const isMyPortfolio = String(userInfo?.userId) === userID;
  console.log(userInfo);

  return (
    <>
      <EditMyProfileModal />
      <div style={{ marginTop: 84 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* 내 프로필 */}
          <M.Title>{isMyPortfolio && '내 '}프로필</M.Title>
          <M.Card>
            {isMyPortfolio && <M.EditText onClick={() => openModal('내 프로필')}>편집</M.EditText>}
            <M.MyInfoContainer>
              <M.AvatarContainer>
                {data?.result.profileImg ? (
                  <M.Avatar src={data?.result.profileImg} alt="" />
                ) : (
                  <DefaultAvatar width={126} height={126} />
                )}
                <M.CameraIcon />
              </M.AvatarContainer>
              <M.MyInfo>
                <div
                  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 12 }}
                >
                  <M.MyName>
                    {data?.result.isNickNameOnly
                      ? data?.result.nickName
                      : data?.result.name +
                        (data?.result.nickName ? ` (${data?.result.nickName})` : '')}
                  </M.MyName>
                  <M.VerifiedBadge>본인인증 완료</M.VerifiedBadge>
                </div>
                <M.MyIntroduction>
                  {data?.result.expertDescription && `“${data?.result.expertDescription}”`}
                </M.MyIntroduction>
                <M.MyStatsContainer>
                  <M.MyStats>
                    <M.MyStatsText>컨설팅 평점</M.MyStatsText>
                    <M.StarIcon />
                    <M.MyStatsText style={{ color: '#2C2C2C' }}>
                      {String(data?.result.rate ?? '0.0')} (
                      {String(data?.result.reviewCount ?? '0')}개)
                    </M.MyStatsText>
                  </M.MyStats>
                  <M.MyStats>
                    <M.MyStatsText>컨설팅 수</M.MyStatsText>
                    <M.MyStatsText>{String(data?.result.consultingCount ?? '0')}건</M.MyStatsText>
                  </M.MyStats>
                </M.MyStatsContainer>
              </M.MyInfo>
            </M.MyInfoContainer>
          </M.Card>
          {/* 내 포트폴리오 */}
          <M.Title style={{ marginTop: '55px' }}>{isMyPortfolio && '내 '} 포트폴리오</M.Title>
          <M.Card>
            {isMyPortfolio && (
              <M.EditText
                onClick={() => {
                  navigate('/expert/portfolio/edit');
                  // TODO scroll to top
                }}
              >
                편집
              </M.EditText>
            )}
            <M.PortfolioContainer>
              {/* 경력 */}
              <M.PortfolioLi>경력</M.PortfolioLi>
              {data?.result.careers.map((career) => (
                <M.PortfolioOl key={career.careerId}>
                  {career.title} ({career.startYear} ~ {career.isOngoing ? '현재' : career.endYear})
                  {career.detailContent1 && <M.PortfolioUl>{career.detailContent1}</M.PortfolioUl>}
                  {career.detailContent2 && <M.PortfolioUl>{career.detailContent2}</M.PortfolioUl>}
                  {career.detailContent3 && <M.PortfolioUl>{career.detailContent3}</M.PortfolioUl>}
                  {career.detailContent4 && <M.PortfolioUl>{career.detailContent4}</M.PortfolioUl>}
                </M.PortfolioOl>
              ))}
              {/* 추가정보 */}
              <M.PortfolioLi>추가정보</M.PortfolioLi>
              <M.PortfolioOl>{data?.result.additionalInformation}</M.PortfolioOl>
              {/* 대표 서비스 */}
              <M.PortfolioLi>대표 서비스</M.PortfolioLi>
              <M.PortfolioOl>
                {data?.result.expertCropCategory} ({data?.result.expertCropDetail})
                {data?.result.serviceDetail1 && (
                  <M.PortfolioUl>{data?.result.serviceDetail1}</M.PortfolioUl>
                )}
                {data?.result.serviceDetail2 && (
                  <M.PortfolioUl>{data?.result.serviceDetail2}</M.PortfolioUl>
                )}
                {data?.result.serviceDetail3 && (
                  <M.PortfolioUl>{data?.result.serviceDetail4}</M.PortfolioUl>
                )}
                {data?.result.serviceDetail4 && (
                  <M.PortfolioUl>{data?.result.serviceDetail4}</M.PortfolioUl>
                )}
              </M.PortfolioOl>
              {/* 포트폴리오 */}
              <M.PortfolioLi>포트폴리오</M.PortfolioLi>
              <M.PortfolioImages>
                {data?.result.portfolio.map((pf) => (
                  <M.PortfolioImageCard key={pf.portfolioId}>
                    <M.PortfolioImageContainer>
                      <M.PortfolioImage src={pf.thumbnailImg!} />
                      <M.PortfolioImageAlt>{pf.title}</M.PortfolioImageAlt>
                    </M.PortfolioImageContainer>
                  </M.PortfolioImageCard>
                ))}
              </M.PortfolioImages>
            </M.PortfolioContainer>
          </M.Card>
          {/* 활동 지역 */}
          <M.Title style={{ marginTop: '55px' }}>활동 지역</M.Title>
          <M.Card>
            {isMyPortfolio && <M.EditText onClick={() => openModal('활동 지역')}>편집</M.EditText>}
            <M.RegionContainer>
              <M.GPSIcon />
              <M.RegionDetailContainer>
                <M.RegionPrimaryText>
                  {data?.result.expertLocationCategory} {data?.result.expertLocationDetail}
                </M.RegionPrimaryText>
                <M.RegionSecondaryText>
                  활동 가능 범위: {data?.result.availableRange ?? '0'}km 이동 가능
                </M.RegionSecondaryText>
                {data?.result.isExcludeIsland && (
                  <M.RegionSecondaryText>도서지방 제외</M.RegionSecondaryText>
                )}
              </M.RegionDetailContainer>
            </M.RegionContainer>
          </M.Card>
        </div>
      </div>
    </>
  );
}
