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
