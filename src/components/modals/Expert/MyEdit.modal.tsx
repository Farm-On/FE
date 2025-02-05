import { Modal } from '@/components/Modal';
import { useEditMyPortfolioModalStore } from '@/store/modals/useExpertModalStore';

import * as ME from '@/styles/components/modals/Expert/MyEdit.style';

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

export const EditMyPortfolioModal = () => {
  const {
    closeModal,
    openedModalName,
    career,
    setCareer,
    additionalInfo,
    setAdditionalInfo,
    mainService,
    setMainService,
  } = useEditMyPortfolioModalStore();

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
                  <Check />
                </ME.CheckBox>
                <ME.CheckBoxLabel>진행 중</ME.CheckBoxLabel>
              </ME.CheckBoxContainer>
            </ME.Dropdowns>

            {/* 상세 설명 */}
            <ME.Title style={{ marginTop: '42px' }}>상세 설명</ME.Title>
            <ME.Inputs>
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
            </ME.Inputs>
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

    case '추가정보': {
      const saveAdditionalInfo = () => {
        console.log(additionalInfo);
        closeModal();
      };

      return (
        <Modal
          open={openedModalName === '추가정보'}
          close={() => closeModal()}
          width="660px"
          height="591px"
          borderRadius="20px"
        >
          <ME.Header>
            <ME.CloseBtn onClick={() => closeModal()} />
          </ME.Header>
          <ME.Content>
            {/* 추가정보 */}
            <ME.Title>추가정보</ME.Title>
            <ME.TextArea
              placeholder="내용을 입력해주세요"
              onChange={(e) => setAdditionalInfo(e.target.value.trim())}
            />
            <ME.MaxLengthText style={{ marginRight: '3px' }}>0/100자</ME.MaxLengthText>
            <ME.SaveBtn onClick={() => saveAdditionalInfo()}>저장</ME.SaveBtn>
          </ME.Content>
        </Modal>
      );
    }

    case '대표 서비스': {
      const fields = ['곡물', '채소작물', '과일', '특용', '등등'];
      const detailedFields = ['감자', '엽채류', '과채류', '버섯', '기타 뿌리채소', '등등'];

      const saveMainService = () => {
        console.log(mainService);
        closeModal();
      };

      return (
        <Modal
          open={openedModalName === '대표 서비스'}
          close={() => closeModal()}
          width="660px"
          height="870px"
          borderRadius="20px"
        >
          <ME.Header>
            <ME.CloseBtn onClick={() => closeModal()} />
          </ME.Header>
          <ME.Content>
            {mainService.field && (
              <ME.Chip>
                <ME.ChipLabel>
                  {mainService.field}{' '}
                  {mainService.detailedField ? `(${mainService.detailedField})` : null}
                </ME.ChipLabel>
                <ME.ChipXBtn onClick={() => setMainService({ field: null, detailedField: null })} />
              </ME.Chip>
            )}
            <ME.FieldContainer>
              <ME.Fields>
                <ME.FieldsHeader>시/도</ME.FieldsHeader>
                <ME.FieldScroller>
                  {fields.map((field) => (
                    <ME.Field
                      key={field}
                      selected={mainService.field === field}
                      onClick={() => setMainService({ field })}
                    >
                      {field}
                    </ME.Field>
                  ))}
                </ME.FieldScroller>
              </ME.Fields>
              <ME.Divider />
              <ME.DetailedFields>
                <ME.DetailedFieldsHeader>시/구</ME.DetailedFieldsHeader>
                <ME.FieldScroller>
                  {detailedFields.map((detailedField) => (
                    <ME.DetailedField
                      key={detailedField}
                      selected={mainService.detailedField === detailedField}
                      onClick={() => setMainService({ detailedField })}
                    >
                      {detailedField}
                    </ME.DetailedField>
                  ))}
                </ME.FieldScroller>
              </ME.DetailedFields>
            </ME.FieldContainer>
            <ME.Title style={{ marginTop: '34px' }}>상세 설명</ME.Title>
            <ME.Inputs>
              <ME.Input
                placeholder="내용을 입력해주세요."
                onChange={(e) => setMainService({ detail1: e.target.value.trim() })}
              />
              <ME.Input
                placeholder="내용을 입력해주세요."
                onChange={(e) => setMainService({ detail2: e.target.value.trim() })}
              />
              <ME.Input
                placeholder="내용을 입력해주세요."
                onChange={(e) => setMainService({ detail3: e.target.value.trim() })}
              />
              <ME.Input
                placeholder="내용을 입력해주세요."
                onChange={(e) => setMainService({ detail4: e.target.value.trim() })}
              />
            </ME.Inputs>
            <ME.SaveBtn onClick={() => saveMainService()}>저장</ME.SaveBtn>
          </ME.Content>
        </Modal>
      );
    }
  }
};
