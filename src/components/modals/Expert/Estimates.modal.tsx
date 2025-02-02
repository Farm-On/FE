import { Modal } from '@/components/Modal';
import * as EFM from '@/styles/components/modals/EstimatesFilterModal.style';
import { useFilterModalStore } from '@/store/modals/useExpertModalStore';
import { Fragment, ReactNode, useState } from 'react';

import CheckGreen from '@/assets/icons/CheckGreen.svg?react';

// 필터 - 분야
const FieldsList = [
  '작물 관리',
  '토양 및 환경관리',
  '농업 경영',
  '스마트팜',
  '정책 및 지원사업',
  '기타',
];

// 필터 - 위치
const LocationsList = [
  '전국',
  '서울',
  '세종',
  '강원',
  '인천',
  '경기',
  '충북',
  '충남',
  '경북',
  '대전',
];

// 필터 - 세부 위치
const DetailedLocations = {
  서울: ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구'],
  세종: [],
  강원: [],
  인천: [],
  경기: [],
  충북: [],
  충남: [],
  경북: [],
  대전: [],
};

const BudgetsList = [
  '10만원 ~ 50만원',
  '50만원 ~ 100만원',
  '100만원 ~ 200만원',
  '200만원 ~ 500만원',
  '500만원 ~ 1,000만원',
  '1,000만원 이상',
];

export const EstimatesFilterModal = () => {
  const {
    isFilterModalOpen,
    closeFilterModal,
    Field,
    Location,
    DetailedLocation,
    Budget,
    setFilter,
  } = useFilterModalStore();

  // 분야 or 위치 or 예산 탭
  const [currentTab, setCurrentTab] = useState('분야');

  // 탭 레이블
  const Tab = ({ children: name }: { children: string }) => (
    <EFM.TabLabel active={currentTab === name} onClick={() => setCurrentTab(name)}>
      {name}
    </EFM.TabLabel>
  );

  // 탭 내용 보여주는 곳
  const TabContent = ({
    value,
    children,
  }: {
    value: '분야' | '위치' | '예산';
    children: ReactNode;
  }) => (currentTab === value ? children : undefined);

  // 필터 적용
  const applyFilter = () => {
    console.log(Field, Location, DetailedLocation, Budget);
    closeFilterModal();
  };

  return (
    <Modal
      open={isFilterModalOpen}
      close={closeFilterModal}
      width="450px"
      height="600px"
      borderRadius="10px"
    >
      <EFM.Container>
        <EFM.Header>
          <EFM.Title>필터</EFM.Title>
          <EFM.CloseBtn onClick={() => closeFilterModal()} />
        </EFM.Header>
        <EFM.Content>
          <EFM.Tabs>
            <Tab>분야</Tab>
            <Tab>위치</Tab>
            <Tab>예산</Tab>
          </EFM.Tabs>

          {/* 분야 탭 */}
          <TabContent value="분야">
            <EFM.Items>
              {FieldsList.map((field) => (
                <EFM.RadioItem key={field} onClick={() => setFilter({ Field: field })}>
                  {Field === field ? <EFM.SelectedRadioBtn /> : <EFM.UnselectedRadioBtn />}
                  <EFM.ItemText selected={Field === field}>{field}</EFM.ItemText>
                </EFM.RadioItem>
              ))}
            </EFM.Items>
          </TabContent>

          {/* 위치 탭 */}
          <TabContent value="위치">
            <EFM.ListItems>
              {LocationsList.map((location) => (
                <Fragment key={location}>
                  <EFM.ListItem
                    selected={
                      location === Location ? (Location === '전국' ? 'all' : true) : undefined
                    }
                    onClick={() => setFilter({ Location: location === Location ? null : location })}
                  >
                    <EFM.ItemText>{location}</EFM.ItemText>
                    {/* 전국 */}
                    {location === Location && Location === '전국' && <CheckGreen />}
                    {/* 전국 아니면 */}
                    {location === Location && Location !== '전국' && (
                      <EFM.ChevronDown active={true} />
                    )}
                    {location !== Location && <EFM.ChevronDown />}
                  </EFM.ListItem>
                  {/* 세부 위치 목록 */}
                  {location === Location &&
                    Location !== '전국' &&
                    DetailedLocations[Location as keyof typeof DetailedLocations].map(
                      (detailedLocation) => (
                        <EFM.SubListItem
                          key={detailedLocation}
                          selected={detailedLocation === DetailedLocation}
                          onClick={() => setFilter({ DetailedLocation: detailedLocation })}
                        >
                          {detailedLocation}
                        </EFM.SubListItem>
                      )
                    )}
                </Fragment>
              ))}
            </EFM.ListItems>
          </TabContent>

          {/* 예산 탭 */}
          <TabContent value="예산">
            <EFM.Items>
              {BudgetsList.map((budget) => (
                <EFM.RadioItem key={budget} onClick={() => setFilter({ Budget: budget })}>
                  {Budget === budget ? <EFM.SelectedRadioBtn /> : <EFM.UnselectedRadioBtn />}
                  <EFM.ItemText selected={Budget === budget}>{budget}</EFM.ItemText>
                </EFM.RadioItem>
              ))}
            </EFM.Items>
          </TabContent>
        </EFM.Content>
        <EFM.Footer>
          <EFM.ApplyBtn onClick={() => applyFilter()}>적용하기</EFM.ApplyBtn>
        </EFM.Footer>
      </EFM.Container>
    </Modal>
  );
};
