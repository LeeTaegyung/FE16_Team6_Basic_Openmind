import NextBtn from '@assets/icons/NextBtn.svg?react';
import PrevBtn from '@assets/icons/PrevBtn.svg?react';
import { usePagination } from '@hooks/usePagination';
import styled from 'styled-components';

const PAGINATION_LENGTH = 5;

function Pagination({ queryStrings, setQueryStrings, totalDataLength }) {
  const { paginationRange, currentPage, handleNext, handlePrev, handleMove } =
    usePagination(
      queryStrings,
      setQueryStrings,
      totalDataLength,
      PAGINATION_LENGTH,
    );

  return (
    <PaginationStyle>
      <ul aria-label='페이지 이동 버튼'>
        <li onClick={handlePrev}>
          <PrevBtn aria-label='이전으로 가기' />
        </li>
        {paginationRange.map((el, i) => {
          return (
            <li
              className={currentPage == el ? 'active' : null}
              onClick={(e) => handleMove(e)}
              aria-label={`${i}번째 페이지로 이동`}
              key={el + i}
            >
              {el}
            </li>
          );
        })}
        <li onClick={handleNext}>
          <NextBtn aria-label='다음으로 가기' />
        </li>
      </ul>
    </PaginationStyle>
  );
}

export default Pagination;

const PaginationStyle = styled.div`
  margin-top: 32px;
  padding-bottom: 40px;

  ul {
    display: flex;
    justify-content: center;

    li {
      display: flex;
      width: 40px;
      height: 40px;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      line-height: ${({ theme }) => theme.lineHeight.lh40};
      color: ${({ theme }) => theme.color.gray40};

      /* active 시  brown40*/
      &.active {
        color: ${({ theme }) => theme.color.brown40};
      }
    }

    @media screen and (min-width: 768px) {
      margin-top: 62px;
      padding-bottom: 76px;
    }

    @media screen and (min-width: 1200px) {
      margin-top: 40px;
      padding-bottom: 97px;
    }
  }
`;
