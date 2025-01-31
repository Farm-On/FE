import styled from '@emotion/styled';
import LeftIcon from '../assets/icons/chevron-left-gray.svg?react';
import RightIcon from '../assets/icons/chevron-Right-gray.svg?react';

interface PageProps{
    currentPage:number;
    totalPages:number;
    onPageChange:(page: number)=>void;
}
export const CommuPageBtn = ({ currentPage, totalPages, onPageChange }:PageProps) => {
  const pageSize = 6; // 한 그룹당 보여줄 페이지 수
  const currentGroup = Math.floor((currentPage - 1) / pageSize);
  const startPage = currentGroup * pageSize + 1;
  const endPage = Math.min(startPage + pageSize - 1, totalPages);

  const handleNextGroup = () => {
    const nextGroupFirstPage = startPage + pageSize;
    if (nextGroupFirstPage <= totalPages) {
      onPageChange(nextGroupFirstPage);
    }
  };

  const handlePrevGroup = () => {
    const prevGroupFirstPage = startPage - pageSize;
    if (prevGroupFirstPage > 0) {
      onPageChange(prevGroupFirstPage);
    }
  };

  return (
    <PaginationContainer>
      <NavigationButton onClick={handlePrevGroup} disabled={startPage === 1}>
        <LeftIcon />
      </NavigationButton>
      <LeftIcon style={{
          width: '26px',
          height: '26px',
          opacity: startPage === 1 ? 0.5 : 1,
          cursor: startPage === 1 ? '' : 'pointer',
        }} 
        onClick={handlePrevGroup}/>
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
        const pageNumber = startPage + index;
        return (
          <PageButton
            key={pageNumber}
            isActive={currentPage === pageNumber}
            onClick={() => onPageChange(pageNumber)}
          >
            <p>{pageNumber}</p>
          </PageButton>
        );
      })}

      <RightIcon
        style={{
          width: '26px',
          height: '26px',
          opacity: endPage === totalPages ? 0.5 : 1,
          cursor: endPage === totalPages ? 'not-allowed' : 'pointer',
        }}
        onClick={handleNextGroup}
      />
    </PaginationContainer>
  );
};


const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  //gap: 11.87px;
  //margin: 20px 0;
`;

const PageButton = styled.button<{ isActive?: boolean }>`
  width: 32.4px;
  height: 32.4px;
  border-radius: 7.551px;
  border: none;
  background-color: ${props => props.isActive ? '#00A05E' : 'transparent'};
  color: ${props => props.isActive ? '#FFF' : '#8E8E8E'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family:'PretendardRegular'
  &:hover {
    background-color: ${props => props.isActive ? '#00A67E' : '#f0f0f0'};
  }
`;

const NavigationButton = styled(PageButton)`
  color: rgba(142, 142, 142, 1);
  width: 25.89px;
  height: 25.89px;
  flex-shrink: 0;
`;