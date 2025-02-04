import * as P from '@/styles/components/Pagination.style';
import { CSSProperties } from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageClick: (page: number) => void;
  containerStyle?: CSSProperties;
}

export const Pagination = ({
  totalPages,
  currentPage,
  onPageClick,
  containerStyle,
}: PaginationProps) => (
  <P.PaginationContainer style={containerStyle}>
    <P.PreviousPage disabled={currentPage === 1} />
    {[...Array(totalPages)].map((_, page) => (
      <P.PageButton
        key={page + 1}
        active={currentPage === page + 1}
        onClick={() => onPageClick(page + 1)}
      >
        {page + 1}
      </P.PageButton>
    ))}
    <P.NextPage disabled={currentPage === totalPages} />
  </P.PaginationContainer>
);
