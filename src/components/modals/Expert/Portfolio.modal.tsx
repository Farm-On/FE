import axiosInstance from '@/api/axios';
import { ViewPortfolioResponse } from '@/api/types/expert/portfolio';
import { ProfileResponse } from '@/api/types/expert/profile';
import { Modal } from '@/components/Modal';
import ReactModal from 'react-modal';
import {
  useEditMyProfileModalStore,
  useViewPortfolioModalStore,
} from '@/store/modals/useExpertModalStore';

import * as P from '@/styles/components/modals/Expert/Portfolio.style';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const Check = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
    <path
      d="M11.6673 4.41406L5.25065 10.8307L2.33398 7.91406"
      stroke="white"
      strokeWidth="1.16667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ViewPortfolioModal = () => {
  const { isOpen, closeModal, portfolioId, setPortfolioId } = useViewPortfolioModalStore();

  const { userID } = useParams();
  const queryClient = useQueryClient();

  const portfolioList = queryClient.getQueryData<ProfileResponse>(['expertProfile', userID])?.result
    .portfolio;

  const currentPortfolioIndex = portfolioList?.findIndex((p) => p.portfolioId === portfolioId);

  const { data } = useQuery<ViewPortfolioResponse>({
    queryKey: ['expertViewPortfolio', portfolioId],
    queryFn: () =>
      axiosInstance.get(`/expert/portfolio/${portfolioId}`).then((response) => response.data),
    enabled: !!portfolioId,
  });

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => closeModal()}
      style={{
        overlay: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.5)',
        },
        content: {
          position: 'relative',
          overflow: 'hidden',
          margin: 0,
          padding: 0,
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'none',
          border: 'none',
          borderRadius: 'none',
        },
      }}
    >
      <P.PreviousArrow
        onClick={() =>
          currentPortfolioIndex! > 0 &&
          setPortfolioId(portfolioList?.[currentPortfolioIndex! - 1].portfolioId ?? 0)
        }
      />
      <section>
        <P.PortfolioIndicator>
          포트폴리오 {portfolioList ? (currentPortfolioIndex ?? 0) + 1 : '?'} /{' '}
          {portfolioList?.length ?? '?'}
        </P.PortfolioIndicator>
        <div
          style={{
            background: '#fff',
            width: '700px',
            height: '900px',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '28px',
          }}
        >
          <P.Header>
            <P.CloseBtn onClick={() => closeModal()} />
          </P.Header>
          <P.Content>
            <P.PortfolioTitle>{data?.result.title}</P.PortfolioTitle>
            <P.PortfolioContent
              dangerouslySetInnerHTML={{ __html: data?.result.text || '' }}
            ></P.PortfolioContent>
          </P.Content>
        </div>
      </section>
      <P.NextArrow
        onClick={() =>
          currentPortfolioIndex! < portfolioList!.length - 1 &&
          setPortfolioId(portfolioList?.[(currentPortfolioIndex ?? 1) + 1].portfolioId ?? 0)
        }
      />
    </ReactModal>
  );
};

export const EditMyProfileModal = () => {
  const {
    openedModalName,
    closeModal,
    nickname,
    showNicknameOnly,
    introduction,
    setProfile,
    availableLocation,
    setAvailableLocation,
  } = useEditMyProfileModalStore();

  switch (openedModalName) {
    // 내 프로필 편집 모달
    case '내 프로필': {
      const saveProfile = () => {
        console.log(nickname, showNicknameOnly, introduction);
        closeModal();
      };

      return (
        <Modal
          open={openedModalName === '내 프로필'}
          close={closeModal}
          width="900px"
          height="458px"
          borderRadius="20px"
        >
          <P.Header>
            <P.CloseBtn onClick={() => closeModal()} />
          </P.Header>
          <P.Content>
            {/* 닉네임 */}
            <P.Title>닉네임</P.Title>
            <P.Input
              placeholder="닉네임을 작성해주세요."
              maxLength={10}
              onChange={(e) => setProfile({ nickname: e.target.value.trim() })}
            />
            <div
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <P.CheckBoxContainer>
                <P.CheckBox
                  checked={showNicknameOnly === true}
                  onClick={() => setProfile({ showNicknameOnly: !showNicknameOnly })}
                >
                  <Check />
                </P.CheckBox>
                <P.CheckBoxLabel>닉네임만 보여주기</P.CheckBoxLabel>
              </P.CheckBoxContainer>
              <P.MaxLengthText style={{ marginTop: '-4px' }}>3/10자</P.MaxLengthText>
            </div>

            {/* 한 줄 소개 */}
            <P.Title style={{ marginTop: '34px' }}>한 줄 소개</P.Title>
            <P.Input
              placeholder="한 줄 소개를 작성해주세요."
              maxLength={80}
              onChange={(e) => setProfile({ introduction: e.target.value.trim() })}
            />
            <P.MaxLengthText>33/80자</P.MaxLengthText>
            <P.SaveBtn disabled={(introduction ?? '')?.length === 0} onClick={() => saveProfile()}>
              저장
            </P.SaveBtn>
          </P.Content>
        </Modal>
      );
    }

    // 활동 지역 편집 모달
    case '활동 지역': {
      const locations = ['서울', '경기', '인천', '강원', '등등'];
      const detailedLocations = ['전체', '수원시', '성남시', '이천시', '남양주시', '등등'];

      const saveLocation = () => {
        console.log(availableLocation);
        closeModal();
      };

      return (
        <Modal
          open={openedModalName === '활동 지역'}
          close={closeModal}
          width="660px"
          height="680px"
          borderRadius="20px"
        >
          <P.Header>
            <P.CloseBtn onClick={() => closeModal()} />
          </P.Header>
          <P.Content>
            {availableLocation.location && (
              <P.Chip>
                <P.ChipLabel>
                  {availableLocation.location} {availableLocation.detailedLocation}
                </P.ChipLabel>
                <P.ChipXBtn
                  onClick={() => setAvailableLocation({ location: null, detailedLocation: null })}
                />
              </P.Chip>
            )}
            <P.LocationContainer>
              <P.Locations>
                <P.LocationsHeader>시/도</P.LocationsHeader>
                <P.LocationScroller>
                  {locations.map((location) => (
                    <P.Location
                      key={location}
                      selected={availableLocation.location === location}
                      onClick={() => setAvailableLocation({ location })}
                    >
                      {location}
                    </P.Location>
                  ))}
                </P.LocationScroller>
              </P.Locations>
              <P.Divider />
              <P.DetailedLocations>
                <P.DetailedLocationsHeader>시/구</P.DetailedLocationsHeader>
                <P.LocationScroller>
                  {detailedLocations.map((detailedLocation) => (
                    <P.DetailedLocation
                      key={detailedLocation}
                      selected={availableLocation.detailedLocation === detailedLocation}
                      onClick={() => setAvailableLocation({ detailedLocation })}
                    >
                      {detailedLocation}
                    </P.DetailedLocation>
                  ))}
                </P.LocationScroller>
              </P.DetailedLocations>
            </P.LocationContainer>
            <P.Options>
              {/* 활동 가능 범위 */}
              <div>
                <P.Title>활동 가능 범위</P.Title>
                <P.SecondaryText>(선택)</P.SecondaryText>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <P.Input
                  style={{ marginTop: '8px', width: '150px' }}
                  disabled={availableLocation.availableAnywhere === true}
                />
                <P.SecondaryText style={{ marginLeft: '13px', fontWeight: '500' }}>
                  km 이내
                </P.SecondaryText>
              </div>
              {/* 전국 어디든 가능 */}
              <P.CheckBoxContainer>
                <P.CheckBox
                  checked={availableLocation.availableAnywhere === true}
                  onClick={() =>
                    setAvailableLocation({
                      availableAnywhere: !availableLocation.availableAnywhere,
                    })
                  }
                >
                  <Check />
                </P.CheckBox>
                <P.CheckBoxLabel>전국 어디든 가능</P.CheckBoxLabel>
              </P.CheckBoxContainer>
              {/* 도서 지방 제외 */}
              <P.CheckBoxContainer>
                <P.CheckBox
                  checked={availableLocation.excludeLimitedArea === true}
                  onClick={() =>
                    setAvailableLocation({
                      excludeLimitedArea: !availableLocation.excludeLimitedArea,
                    })
                  }
                >
                  <Check />
                </P.CheckBox>
                <P.CheckBoxLabel>도서 지방 제외</P.CheckBoxLabel>
              </P.CheckBoxContainer>
            </P.Options>
            <P.SaveBtn onClick={() => saveLocation()}>저장</P.SaveBtn>
          </P.Content>
        </Modal>
      );
    }
  }
};
