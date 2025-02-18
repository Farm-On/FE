import { ExpertEstimateCard } from '@/components/ExpertEstimateCard';
import { Pagination } from '@/components/Pagination';
import * as ME from '@/styles/pages/Expert/MyEstimate.style';
import { useState } from 'react';
import { useAllEstimates, useCompletedEstimates } from '../../hooks/useMyEstimate';
import { format } from 'date-fns';
import { EstimateListItem } from '../../api/types/userEstimate';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useAuthStore from '../../store/useAuthStore';

// const dummy = [
//   {
//     id: 1,
//     title: '토양 관리 및 물 관리 방법',
//     subtitle: '콩 (곡물) | 토양 및 환경관리 | 경기 이천시',
//     estimatedCost: '500만원 ~ 1,000만원',
//     date: '2024.11.11',
//     isDone: false,
//   },
//   {
//     id: 2,
//     title: '논 배수와 비료 사용법',
//     subtitle: '쌀 (곡물) | 토양 및 환경관리 | 경기 이천시',
//     estimatedCost: '500만원 ~ 1,000만원',
//     date: '2024.11.11',
//     isDone: false,
//   },
//   {
//     id: 3,
//     title: '논 배수와 비료 사용법',
//     subtitle: '쌀 (곡물) | 토양 및 환경관리 | 경기 이천시',
//     estimatedCost: '500만원 ~ 1,000만원',
//     date: '2024.11.11',
//     isDone: false,
//   },
//   {
//     id: 4,
//     title: '병해충 예방 관련 컨설팅 건',
//     subtitle: '옥수수 (곡물) | 토양 및 환경관리 | 경기 이천시',
//     estimatedCost: '500만원 ~ 1,000만원',
//     date: '2024.11.11',
//     isDone: false,
//   },
//   {
//     id: 5,
//     title: '쌀농사 토양, 물 관리 관련 컨설팅 문의',
//     subtitle: '쌀 (곡물) | 토양 및 환경관리 | 경기 이천시',
//     estimatedCost: '500만원 ~ 1,000만원',
//     date: '2024.11.11',
//     isDone: false,
//   },
//   {
//     id: 6,
//     title: '쌀농사 토양, 물 관리 관련 컨설팅 문의',
//     subtitle: '쌀 (곡물) | 토양 및 환경관리 | 경기 이천시',
//     estimatedCost: '500만원 ~ 1,000만원',
//     date: '2024.11.11',
//     isDone: true,
//   },
//   {
//     id: 7,
//     title: '쌀농사 토양, 물 관리 관련 컨설팅 문의',
//     subtitle: '쌀 (곡물) | 토양 및 환경관리 | 경기 이천시',
//     estimatedCost: '500만원 ~ 1,000만원',
//     date: '2024.11.11',
//     isDone: true,
//   },
//   {
//     id: 8,
//     title: '옥수수 재배 초보 입니다. 비료 사...',
//     subtitle: '옥수수 (곡물) | 토양 및 환경관리 | 경기 이천시',
//     estimatedCost: '500만원 ~ 1,000만원',
//     date: '2024.11.11',
//     isDone: false,
//   },
//   {
//     id: 9,
//     title: '병해충 예방 관련 컨설팅 건',
//     subtitle: '옥수수 (곡물) | 토양 및 환경관리 | 경기 이천시',
//     estimatedCost: '500만원 ~ 1,000만원',
//     date: '2024.11.11',
//     isDone: true,
//   },
// ];

export default function AllEstimates() {
  const navigate = useNavigate();
  const { userInfo,isLoggedIn } = useAuthStore();
  const userId = userInfo?.userId;
  const [currentTab, setCurrentTab] = useState<'all' | 'done'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 9; // 한 페이지당 보여줄 카드 개수

  useEffect(() => {
    if (!isLoggedIn) {
      alert('로그인이 필요한 서비스입니다')
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  const handleEstimateClick = (estimateId: number) => {
    navigate(`/MyEstimate/detail/${estimateId}`);
  };
  const {
    data: allEstimatesData,
    isLoading: isLoadingAll,
    isError: isErrorAll,
  } = useAllEstimates(userId);

  const {
    data: completedEstimatesData,
    isLoading: isLoadingCompleted,
    isError: isErrorCompleted,
  } = useCompletedEstimates(userId);

  if (isLoadingAll || (currentTab === 'done' && isLoadingCompleted)){
     console.log('견적서 전체 조회 로딩중');
    return null;
  }
  if (isErrorAll || (currentTab === 'done' && isErrorCompleted)){
      console.log('견적서 전체 조회 실패~!');
    return null;
  }
  if(isErrorCompleted){
    console.log("완료견적 에러:",)
    return null;
  }

  const allEstimates = allEstimatesData?.result?.estimateList || [];
  const completedEstimates = completedEstimatesData?.result?.estimateList || [];
  const currentData = currentTab === 'all' ? allEstimates : completedEstimates;

  console.log('완료된 데이터:', completedEstimates);
  console.log('완료된 데이터:', completedEstimatesData?.result?.estimateList);

  const totalPages = Math.ceil(currentData.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const currentPageEstimates = currentData.slice(startIndex, endIndex);
  

  return (
    <div style={{ marginTop: 84 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <ME.Title>내 견적</ME.Title>
        <ME.Tabs>
          <ME.Tab
            active={currentTab === 'all'}
            onClick={() => {
              setCurrentTab('all');
              setCurrentPage(1);
            }}
          >
            전체
          </ME.Tab>
          <ME.Tab
            active={currentTab === 'done'}
            onClick={() => {
              setCurrentTab('done');
              setCurrentPage(1);
            }}
          >
            완료된 견적
          </ME.Tab>
        </ME.Tabs>
        {currentData.length === 0 && !isLoadingAll && !isLoadingCompleted && (
          <div
            style={{
              textAlign: 'center',
              padding: '50px',
              color: '#666',
              fontSize: '20px',
            }}
          >
            {currentTab === 'done' ? '완료된 견적이 없습니다.' : '견적서가 없습니다.'}
          </div>
        )}

        {currentData.length > 0 && (
          <ME.Grid>
            {currentPageEstimates.map((estimate: EstimateListItem) => (
              <ExpertEstimateCard
                onClick={()=>handleEstimateClick(estimate.estimateId)}
                key={estimate.estimateId}
                id={estimate.estimateId}
                title={estimate.title}
                subtitle={`${estimate.cropName} (${estimate.cropCategory}) | ${estimate.estimateCategory} | ${estimate.areaName}`}
                estimatedCost={estimate.budget}
                date={format(new Date(estimate.createdAt), 'yyyy.MM.dd')}
                isDone={estimate.status === 1}
                cardStyle={{ width: '336px', padding: '22px 27px 22px 27px' }}
              />
            ))}
          </ME.Grid>
        )}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageClick={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}
