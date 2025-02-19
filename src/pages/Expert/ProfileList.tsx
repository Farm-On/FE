import axiosInstance from '@/api/axios';
import { ProfileListResponse } from '@/api/types/expert/profileList';
import { ExpertProfileCard } from '@/components/ExpertProfileCard';
import { Pagination } from '@/components/Pagination';
import * as P from '@/styles/pages/Expert/ProfileList.style';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function ExpertProfileList() {
  const [currentPage, setCurrentPage] = useState(1);

  const [crop, setCrop] = useState(null);
  const [area, setArea] = useState(null);

  // 전문가 프로필 목록
  const { data } = useQuery<ProfileListResponse>({
    queryKey: ['expertProfileList', currentPage],
    queryFn: () =>
      axiosInstance
        .get('/expert/list', {
          params: {
            crop,
            area,
            page: currentPage,
          },
        })
        .then((response) => response.data),
  });

  return (
    <>
      <div style={{ marginTop: 84 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <P.Title>전문가 프로필</P.Title>
          <P.FilterChips>
            <P.FilterChip onClick={() => {}}>
              <P.FilterChipLabel>분야</P.FilterChipLabel>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M4 6.5L8 10.5L12 6.5"
                  stroke="black"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </P.FilterChip>
            <P.FilterChip>
              <P.FilterChipLabel>지역</P.FilterChipLabel>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M4 6.5L8 10.5L12 6.5"
                  stroke="black"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </P.FilterChip>
          </P.FilterChips>
          <P.Grid>
            {data?.result?.expertProfileList?.map((data) => (
              <ExpertProfileCard
                key={data.expertId}
                id={data.expertId}
                profileImg={data.profileImg}
                isNicknameOnly={data.isNickNameOnly}
                name={data.name}
                nickname={data.nickName}
                years={data.career}
                location={`${data.expertLocationCategory} ${data.expertLocationDetail}`}
                fields={`${data.expertCropCategory} ${data.expertCropDetail ? `(${data.expertCropDetail})` : ''}`}
                introduction={data.expertDescription}
              />
            ))}
          </P.Grid>
          <Pagination
            totalPages={data?.result.totalPage || 1}
            currentPage={currentPage}
            onPageClick={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </>
  );
}
