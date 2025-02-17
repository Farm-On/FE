import { ExpertEstimateCard } from '@/components/ExpertEstimateCard';
import { Pagination } from '@/components/Pagination';
import * as ME from '@/styles/pages/Expert/MyEstimate.style';
import { useState } from 'react';

const totalPage = 6;

const dummy = [
  {
    id: 1,
    title: '토양 관리 및 물 관리 방법',
    subtitle: '콩 (곡물) | 토양 및 환경관리 | 경기 이천시',
    estimatedCost: '500만원 ~ 1,000만원',
    date: '2024.11.11',
    isDone: false,
  },
  {
    id: 2,
    title: '논 배수와 비료 사용법',
    subtitle: '쌀 (곡물) | 토양 및 환경관리 | 경기 이천시',
    estimatedCost: '500만원 ~ 1,000만원',
    date: '2024.11.11',
    isDone: false,
  },
  {
    id: 3,
    title: '논 배수와 비료 사용법',
    subtitle: '쌀 (곡물) | 토양 및 환경관리 | 경기 이천시',
    estimatedCost: '500만원 ~ 1,000만원',
    date: '2024.11.11',
    isDone: false,
  },
  {
    id: 4,
    title: '병해충 예방 관련 컨설팅 건',
    subtitle: '옥수수 (곡물) | 토양 및 환경관리 | 경기 이천시',
    estimatedCost: '500만원 ~ 1,000만원',
    date: '2024.11.11',
    isDone: false,
  },
  {
    id: 5,
    title: '쌀농사 토양, 물 관리 관련 컨설팅 문의',
    subtitle: '쌀 (곡물) | 토양 및 환경관리 | 경기 이천시',
    estimatedCost: '500만원 ~ 1,000만원',
    date: '2024.11.11',
    isDone: false,
  },
  {
    id: 6,
    title: '쌀농사 토양, 물 관리 관련 컨설팅 문의',
    subtitle: '쌀 (곡물) | 토양 및 환경관리 | 경기 이천시',
    estimatedCost: '500만원 ~ 1,000만원',
    date: '2024.11.11',
    isDone: true,
  },
  {
    id: 7,
    title: '쌀농사 토양, 물 관리 관련 컨설팅 문의',
    subtitle: '쌀 (곡물) | 토양 및 환경관리 | 경기 이천시',
    estimatedCost: '500만원 ~ 1,000만원',
    date: '2024.11.11',
    isDone: true,
  },
  {
    id: 8,
    title: '옥수수 재배 초보 입니다. 비료 사...',
    subtitle: '옥수수 (곡물) | 토양 및 환경관리 | 경기 이천시',
    estimatedCost: '500만원 ~ 1,000만원',
    date: '2024.11.11',
    isDone: false,
  },
  {
    id: 9,
    title: '병해충 예방 관련 컨설팅 건',
    subtitle: '옥수수 (곡물) | 토양 및 환경관리 | 경기 이천시',
    estimatedCost: '500만원 ~ 1,000만원',
    date: '2024.11.11',
    isDone: true,
  },
];

export default function AllEstimates() {
  const [currentTab, setCurrentTab] = useState<'all' | 'done'>('all');
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div style={{ marginTop: 84 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <ME.Title>내 견적</ME.Title>
        <ME.Tabs>
          <ME.Tab active={currentTab === 'all'} onClick={() => setCurrentTab('all')}>
            전체
          </ME.Tab>
          <ME.Tab active={currentTab === 'done'} onClick={() => setCurrentTab('done')}>
            완료된 견적
          </ME.Tab>
        </ME.Tabs>
        <ME.Grid>
          {dummy.map((data) => (
            <ExpertEstimateCard
              key={data.id}
              id={data.id}
              title={data.title}
              subtitle={data.subtitle}
              estimatedCost={data.estimatedCost}
              date={data.date}
              isDone={data.isDone}
              cardStyle={{ width: '336px', padding: '22px 27px 22px 27px' }}
            />
          ))}
        </ME.Grid>
        <Pagination
          totalPages={totalPage}
          currentPage={currentPage}
          onPageClick={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}
