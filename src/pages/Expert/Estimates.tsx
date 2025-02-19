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

const menus = {
  추천: '',
  곡물: {
    쌀: 'key1',
    보리: 'key2',
    옥수수: 'key3',
    콩: 'key4',
    '기타 곡물': 'key5',
  },
  채소작물: {
    고구마: 'key6',
    감자: 'key7',
    엽채류: 'key8',
    과채류: 'key9',
    버섯: 'key10',
    '기타 뿌리채소': 'key11',
    '기타 채소': 'key12',
  },
  과일: {
    사과: 'key13',
    배: 'key14',
    감: 'key15',
    포도: 'key16',
    복숭아: 'key17',
    감귤: 'key18',
    '기타 과일': 'key19',
  },
  특용: {
    인삼: 'key20',
    약초: 'key21',
    섬유: 'key22',
    유지: 'key23',
    향신료: 'key24',
    '기타 특용': 'key25',
  },
  화훼: {
    '절화 및 절엽': 'key26',
    '분화 및 분재': 'key27',
    묘목: 'key28',
    '기타 화훼': 'key29',
  },
  사료: {
    목초: 'key30',
    '기타 사료': 'key31',
  },
  기타: {
    '종지, 묘목': 'key32',
    '기타 작물': 'key33',
  },
} as const;

export default function Estimates() {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);

  // 필터 모달 상태
  const { openFilterModal, Field, Location, DetailedLocation, Budget } = useFilterModalStore();

  const { userInfo } = useAuthStore();
  const [cropCategory, setCropCategory] = useState<{
    menu: keyof typeof menus;
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
  const changeMenu = (menu: keyof typeof menus) => {
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
              {Object.keys(menus).map((menu) => {
                if (typeof menus[menu as keyof typeof menus] === 'object') {
                  return (
                    <div key={menu}>
                      <E.Menu
                        active={menu === cropCategory.menu}
                        onClick={() => changeMenu(menu as keyof typeof menus)}
                      >
                        {menu}
                      </E.Menu>
                      {menu === cropCategory.menu && (
                        <E.SubMenuContainer>
                          {Object.keys(menus[menu as keyof typeof menus]).map((subMenu) => (
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
                      key={menu}
                      active={menu === cropCategory.menu}
                      onClick={() => changeMenu(menu as keyof typeof menus)}
                    >
                      {menu}
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
