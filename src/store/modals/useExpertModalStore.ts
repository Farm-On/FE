import { create } from 'zustand';

// 견적 찾기 페이지 - 필터 모달
interface FilterModal {
  isFilterModalOpen: boolean;
  openFilterModal: () => void;
  closeFilterModal: () => void;
  Field: string | null; // 분야
  Location: string | null; // 지역
  DetailedLocation: string | null; // 세부 지역
  Budget: string | null; // 예산
  setFilter: (
    filters: Partial<Pick<FilterModal, 'Field' | 'Location' | 'DetailedLocation' | 'Budget'>>
  ) => void; // 필터 적용
}

export const useFilterModalStore = create<FilterModal>((set) => ({
  isFilterModalOpen: false,
  openFilterModal: () => set(() => ({ isFilterModalOpen: true })),
  closeFilterModal: () => set(() => ({ isFilterModalOpen: false })),
  Field: null,
  Location: null,
  DetailedLocation: null,
  Budget: null,
  setFilter: (filters) => set(() => ({ ...filters })),
}));

// 전문가, 내 프로필 > 내프로필 편집 모달
interface EditMyProfile {
  isEditMyProfileModalOpen: boolean;
  openEditMyProfileModal: () => void;
  closeEditMyProfileModal: () => void;
  nickname: string | null;
  showNicknameOnly: boolean;
  introduction: string | null;
  setProfile: (
    profile: Partial<Pick<EditMyProfile, 'nickname' | 'showNicknameOnly' | 'introduction'>>
  ) => void;
}

export const useEditMyProfileModalStore = create<EditMyProfile>((set) => ({
  isEditMyProfileModalOpen: false,
  openEditMyProfileModal: () => set(() => ({ isEditMyProfileModalOpen: true })),
  closeEditMyProfileModal: () => set(() => ({ isEditMyProfileModalOpen: false })),
  nickname: null,
  showNicknameOnly: false,
  introduction: null,
  setProfile: (profile) => set(() => ({ ...profile })),
}));

// 전문가, 내 프로필 > 내 포트폴리오 편집
interface EditMyPortfolio {
  openedModalName: '경력' | '추가정보' | '활동 지역' | '대표 서비스' | null;
  openModal: (name: '경력' | '추가정보' | '활동 지역' | '대표 서비스') => void;
  closeModal: () => void;
  // 경력
  career: {
    title: string | null;
    startYear: number | null;
    startMonth: number | null;
    endYear: number | null;
    endMonth: number | null;
    isOngoing: boolean;
    detail1: string | null;
    detail2: string | null;
    detail3: string | null;
    detail4: string | null;
  };
  // 추가정보
  additionalInfo: string | null;
  // 대표 서비스
  mainService: {
    field: string | null;
    detailedField: string | null;
    detail1: string | null;
    detail2: string | null;
    detail3: string | null;
    detail4: string | null;
  };
  // 활동 지역
  availableLocation: {
    location: string | null;
    detailedLocation: string | null;
    availableRange: number | null;
    availableAnywhere: boolean;
    excludeLimitedArea: boolean; // 도서 지방 제외
  };
  setCareer: (career: Partial<EditMyPortfolio['career']>) => void;
  setAdditionalInfo: (additionalInfo: string | null) => void;
  setMainService: (mainService: Partial<EditMyPortfolio['mainService']>) => void;
  setAvailableLocation: (availableLocation: Partial<EditMyPortfolio['availableLocation']>) => void;
}

export const useEditMyPortfolioModalStore = create<EditMyPortfolio>((set) => ({
  openedModalName: null,
  openModal: (name) => set(() => ({ openedModalName: name })),
  closeModal: () => set(() => ({ openedModalName: null })),
  career: {
    title: null,
    startYear: null,
    startMonth: null,
    endYear: null,
    endMonth: null,
    isOngoing: false,
    detail1: null,
    detail2: null,
    detail3: null,
    detail4: null,
  },
  additionalInfo: null,
  mainService: {
    field: null,
    detailedField: null,
    detail1: null,
    detail2: null,
    detail3: null,
    detail4: null,
  },
  availableLocation: {
    location: null,
    detailedLocation: null,
    availableRange: null,
    availableAnywhere: false,
    excludeLimitedArea: false,
  },
  setCareer: (career) => set((state) => ({ career: { ...state.career, ...career } })),
  setAdditionalInfo: (additionalInfo) => set(() => ({ additionalInfo })),
  setMainService: (mainService) =>
    set((state) => ({ mainService: { ...state.mainService, ...mainService } })),
  setAvailableLocation: (availableLocation) =>
    set((state) => ({ availableLocation: { ...state.availableLocation, ...availableLocation } })),
}));
