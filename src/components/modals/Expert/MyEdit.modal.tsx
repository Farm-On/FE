import { Modal } from '@/components/Modal';
import { useEditMyPortfolioModalStore } from '@/store/modals/useExpertModalStore';

import * as ME from '@/styles/components/modals/Expert/MyEdit.style';

export const EditMyPortfolioModal = () => {
  const { closeModal, openedModalName, career, setCareer } = useEditMyPortfolioModalStore();

  // 모달들
  switch (openedModalName) {
    case '경력': {
      //경력 저장
      const saveCareer = () => {
        console.log(career);
        closeModal();
      };

      return (
        <Modal
          open={openedModalName === '경력'}
          close={() => closeModal()}
          width="660px"
          height="870px"
          borderRadius="20px"
        >
          <ME.Header>
            <ME.CloseBtn onClick={() => closeModal()} />
          </ME.Header>
          <ME.Content>
            {/* 타이틀 */}
            <ME.Title>타이틀</ME.Title>
            <ME.Input
              placeholder="제목을 입력해주세요."
              maxLength={20}
              style={{ marginTop: '8px' }}
              onChange={(e) => setCareer({ title: e.target.value.trim() })}
            />
            <ME.MaxLengthText>0/20자</ME.MaxLengthText>

            {/* 시작 일시 */}
            <ME.Title>시작 일시</ME.Title>
            <ME.Dropdowns>
              <ME.Dropdown selected>
                <ME.DropdownLabel>2009</ME.DropdownLabel>
                <ME.ChevronDown />
              </ME.Dropdown>
              <ME.Dropdown selected>
                <ME.DropdownLabel>6</ME.DropdownLabel>
                <ME.ChevronDown />
              </ME.Dropdown>
            </ME.Dropdowns>

            {/* 종료 일시 */}
            <ME.Title style={{ marginTop: '28px' }}>종료 일시</ME.Title>
            <ME.Dropdowns>
              <ME.Dropdown>
                <ME.DropdownLabel>년도</ME.DropdownLabel>
                <ME.ChevronDown />
              </ME.Dropdown>
              <ME.Dropdown>
                <ME.DropdownLabel>월</ME.DropdownLabel>
                <ME.ChevronDown />
              </ME.Dropdown>
              <ME.CheckBoxContainer>
                <ME.CheckBox
                  checked={career.isOngoing === true}
                  onClick={() => setCareer({ isOngoing: !career.isOngoing })}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M11.6654 3.5L5.2487 9.91667L2.33203 7"
                      stroke="white"
                      strokeWidth="1.16667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ME.CheckBox>
                <ME.CheckBoxLabel>진행 중</ME.CheckBoxLabel>
              </ME.CheckBoxContainer>
            </ME.Dropdowns>

            {/* 상세 설명 */}
            <ME.Title style={{ marginTop: '42px' }}>상세 설명</ME.Title>
            <div
              style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '14px' }}
            >
              <ME.Input
                placeholder="내용을 입력해주세요."
                onChange={(e) => setCareer({ detail1: e.target.value.trim() })}
              />
              <ME.Input
                placeholder="내용을 입력해주세요."
                onChange={(e) => setCareer({ detail2: e.target.value.trim() })}
              />
              <ME.Input
                placeholder="내용을 입력해주세요."
                onChange={(e) => setCareer({ detail3: e.target.value.trim() })}
              />
              <ME.Input
                placeholder="내용을 입력해주세요."
                onChange={(e) => setCareer({ detail4: e.target.value.trim() })}
              />
            </div>
            <ME.SaveBtn
              disabled={(() => {
                /* TODO */
                return false;
              })()}
              onClick={() => saveCareer()}
            >
              저장
            </ME.SaveBtn>
          </ME.Content>
        </Modal>
      );
    }

    case '추가정보':
      return (
        <Modal
          open={openedModalName === '추가정보'}
          close={() => closeModal()}
          width="900px"
          height="458px"
          borderRadius="20px"
        ></Modal>
      );

    case '대표 서비스':
      return (
        <Modal
          open={openedModalName === '대표 서비스'}
          close={() => closeModal()}
          width="900px"
          height="458px"
          borderRadius="20px"
        ></Modal>
      );

    case '활동 지역':
      return (
        <Modal
          open={openedModalName === '활동 지역'}
          close={() => closeModal()}
          width="900px"
          height="458px"
          borderRadius="20px"
        ></Modal>
      );
  }
};
