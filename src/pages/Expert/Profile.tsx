import { ExpertProfileCard } from '@/components/ExpertProfileCard';
import { Pagination } from '@/components/Pagination';
import * as P from '@/styles/pages/Expert/Profile.style';
import { useState } from 'react';

const totalPage = 6;

const dummy = [
  {
    id: 1,
    profileImg:
      'https://s3-alpha-sig.figma.com/img/cebb/5890/aa2791b8acee1732a37529d4647a9953?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c2aaqTVMBnqZxZHR-poLxZwovJg3l0wVU9eT08bq36z8EP3xOIflR85Da1NqCND7OIC4M4-vtiBWIhT0t6SrQHXgT8cqMaPTRTuPH6qwE4vSkuD2KzEonlMSRl9Y9bOMlRbb-y0ZyNmNQG9tVxKzI6s7zjZGwqBf0IvZD2Pi6Dsnylm03RXfZhbX6jkwFf5ELpJ3NjFnrL1vOuA0-NSreg37e6PxFAtt5LqxTMXorFvOxjh~dEI2NREar5nzDe3qzN23rZb8dQZworFsD4oiP7cx7YOXZnvT6HEFFpDdVvnQ-Q56YKSRZ8bqP1XaJvZu5K8Wi36N2moTiJKiKmcc6Q__',
    name: '김상우',
    ratings: 4.8,
    years: 20,
    location: '경기 이천시',
    fields: '쌀 (곡물)',
    introduction: '농업을 기술로 혁신하겠습니다.',
  },
  {
    id: 2,
    profileImg:
      'https://s3-alpha-sig.figma.com/img/cebb/5890/aa2791b8acee1732a37529d4647a9953?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c2aaqTVMBnqZxZHR-poLxZwovJg3l0wVU9eT08bq36z8EP3xOIflR85Da1NqCND7OIC4M4-vtiBWIhT0t6SrQHXgT8cqMaPTRTuPH6qwE4vSkuD2KzEonlMSRl9Y9bOMlRbb-y0ZyNmNQG9tVxKzI6s7zjZGwqBf0IvZD2Pi6Dsnylm03RXfZhbX6jkwFf5ELpJ3NjFnrL1vOuA0-NSreg37e6PxFAtt5LqxTMXorFvOxjh~dEI2NREar5nzDe3qzN23rZb8dQZworFsD4oiP7cx7YOXZnvT6HEFFpDdVvnQ-Q56YKSRZ8bqP1XaJvZu5K8Wi36N2moTiJKiKmcc6Q__',
    name: '김상우',
    ratings: 4.8,
    years: 20,
    location: '경기 이천시',
    fields: '쌀 (곡물)',
    introduction: '농업을 기술로 혁신하겠습니다.',
  },
  {
    id: 3,
    profileImg:
      'https://s3-alpha-sig.figma.com/img/cebb/5890/aa2791b8acee1732a37529d4647a9953?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c2aaqTVMBnqZxZHR-poLxZwovJg3l0wVU9eT08bq36z8EP3xOIflR85Da1NqCND7OIC4M4-vtiBWIhT0t6SrQHXgT8cqMaPTRTuPH6qwE4vSkuD2KzEonlMSRl9Y9bOMlRbb-y0ZyNmNQG9tVxKzI6s7zjZGwqBf0IvZD2Pi6Dsnylm03RXfZhbX6jkwFf5ELpJ3NjFnrL1vOuA0-NSreg37e6PxFAtt5LqxTMXorFvOxjh~dEI2NREar5nzDe3qzN23rZb8dQZworFsD4oiP7cx7YOXZnvT6HEFFpDdVvnQ-Q56YKSRZ8bqP1XaJvZu5K8Wi36N2moTiJKiKmcc6Q__',
    name: '김상우',
    ratings: 4.8,
    years: 20,
    location: '경기 이천시',
    fields: '쌀 (곡물)',
    introduction: '농업을 기술로 혁신하겠습니다.',
  },
  {
    id: 3,
    profileImg:
      'https://s3-alpha-sig.figma.com/img/cebb/5890/aa2791b8acee1732a37529d4647a9953?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c2aaqTVMBnqZxZHR-poLxZwovJg3l0wVU9eT08bq36z8EP3xOIflR85Da1NqCND7OIC4M4-vtiBWIhT0t6SrQHXgT8cqMaPTRTuPH6qwE4vSkuD2KzEonlMSRl9Y9bOMlRbb-y0ZyNmNQG9tVxKzI6s7zjZGwqBf0IvZD2Pi6Dsnylm03RXfZhbX6jkwFf5ELpJ3NjFnrL1vOuA0-NSreg37e6PxFAtt5LqxTMXorFvOxjh~dEI2NREar5nzDe3qzN23rZb8dQZworFsD4oiP7cx7YOXZnvT6HEFFpDdVvnQ-Q56YKSRZ8bqP1XaJvZu5K8Wi36N2moTiJKiKmcc6Q__',
    name: '김상우',
    ratings: 4.8,
    years: 20,
    location: '경기 이천시',
    fields: '쌀 (곡물)',
    introduction: '농업을 기술로 혁신하겠습니다.',
  },
  {
    id: 4,
    profileImg:
      'https://s3-alpha-sig.figma.com/img/cebb/5890/aa2791b8acee1732a37529d4647a9953?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c2aaqTVMBnqZxZHR-poLxZwovJg3l0wVU9eT08bq36z8EP3xOIflR85Da1NqCND7OIC4M4-vtiBWIhT0t6SrQHXgT8cqMaPTRTuPH6qwE4vSkuD2KzEonlMSRl9Y9bOMlRbb-y0ZyNmNQG9tVxKzI6s7zjZGwqBf0IvZD2Pi6Dsnylm03RXfZhbX6jkwFf5ELpJ3NjFnrL1vOuA0-NSreg37e6PxFAtt5LqxTMXorFvOxjh~dEI2NREar5nzDe3qzN23rZb8dQZworFsD4oiP7cx7YOXZnvT6HEFFpDdVvnQ-Q56YKSRZ8bqP1XaJvZu5K8Wi36N2moTiJKiKmcc6Q__',
    name: '김상우',
    ratings: 4.8,
    years: 20,
    location: '경기 이천시',
    fields: '쌀 (곡물)',
    introduction: '농업을 기술로 혁신하겠습니다.',
  },
  {
    id: 5,
    profileImg:
      'https://s3-alpha-sig.figma.com/img/cebb/5890/aa2791b8acee1732a37529d4647a9953?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c2aaqTVMBnqZxZHR-poLxZwovJg3l0wVU9eT08bq36z8EP3xOIflR85Da1NqCND7OIC4M4-vtiBWIhT0t6SrQHXgT8cqMaPTRTuPH6qwE4vSkuD2KzEonlMSRl9Y9bOMlRbb-y0ZyNmNQG9tVxKzI6s7zjZGwqBf0IvZD2Pi6Dsnylm03RXfZhbX6jkwFf5ELpJ3NjFnrL1vOuA0-NSreg37e6PxFAtt5LqxTMXorFvOxjh~dEI2NREar5nzDe3qzN23rZb8dQZworFsD4oiP7cx7YOXZnvT6HEFFpDdVvnQ-Q56YKSRZ8bqP1XaJvZu5K8Wi36N2moTiJKiKmcc6Q__',
    name: '김상우',
    ratings: 4.8,
    years: 20,
    location: '경기 이천시',
    fields: '쌀 (곡물)',
    introduction: '농업을 기술로 혁신하겠습니다.',
  },
  {
    id: 6,
    profileImg:
      'https://s3-alpha-sig.figma.com/img/cebb/5890/aa2791b8acee1732a37529d4647a9953?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c2aaqTVMBnqZxZHR-poLxZwovJg3l0wVU9eT08bq36z8EP3xOIflR85Da1NqCND7OIC4M4-vtiBWIhT0t6SrQHXgT8cqMaPTRTuPH6qwE4vSkuD2KzEonlMSRl9Y9bOMlRbb-y0ZyNmNQG9tVxKzI6s7zjZGwqBf0IvZD2Pi6Dsnylm03RXfZhbX6jkwFf5ELpJ3NjFnrL1vOuA0-NSreg37e6PxFAtt5LqxTMXorFvOxjh~dEI2NREar5nzDe3qzN23rZb8dQZworFsD4oiP7cx7YOXZnvT6HEFFpDdVvnQ-Q56YKSRZ8bqP1XaJvZu5K8Wi36N2moTiJKiKmcc6Q__',
    name: '김상우',
    ratings: 4.8,
    years: 20,
    location: '경기 이천시',
    fields: '쌀 (곡물)',
    introduction: '농업을 기술로 혁신하겠습니다.',
  },
];

export default function ExpertProfile() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div style={{ marginTop: 84 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <P.Title>전문가 프로필</P.Title>
        <P.FilterChips>
          <P.FilterChip>
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
          {dummy.map((data) => (
            <ExpertProfileCard
              key={data.id}
              profileImg={data.profileImg}
              name={data.name}
              ratings={data.ratings}
              years={data.years}
              location={data.location}
              fields={data.fields}
              introduction={data.introduction}
            />
          ))}
        </P.Grid>
        <Pagination
          totalPages={totalPage}
          currentPage={currentPage}
          onPageClick={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}
