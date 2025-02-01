import * as E from '@/styles/pages/Expert/Estimates.style';

import Sliders from '@/assets/icons/Sliders.svg?react';
import { ExpertEstimateCard } from '@/components/ExpertEstimateCard';
import { Pagination } from '@/components/Pagination';
import { useState } from 'react';

const menus = {
  추천: '',
  곡물: {
    쌀: 'key1',
    보리: 'key2',
    옥수수: 'key3',
    콩: 'key4',
    '기타 곡물': 'key5',
  },
  채소작물: '',
  과일: '',
  특용: '',
  화훼: '',
  사료: '',
  기타: '',
} as const;

const activeMenus = {
  곡물: true,
  추천: false,
  채소작물: false,
  과일: false,
  특용: false,
  화훼: false,
  사료: false,
  기타: false,
};

const totalPages = 6;

const dummy = [
  {
    id: 1,
    title: '쌀농사 토양, 물 관리 관련 컨설팅 문의',
    subtitle: '쌀 (곡물) | 토양 및 환경관리 | 경기 이천시',
    estimatedCost: '500만원 ~ 1,000만원',
    date: '2024.11.11',
  },
  {
    id: 2,
    title: '쌀농사 토양, 물 관리 관련 컨설팅 문의',
    subtitle: '쌀 (곡물) | 토양 및 환경관리 | 경기 이천시',
    estimatedCost: '500만원 ~ 1,000만원',
    date: '2024.11.11',
  },
  {
    id: 3,
    title: '쌀농사 토양, 물 관리 관련 컨설팅 문의',
    subtitle: '쌀 (곡물) | 토양 및 환경관리 | 경기 이천시',
    estimatedCost: '500만원 ~ 1,000만원',
    date: '2024.11.11',
  },
];

export default function Estimates() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div style={{ marginTop: 84 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <E.Title>견적 찾기</E.Title>
        <E.Container>
          <E.Sidebar>
            {Object.keys(menus).map((menu) => {
              if (typeof menus[menu as keyof typeof menus] === 'object') {
                return (
                  <div key={menu}>
                    <E.Menu active={activeMenus[menu as keyof typeof menus]}>{menu}</E.Menu>
                    <E.SubMenuContainer>
                      {Object.keys(menus[menu as keyof typeof menus]).map((subMenu) => (
                        <E.SubMenu key={subMenu}>{subMenu}</E.SubMenu>
                      ))}
                    </E.SubMenuContainer>
                  </div>
                );
              } else {
                return (
                  <E.Menu key={menu} active={activeMenus[menu as keyof typeof menus]}>
                    {menu}
                  </E.Menu>
                );
              }
            })}
          </E.Sidebar>
          <E.Content>
            <E.Header>
              <E.SelectedCategoryLabel>곡물</E.SelectedCategoryLabel>
              <Sliders />
            </E.Header>
            <E.Grid>
              {dummy.map((data) => (
                <ExpertEstimateCard
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  subtitle={data.subtitle}
                  estimatedCost={data.estimatedCost}
                  date={data.date}
                />
              ))}
            </E.Grid>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageClick={(page) => setCurrentPage(page)}
            />
          </E.Content>
        </E.Container>
      </div>
    </div>
  );
}
