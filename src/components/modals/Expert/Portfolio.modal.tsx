import { Modal } from '@/components/Modal';
import { useEditMyProfileModalStore } from '@/store/modals/useExpertModalStore';

import * as M from '@/styles/components/modals/Expert/Portfolio.style';

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
          <M.Header>
            <M.CloseBtn onClick={() => closeModal()} />
          </M.Header>
          <M.Content>
            {/* 닉네임 */}
            <M.Title>닉네임</M.Title>
            <M.Input
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
              <M.CheckBoxContainer>
                <M.CheckBox
                  checked={showNicknameOnly === true}
                  onClick={() => setProfile({ showNicknameOnly: !showNicknameOnly })}
                >
                  <Check />
                </M.CheckBox>
                <M.CheckBoxLabel>닉네임만 보여주기</M.CheckBoxLabel>
              </M.CheckBoxContainer>
              <M.MaxLengthText style={{ marginTop: '-4px' }}>3/10자</M.MaxLengthText>
            </div>

            {/* 한 줄 소개 */}
            <M.Title style={{ marginTop: '34px' }}>한 줄 소개</M.Title>
            <M.Input
              placeholder="한 줄 소개를 작성해주세요."
              maxLength={80}
              onChange={(e) => setProfile({ introduction: e.target.value.trim() })}
            />
            <M.MaxLengthText>33/80자</M.MaxLengthText>
            <M.SaveBtn disabled={(introduction ?? '')?.length === 0} onClick={() => saveProfile()}>
              저장
            </M.SaveBtn>
          </M.Content>
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
          <M.Header>
            <M.CloseBtn onClick={() => closeModal()} />
          </M.Header>
          <M.Content>
            {availableLocation.location && (
              <M.Chip>
                <M.ChipLabel>
                  {availableLocation.location} {availableLocation.detailedLocation}
                </M.ChipLabel>
                <M.ChipXBtn
                  onClick={() => setAvailableLocation({ location: null, detailedLocation: null })}
                />
              </M.Chip>
            )}
            <M.LocationContainer>
              <M.Locations>
                <M.LocationsHeader>시/도</M.LocationsHeader>
                <M.LocationScroller>
                  {locations.map((location) => (
                    <M.Location
                      key={location}
                      selected={availableLocation.location === location}
                      onClick={() => setAvailableLocation({ location })}
                    >
                      {location}
                    </M.Location>
                  ))}
                </M.LocationScroller>
              </M.Locations>
              <M.Divider />
              <M.DetailedLocations>
                <M.DetailedLocationsHeader>시/구</M.DetailedLocationsHeader>
                <M.LocationScroller>
                  {detailedLocations.map((detailedLocation) => (
                    <M.DetailedLocation
                      key={detailedLocation}
                      selected={availableLocation.detailedLocation === detailedLocation}
                      onClick={() => setAvailableLocation({ detailedLocation })}
                    >
                      {detailedLocation}
                    </M.DetailedLocation>
                  ))}
                </M.LocationScroller>
              </M.DetailedLocations>
            </M.LocationContainer>
            <M.Options>
              {/* 활동 가능 범위 */}
              <div>
                <M.Title>활동 가능 범위</M.Title>
                <M.SecondaryText>(선택)</M.SecondaryText>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <M.Input
                  style={{ marginTop: '8px', width: '150px' }}
                  disabled={availableLocation.availableAnywhere === true}
                />
                <M.SecondaryText style={{ marginLeft: '13px', fontWeight: '500' }}>
                  km 이내
                </M.SecondaryText>
              </div>
              {/* 전국 어디든 가능 */}
              <M.CheckBoxContainer>
                <M.CheckBox
                  checked={availableLocation.availableAnywhere === true}
                  onClick={() =>
                    setAvailableLocation({
                      availableAnywhere: !availableLocation.availableAnywhere,
                    })
                  }
                >
                  <Check />
                </M.CheckBox>
                <M.CheckBoxLabel>전국 어디든 가능</M.CheckBoxLabel>
              </M.CheckBoxContainer>
              {/* 도서 지방 제외 */}
              <M.CheckBoxContainer>
                <M.CheckBox
                  checked={availableLocation.excludeLimitedArea === true}
                  onClick={() =>
                    setAvailableLocation({
                      excludeLimitedArea: !availableLocation.excludeLimitedArea,
                    })
                  }
                >
                  <Check />
                </M.CheckBox>
                <M.CheckBoxLabel>도서 지방 제외</M.CheckBoxLabel>
              </M.CheckBoxContainer>
            </M.Options>
            <M.SaveBtn onClick={() => saveLocation()}>저장</M.SaveBtn>
          </M.Content>
        </Modal>
      );
    }
  }
};
