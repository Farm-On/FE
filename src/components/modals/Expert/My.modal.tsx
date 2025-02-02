import { Modal } from '@/components/Modal';
import { useEditMyProfileModalStore } from '@/store/modals/useExpertModalStore';

import * as M from '@/styles/components/modals/Expert/My.style';

export const EditMyProfileModal = () => {
  const {
    isEditMyProfileModal,
    closeEditMyProfileModal,
    nickname,
    showNicknameOnly,
    introduction,
    setProfile,
  } = useEditMyProfileModalStore();

  // 저장
  const saveProfile = () => {
    console.log(nickname, showNicknameOnly, introduction);
    closeEditMyProfileModal();
  };

  return (
    <Modal
      open={isEditMyProfileModal}
      close={closeEditMyProfileModal}
      width="900px"
      height="458px"
      borderRadius="20px"
    >
      <M.Header>
        <M.CloseBtn onClick={() => closeEditMyProfileModal()} />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
              >
                <path
                  d="M11.6673 4.41406L5.25065 10.8307L2.33398 7.91406"
                  stroke="white"
                  strokeWidth="1.16667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </M.CheckBox>
            <M.CheckBoxLabel>닉네임만 보여주기</M.CheckBoxLabel>
          </M.CheckBoxContainer>
          <M.MaxLengthText style={{ marginTop: '-4px' }}>3/10자</M.MaxLengthText>
        </div>

        {/* 한 줄 소개 */}
        <M.Title style={{ marginTop: '34px' }}>한 줄 소개</M.Title>
        <M.Input
          placeholder="한 줄 소개를 작성해주세요"
          maxLength={80}
          onChange={(e) => setProfile({ introduction: e.target.value.trim() })}
        />
        <M.MaxLengthText>33/80자</M.MaxLengthText>
        <M.SaveBtn active={(introduction ?? '')?.length > 0} onClick={() => saveProfile()}>
          저장
        </M.SaveBtn>
      </M.Content>
    </Modal>
  );
};
