import styled from '@emotion/styled';


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
        &#8249;
      </NavigationButton>
      
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

      <NavigationButton 
        onClick={handleNextGroup} 
        disabled={endPage === totalPages}
      >
        &#8250;
      </NavigationButton>
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
  color: #666;
`;