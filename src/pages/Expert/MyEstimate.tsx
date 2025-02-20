import axiosInstance from '@/api/axios';
import { EstimatesResponse } from '@/api/types/expert/estimates';
import { ExpertEstimateCard } from '@/components/ExpertEstimateCard';
import { Pagination } from '@/components/Pagination';
import useAuthStore from '@/store/useAuthStore';
import * as ME from '@/styles/pages/Expert/MyEstimate.style';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ExpertMyEstimate() {
  const navigate = useNavigate();

  const [currentTab, setCurrentTab] = useState<'all' | 'is-complete'>('all');
  const [currentPage, setCurrentPage] = useState(1);

  const { userInfo } = useAuthStore();

  const { data } = useQuery<EstimatesResponse>({
    queryKey: ['expertMyEstimate', currentPage, currentTab],
    queryFn: () =>
      axiosInstance
        .get(`/estimate/expert/${userInfo?.expertId}/${currentTab}`, {
          params: { page: currentPage },
        })
        .then((response) => response.data),
    enabled: !!userInfo?.expertId,
  });

  return (
    <div>
      <ME.Title>내 견적</ME.Title>
      <ME.Tabs>
        <ME.Tab active={currentTab === 'all'} onClick={() => setCurrentTab('all')}>
          전체
        </ME.Tab>
        <ME.Tab active={currentTab === 'is-complete'} onClick={() => setCurrentTab('is-complete')}>
          완료된 견적
        </ME.Tab>
      </ME.Tabs>
      <ME.Grid>
        {data && data.result.estimateList.length > 0 ? (
          data?.result.estimateList.map((estimate) => (
            <ExpertEstimateCard
              key={estimate.estimateId}
              id={estimate.estimateId}
              title={estimate.title}
              subtitle={`${estimate.cropName} (${estimate.cropCategory}) | ${estimate.estimateCategory} | ${estimate.areaName} ${estimate.areaNameDetail}`}
              estimatedCost={estimate.budget}
              date={estimate.createdAt}
              isDone={estimate.status === 1}
              cardStyle={{ width: '336px', padding: '22px 27px 22px 27px' }}
              onClick={() => navigate(`/expert/profile/${estimate.estimateId}`)}
            />
          ))
        ) : (
          <span style={{ margin: '0 auto' }}>데이터가 없습니다.</span>
        )}
      </ME.Grid>
      <Pagination
        totalPages={data?.result.totalPage ?? 0}
        currentPage={currentPage}
        onPageClick={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
