import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as L from '@/styles/pages/ExpertRegistration/Location.style';
import XIcon from '@/assets/icons/greenX.svg?react';
import { useExpertSignup } from '@/hooks/useAuth';
import useAuthStore from '@/store/useAuthStore';
import CityList from '@/constants/CityList';

type LocationData = {
  [key: string]: string[];
};
const locationData: LocationData = CityList;

export default function Location() {
  const navigate = useNavigate();
  const { userInfo } = useAuthStore();
  console.log('로그인된 사용자 정보:', userInfo);
  const userId = userInfo?.userId;
  console.log('사용자 ID:', userId);
  const expertCrop = localStorage.getItem('selectedCategoryDetail') || '기타';
  console.log('전문가 카테고리:', expertCrop);
  const { mutate: expertSignup } = useExpertSignup();

  // 현재 선택된 시/도
  const [selectedSido, setSelectedSido] = useState<string>('서울');
  // 시/구/군 선택 상태 (최대 5개)
  const [selectedSubLocations, setSelectedSubLocations] = useState<string[]>([]);

  // 왼쪽 시/도 클릭
  const handleSidoClick = (sido: string) => {
    setSelectedSido(sido);
  };

  // 오른쪽 시/구/군 클릭
  const handleSubLocationClick = (sub: string) => {
    const alreadySelected = selectedSubLocations.includes(sub);
    if (alreadySelected) {
      // 해제
      setSelectedSubLocations((prev) => prev.filter((item) => item !== sub));
    } else {
      // 추가 (최대 5개)
      if (selectedSubLocations.length >= 1) {
        alert('1개만 선택 가능합니다.');
        return;
      }
      setSelectedSubLocations((prev) => [...prev, sub]);
    }
  };

  // 선택된 시/도의 시/구/군 목록
  const currentSubLocations = locationData[selectedSido] || [];

  const handleNextClick = () => {
    if (selectedSubLocations.length === 0) {
      alert('최소 1개 이상의 지역을 선택해주세요.');
      return;
    }

    if (!userId) {
      alert('로그인이 필요합니다.');
      return;
    }

    const requestData = {
      expertCrop,
      expertLocation: selectedSubLocations.join(','),
    };
    console.log('전송할 데이터:', requestData);

    expertSignup(
      { userId, data: requestData },
      {
        onSuccess: () => {
          alert('전문가 등록이 완료되었습니다!');
          navigate('/expert/register/complete');
        },
        onError: (error) => {
          console.error('전문가 등록 실패:', error);
          alert('전문가 등록에 실패했습니다.');
        },
      }
    );
  };

  return (
    <L.Container>
      <L.Main>
        <L.Title>주로 활동하는 컨설팅 위치는 어디인가요?</L.Title>
        <L.TagListWrapper>
          {selectedSubLocations.map((item) => (
            <L.TagContainer key={item}>
              <L.TagInner>
                <L.TagLabel>{`${selectedSido} ${item}`}</L.TagLabel>
                <L.TagCloseIconContainer onClick={() => handleSubLocationClick(item)}>
                  <XIcon />
                </L.TagCloseIconContainer>
              </L.TagInner>
            </L.TagContainer>
          ))}
        </L.TagListWrapper>
        <L.LocationListWrapper>
          <L.SidoListContainer>
            {Object.keys(locationData).map((sido) => (
              <L.SidoItem
                key={sido}
                selected={selectedSido === sido}
                onClick={() => handleSidoClick(sido)}
              >
                {sido}
              </L.SidoItem>
            ))}
          </L.SidoListContainer>
          <L.SubLocationListContainer>
            {currentSubLocations.map((sub) => (
              <L.SubLocationItem
                key={sub}
                selected={selectedSubLocations.includes(sub)}
                onClick={() => handleSubLocationClick(sub)}
              >
                {sub}
              </L.SubLocationItem>
            ))}
          </L.SubLocationListContainer>
        </L.LocationListWrapper>
      </L.Main>
      <L.ButtonContainer>
        <L.PrevButton onClick={() => navigate(-1)}>이전으로</L.PrevButton>
        <L.NextButton disabled={selectedSubLocations.length === 0} onClick={handleNextClick}>
          다음으로
        </L.NextButton>
      </L.ButtonContainer>
    </L.Container>
  );
}
