import * as E from '@/styles/pages/Expert/Estimates.style';

import { ExpertEstimateCard } from '@/components/ExpertEstimateCard';
import { Pagination } from '@/components/Pagination';
import { useState } from 'react';
import { useFilterModalStore } from '@/store/modals/useExpertModalStore';
import { EstimatesFilterModal } from '@/components/modals/Expert/Estimates.modal';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/api/axios';
import { EstimatesResponse } from '@/api/types/expert/estimates';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '@/store/useAuthStore';
import Crops from '@/constants/Crops';

export default function Estimates() {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);

  // 필터 모달 상태
  const { openFilterModal, Field, Location, DetailedLocation, Budget } = useFilterModalStore();

  const { userInfo } = useAuthStore();
  const [cropCategory, setCropCategory] = useState<{
    menu: keyof typeof Crops | '추천';
    subMenu: string | null;
  }>({
    menu: '추천',
    subMenu: null,
  });

  const { data } = useQuery<EstimatesResponse>({
    queryKey: [
      'expertEstimates',
      cropCategory,
      currentPage,
      Field,
      Location,
      DetailedLocation,
      Budget,
    ],
    queryFn: async () => {
      // 필터 선택 시
      if (Field || Location || DetailedLocation || Budget) {
        const response = await axiosInstance.get('/estimate/expert/filter', {
          params: {
            expertId: cropCategory.menu === '추천' ? userInfo?.expertId : undefined,
            cropCategory: cropCategory.menu,
            cropName: cropCategory.subMenu ?? undefined,
            estimateCategory: Field ?? undefined,
            areaName: Location ?? undefined,
            areaNameDetail: DetailedLocation ?? undefined,
            budget: Budget ?? undefined,
            page: currentPage,
          },
        });

        return response.data;
      }

      if (cropCategory.subMenu) {
        // 서브메뉴 선택 시
        const response = await axiosInstance.get('/estimate/expert/crop-name', {
          params: { cropName: cropCategory.subMenu, page: currentPage },
        });

        return response.data;
      }

      if (cropCategory.menu === '추천') {
        // 추천 메뉴
        const response = await axiosInstance.get(`/estimate/expert/${userInfo?.expertId}/by-crop`, {
          params: { page: currentPage },
        });
        return response.data;
      }

      // 일반 메뉴
      const response = await axiosInstance.get('/estimate/expert/crop-category', {
        params: { cropCategory: cropCategory.menu, page: currentPage },
      });

      return response.data;
    },
  });

  // 메뉴 변경
  const changeMenu = (menu: keyof typeof Crops) => {
    setCurrentPage(1);
    setCropCategory({ menu, subMenu: null });
  };

  // 서브메뉴 변경
  const changeSubMenu = (subMenu: string) => {
    setCurrentPage(1);
    setCropCategory((m) => ({ ...m, subMenu }));
  };

  return (
    <>
      <EstimatesFilterModal />
      <div style={{ marginTop: 84 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <E.Title>견적 찾기</E.Title>
          <E.Container>
            <E.Sidebar>
              {Object.keys(Crops).map((crop) => {
                if (typeof Crops[crop as keyof typeof Crops] === 'object') {
                  return (
                    <div key={crop}>
                      <E.Menu
                        active={crop === cropCategory.menu}
                        onClick={() => changeMenu(crop as keyof typeof Crops)}
                      >
                        {crop}
                      </E.Menu>
                      {crop === cropCategory.menu && (
                        <E.SubMenuContainer>
                          {Crops[crop as keyof typeof Crops].map((subMenu) => (
                            <E.SubMenu
                              key={subMenu}
                              active={subMenu === cropCategory.subMenu}
                              onClick={() => changeSubMenu(subMenu)}
                            >
                              {subMenu}
                            </E.SubMenu>
                          ))}
                        </E.SubMenuContainer>
                      )}
                    </div>
                  );
                } else {
                  return (
                    <E.Menu
                      key={crop}
                      active={crop === cropCategory.menu}
                      onClick={() => changeMenu(crop as keyof typeof Crops)}
                    >
                      {crop}
                    </E.Menu>
                  );
                }
              })}
            </E.Sidebar>
            <E.Content>
              <E.Header>
                <E.SelectedCategoryLabel>
                  {cropCategory.menu}
                  {cropCategory.subMenu ? ` > ${cropCategory.subMenu}` : null}
                </E.SelectedCategoryLabel>
                <E.FilterBtn onClick={() => openFilterModal()} />
              </E.Header>
              <E.Grid>
                {data?.result.estimateList.map((estimate) => (
                  <ExpertEstimateCard
                    key={estimate.estimateId}
                    id={estimate.estimateId}
                    title={estimate.title}
                    subtitle={`${estimate.cropName} (${estimate.cropCategory}) | ${estimate.estimateCategory} | ${estimate.areaName} ${estimate.areaNameDetail}`}
                    estimatedCost={estimate.budget}
                    date={estimate.createdAt}
                    onClick={() => navigate(`/expert/estimate/${estimate.estimateId}`)}
                  />
                ))}
              </E.Grid>
              <Pagination
                totalPages={data?.result.totalPage ?? 0}
                currentPage={currentPage}
                onPageClick={(page) => setCurrentPage(page)}
              />
            </E.Content>
          </E.Container>
        </div>
      </div>
    </>
  );
}
