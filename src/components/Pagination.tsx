import * as P from '@/styles/components/Pagination.style';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageClick: (page: number) => void;
}

export const Pagination = ({ totalPages, currentPage, onPageClick }: PaginationProps) => (
  <P.PaginationContainer>
    <P.PreviousPage />
    {[...Array(totalPages)].map((_, page) => (
      <P.PageButton
        key={page + 1}
        active={currentPage === page + 1}
        onClick={() => onPageClick(page + 1)}
      >
        {page + 1}
      </P.PageButton>
    ))}
    <P.NextPage />
  </P.PaginationContainer>
);
