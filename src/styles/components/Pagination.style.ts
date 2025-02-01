import styled from '@emotion/styled';

import ChevronRightGray from '@/assets/icons/ChevronRightGray.svg?react';

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
`;

export const NextPage = styled(ChevronRightGray)<{ disabled?: boolean }>`
  & path {
    stroke: ${(props) => (props.disabled ? '#D9D9D9' : '#8E8E8E')};
  }
`;

export const PreviousPage = styled(NextPage)`
  transform: rotate(180deg);
`;

export const PageButton = styled.button<{ active?: boolean }>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 7.551px;
  background: ${(props) => (props.active ? '#00a05e' : 'transparent')};
  color: ${(props) => (props.active ? '#fff' : '#8E8E8E')};
  font-family: PretendardRegular;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
`;
