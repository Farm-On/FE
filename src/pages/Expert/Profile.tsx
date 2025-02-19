import * as M from '@/styles/pages/Expert/Profile.style';
import { EditMyProfileModal, ViewPortfolioModal } from '@/components/modals/Expert/Profile.modal';
import {
  useEditMyProfileModalStore,
  useViewPortfolioModalStore,
} from '@/store/modals/useExpertModalStore';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@/api/axios';
import { ProfileResponse } from '@/api/types/expert/profile';
import DefaultAvatar from '@/assets/icons/DefaultAvatar.svg?react';
import useAuthStore from '@/store/useAuthStore';
import { ChangeEvent } from 'react';

export default function Portfolio() {
  // 내 프로필, 활동 지역 모달
  const { openModal: openEditMyProfileModal } = useEditMyProfileModalStore();
  // 포트폴리오 상세보기 모달
  const { openModal: openViewPortfolioModal, setPortfolioId } = useViewPortfolioModalStore();

  const navigate = useNavigate();
  const { userID } = useParams();

  const { userInfo } = useAuthStore();

  const queryClient = useQueryClient();
  const { data } = useQuery<ProfileResponse>({
    queryKey: ['expertProfile', userID],
    queryFn: () => axiosInstance.get(`/expert/${userID}`).then((response) => response.data),
    enabled: !!userID,
  });

  // 내 프로필인 경우
  const isMyProfile = userInfo?.role === 'EXPERT' && String(userInfo?.expertId) === userID;

  // 프로필 사진 수정
  const { mutate: uploadProfileImg } = useMutation({
    mutationFn: (formData: FormData) =>
      axiosInstance.put(`/expert/${userInfo?.expertId}/profileImg`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['expertProfile'] });
    },
  });

  const onProfileImgUpload = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files?.[0];

    if (file) {
      const formData = new FormData();

      formData.append('file', file);

      uploadProfileImg(formData);
    }
  };

  return (
    <>
      <ViewPortfolioModal />
      <EditMyProfileModal />
      <div style={{ marginTop: 84, paddingBottom: 270 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* 내 프로필 */}
          <M.Title>{isMyProfile && '내 '}프로필</M.Title>
          <M.Card>
            {isMyProfile && (
              <M.EditText onClick={() => openEditMyProfileModal('내 프로필')}>편집</M.EditText>
            )}
            <M.MyInfoContainer>
              <M.AvatarContainer>
                {data?.result.profileImg ? (
                  <M.Avatar src={data?.result.profileImg} alt="" />
                ) : (
                  <DefaultAvatar width={126} height={126} />
                )}
                {isMyProfile && (
                  <>
                    <input
                      id="uploadProfileImg"
                      type="file"
                      accept="image/*"
                      multiple={false}
                      hidden
                      onChange={onProfileImgUpload}
                    />
                    <label htmlFor="uploadProfileImg">
                      <M.CameraIcon />
                    </label>
                  </>
                )}
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
          <M.Title style={{ marginTop: '55px' }}>{isMyProfile && '내 '} 포트폴리오</M.Title>
          <M.Card>
            {isMyProfile && (
              <M.EditText
                onClick={() => {
                  navigate('/expert/portfolio/edit');
                  // TODO scroll to top
                }}
              >
                편집
              </M.EditText>
            )}
            <M.ProfileContainer>
              {/* 경력 */}
              <M.ProfileLi>경력</M.ProfileLi>
              {data?.result.careers.map((career) => (
                <M.ProfileOl key={career.careerId}>
                  {career.title} ({career.startYear} ~ {career.isOngoing ? '현재' : career.endYear})
                  {career.detailContent1 && <M.ProfileUl>{career.detailContent1}</M.ProfileUl>}
                  {career.detailContent2 && <M.ProfileUl>{career.detailContent2}</M.ProfileUl>}
                  {career.detailContent3 && <M.ProfileUl>{career.detailContent3}</M.ProfileUl>}
                  {career.detailContent4 && <M.ProfileUl>{career.detailContent4}</M.ProfileUl>}
                </M.ProfileOl>
              ))}

              {/* 추가정보 */}
              <M.ProfileLi>추가정보</M.ProfileLi>
              <M.ProfileOl>{data?.result.additionalInformation}</M.ProfileOl>

              {/* 대표 서비스 */}
              <M.ProfileLi>대표 서비스</M.ProfileLi>
              <M.ProfileOl>
                {data?.result.expertCropCategory} ({data?.result.expertCropDetail})
                {data?.result.serviceDetail1 && (
                  <M.ProfileUl>{data?.result.serviceDetail1}</M.ProfileUl>
                )}
                {data?.result.serviceDetail2 && (
                  <M.ProfileUl>{data?.result.serviceDetail2}</M.ProfileUl>
                )}
                {data?.result.serviceDetail3 && (
                  <M.ProfileUl>{data?.result.serviceDetail4}</M.ProfileUl>
                )}
                {data?.result.serviceDetail4 && (
                  <M.ProfileUl>{data?.result.serviceDetail4}</M.ProfileUl>
                )}
              </M.ProfileOl>

              {/* 포트폴리오 */}
              <M.ProfileLi>포트폴리오</M.ProfileLi>
              <M.PortfolioImages>
                {data?.result.portfolio.map((pf) => (
                  <M.PortfolioImageCard
                    key={pf.portfolioId}
                    onClick={() => {
                      setPortfolioId(pf.portfolioId);
                      openViewPortfolioModal();
                    }}
                  >
                    <M.PortfolioImageContainer>
                      <M.PortfolioImage src={pf.thumbnailImg!} />
                      <M.PortfolioImageAlt>{pf.title}</M.PortfolioImageAlt>
                    </M.PortfolioImageContainer>
                  </M.PortfolioImageCard>
                ))}
              </M.PortfolioImages>
            </M.ProfileContainer>
          </M.Card>

          {/* 활동 지역 */}
          <M.Title style={{ marginTop: '55px' }}>활동 지역</M.Title>
          <M.Card>
            {isMyProfile && (
              <M.EditText onClick={() => openEditMyProfileModal('활동 지역')}>편집</M.EditText>
            )}
            <M.RegionContainer>
              <M.GPSIcon />
              <M.RegionDetailContainer>
                <M.RegionPrimaryText>
                  {data?.result.expertLocationCategory}{' '}
                  {data?.result.expertLocationDetail.includes('전체')
                    ? null
                    : data?.result.expertLocationDetail}
                </M.RegionPrimaryText>
                <M.RegionSecondaryText>
                  활동 가능 범위:{' '}
                  {data?.result.isAvailableEverywhere
                    ? '전국 어디든 가능'
                    : `${data?.result.availableRange ?? '0'}km 이동 가능`}
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
