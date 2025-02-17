import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as L from '@/styles/pages/ExpertRegistration/Location.style';
import XIcon from '@/assets/icons/greenX.svg?react';
import { useExpertSignup } from '@/hooks/useAuth';
import useAuthStore from '@/store/useAuthStore';

type LocationData = {
  [key: string]: string[];
};
const locationData: LocationData = {
  서울: [
    '서울전체',
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '광진구',
    '구로구',
    '금천구',
    '노원구',
    '도봉구',
    '동대문구',
    '동작구',
    '마포구',
    '서대문구',
    '서초구',
    '성동구',
    '성북구',
    '송파구',
    '양천구',
    '영등포구',
    '용산구',
    '은평구',
    '종로구',
    '중구',
    '중랑구',
  ],
  경기: [
    '경기전체',
    '수원시',
    '성남시',
    '안양시',
    '용인시',
    '안산시',
    '고양시',
    '부천시',
    '광명시',
    '평택시',
    '시흥시',
    '군포시',
    '의왕시',
    '하남시',
    '이천시',
    '김포시',
    '안성시',
    '구리시',
    '남양주시',
    '오산시',
    '화성시',
    '여주시',
    '양평군',
    '파주시',
    '연천군',
    '포천시',
    '동두천시',
    '가평군',
    '양주시',
    '의정부시',
  ],
  인천: [
    '인천전체',
    '중구',
    '동구',
    '남동구',
    '미추홀구',
    '연수구',
    '부평구',
    '계양구',
    '서구',
    '강화군',
    '옹진군',
  ],
  강원: [
    '강원전체',
    '춘천시',
    '원주시',
    '강릉시',
    '동해시',
    '태백시',
    '속초시',
    '삼척시',
    '홍천군',
    '횡성군',
    '영월군',
    '평창군',
    '정선군',
    '철원군',
    '화천군',
    '양구군',
    '인제군',
    '고성군',
    '양양군',
  ],
  대전: ['대전전체', '동구', '중구', '서구', '유성구', '대덕구'],
  세종: ['세종시'],
  충남: [
    '충남전체',
    '천안시',
    '공주시',
    '보령시',
    '아산시',
    '서산시',
    '논산시',
    '계룡시',
    '당진시',
    '금산군',
    '부여군',
    '서천군',
    '청양군',
    '홍성군',
    '예산군',
    '태안군',
  ],
  충북: [
    '충북전체',
    '청주시',
    '충주시',
    '제천시',
    '보은군',
    '옥천군',
    '영동군',
    '증평군',
    '진천군',
    '괴산군',
    '음성군',
    '단양군',
  ],
  부산: [
    '부산전체',
    '중구',
    '서구',
    '동구',
    '영도구',
    '부산진구',
    '동래구',
    '남구',
    '북구',
    '해운대구',
    '사하구',
    '금정구',
    '강서구',
    '연제구',
    '수영구',
    '사상구',
    '기장군',
  ],
  울산: ['울산전체', '중구', '남구', '동구', '북구', '울주군'],
  경남: [
    '경남전체',
    '창원시',
    '진주시',
    '통영시',
    '사천시',
    '김해시',
    '밀양시',
    '거제시',
    '양산시',
    '의령군',
    '함안군',
    '창녕군',
    '고성군',
    '남해군',
    '하동군',
    '산청군',
    '함양군',
    '거창군',
    '합천군',
  ],
  경북: [
    '경북 전체',
    '포항시',
    '경주시',
    '김천시',
    '안동시',
    '구미시',
    '영주시',
    '영천시',
    '상주시',
    '문경시',
    '경산시',
    '의성군',
    '청송군',
    '영양군',
    '영덕군',
    '청도군',
    '고령군',
    '성주군',
    '칠곡군',
    '예천군',
    '봉화군',
    '울진군',
    '울릉군',
  ],
  대구: ['대구전체', '중구', '동구', '서구', '남구', '북구', '수성구', '달서구', '달성군'],
  광주: ['광주전체', '동구', '서구', '남구', '북구', '광산구'],
  전남: [
    '전남전체',
    '목포시',
    '여수시',
    '순천시',
    '나주시',
    '광양시',
    '담양군',
    '곡성군',
    '구례군',
    '고흥군',
    '보성군',
    '화순군',
    '장흥군',
    '강진군',
    '해남군',
    '영암군',
    '무안군',
    '함평군',
    '영광군',
    '장성군',
    '완도군',
    '진도군',
    '신안군',
  ],
  전북: [
    '전북전체',
    '전주시',
    '군산시',
    '익산시',
    '정읍시',
    '남원시',
    '김제시',
    '완주군',
    '진안군',
    '무주군',
    '장수군',
    '임실군',
    '순창군',
    '고창군',
    '부안군',
  ],
  제주: ['제주전체', '제주시', '서귀포시'],
  전국: ['전국전체'],
};

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
          navigate('/register-complete');
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
