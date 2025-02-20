import { ProfileResponse } from '@/api/types/expert/profile';
import { Modal } from '@/components/Modal';
import { MonthSelectDropDown } from '@/components/MonthSelectDropDown';
import { YearSelectDropDown } from '@/components/YearSelectDropDown';
import { useEditCareer, useEditDetail, useEditMainService } from '@/hooks/useEditPortfolio';
import { useEditMyPortfolioModalStore } from '@/store/modals/useExpertModalStore';
import { useQueryClient } from '@tanstack/react-query';

import * as ME from '@/styles/components/modals/Expert/PortfolioEdit.style';
import Crops from '@/constants/Crops';

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

  const queryClient = useQueryClient();

  // 추가정보 hook
  const { mutate: editDetail } = useEditDetail();

  // 경력 hook
  const {
    data: careerData,
    mutate: { mutate: editCareer },
  } = useEditCareer();

  // 대표 서비스 hook
  const { mutate: editMainService } = useEditMainService();

  // 모달들
  switch (openedModalName) {
    case '경력': {
      //경력 저장
      const saveCareer = () => {
        console.log(career);

        editCareer({
          careerId: career.careerId, // null이면 경력 등록
          title: career.title!,
          startYear: career.startYear!,
          startMonth: career.startMonth!,
          endYear: career.endYear,
          endMonth: career.endMonth,
          detailContent1: career.detail1 || null,
          detailContent2: career.detail2 || null,
          detailContent3: career.detail3 || null,
          detailContent4: career.detail4 || null,
          isOngoing: career.isOngoing,
        });

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
              defaultValue={careerData?.title}
              placeholder="제목을 입력해주세요."
              maxLength={20}
              style={{ marginTop: '8px' }}
              onChange={(e) => setCareer({ title: e.target.value.trim() })}
            />
            <ME.MaxLengthText>{career.title?.length ?? 0}/20자</ME.MaxLengthText>

            {/* 시작 일시 */}
            <ME.Title>시작 일시</ME.Title>
            <ME.Dropdowns>
              <YearSelectDropDown
                year={careerData?.startYear || career.startYear}
                onYearSelect={(year) => setCareer({ startYear: year })}
              />
              <MonthSelectDropDown
                month={careerData?.startMonth || career.startMonth}
                onMonthSelect={(month) => setCareer({ startMonth: month })}
              />
            </ME.Dropdowns>

            {/* 종료 일시 */}
            <ME.Title style={{ marginTop: '28px' }}>종료 일시</ME.Title>
            <ME.Dropdowns>
              <YearSelectDropDown
                year={careerData?.endYear || career.endYear}
                onYearSelect={(year) => setCareer({ endYear: year })}
                disabled={career.isOngoing}
              />
              <MonthSelectDropDown
                month={careerData?.endMonth || career.endMonth}
                onMonthSelect={(month) => setCareer({ endMonth: month })}
                disabled={career.isOngoing}
              />
              <ME.CheckBoxContainer>
                <ME.CheckBox
                  defaultChecked={careerData?.isOngoing}
                  checked={career.isOngoing === true}
                  onClick={() => setCareer({ isOngoing: !career.isOngoing })}
                >
                  <Check />
                </ME.CheckBox>
                <ME.CheckBoxLabel
                  onClick={() => setCareer({ isOngoing: true, endYear: null, endMonth: null })}
                >
                  진행 중
                </ME.CheckBoxLabel>
              </ME.CheckBoxContainer>
            </ME.Dropdowns>

            {/* 상세 설명 */}
            <ME.Title style={{ marginTop: '42px' }}>상세 설명</ME.Title>
            <ME.Inputs>
              <ME.Input
                placeholder="내용을 입력해주세요."
                defaultValue={careerData?.detailContent1 || ''}
                onChange={(e) => setCareer({ detail1: e.target.value.trim() })}
              />
              <ME.Input
                placeholder="내용을 입력해주세요."
                defaultValue={careerData?.detailContent2 || ''}
                onChange={(e) => setCareer({ detail2: e.target.value.trim() })}
              />
              <ME.Input
                placeholder="내용을 입력해주세요."
                defaultValue={careerData?.detailContent3 || ''}
                onChange={(e) => setCareer({ detail3: e.target.value.trim() })}
              />
              <ME.Input
                placeholder="내용을 입력해주세요."
                defaultValue={careerData?.detailContent4 || ''}
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

        editDetail({ content: additionalInfo! });

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
              defaultValue={
                queryClient.getQueryData<ProfileResponse>(['expertMyPortfolio'])?.result
                  .additionalInformation ?? ''
              }
              maxLength={100}
              onChange={(e) => setAdditionalInfo(e.target.value.trim())}
            />
            <ME.MaxLengthText style={{ marginRight: '3px' }}>
              {additionalInfo?.length ?? '0'}/100자
            </ME.MaxLengthText>
            <ME.SaveBtn onClick={() => saveAdditionalInfo()}>저장</ME.SaveBtn>
          </ME.Content>
        </Modal>
      );
    }

    case '대표 서비스': {
      const saveMainService = () => {
        console.log(mainService);

        editMainService({
          crop: mainService.detailedField!,
          serviceDetail1: mainService.detail1,
          serviceDetail2: mainService.detail2,
          serviceDetail3: mainService.detail3,
          serviceDetail4: mainService.detail4,
        });

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
                  {Object.keys(Crops).map((crop) => (
                    <ME.Field
                      key={crop}
                      selected={mainService.field === crop}
                      onClick={() => setMainService({ field: crop, detailedField: null })}
                    >
                      {crop}
                    </ME.Field>
                  ))}
                </ME.FieldScroller>
              </ME.Fields>
              <ME.Divider />
              <ME.DetailedFields>
                <ME.DetailedFieldsHeader>시/구</ME.DetailedFieldsHeader>
                <ME.FieldScroller>
                  {Crops[mainService.field as keyof typeof Crops]?.map((crop) => (
                    <ME.DetailedField
                      key={crop}
                      selected={mainService.detailedField === crop}
                      onClick={() => setMainService({ detailedField: crop })}
                    >
                      {crop}
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
