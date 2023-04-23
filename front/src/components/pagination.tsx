import { IPaginationControl } from '@/hooks/usePagination';
import React from 'react';
import CircleOutlined from '@mui/icons-material/CircleOutlined'
import * as style from './pagination.css';

interface IPaginationProps {
  pagination: IPaginationControl;
}

function getPages(currentPage: number, maxPages: number) {
  const pages = [];
  const visible: boolean[] = [];
  visible.fill(false, 0, maxPages);

  const turnOn = (page: number) => {
    if (page > 0 && page <= maxPages) {
      visible[page - 1] = true;
    }
  };

  for (let i = 1; i<=3; i++) {
    turnOn(i);
    turnOn(maxPages+1-i);
    turnOn(currentPage+i-2);
  }

  let wereDots = false;

  for (let i = 1; i<=maxPages; i++) {
    if (visible[i-1]) {
      pages.push(i);
      wereDots = false;
    } else {
      if (!wereDots) {
        pages.push('...');
        wereDots = true;
      }
    } 
  }

  return pages;
}

const Pagination: React.FC<IPaginationProps> = ({ pagination }) => {
  const { currentPage, maxPages, setPage } = pagination;

  const pages = getPages(currentPage, maxPages);

  return (
    <div className={style.pagination}>
      <div>
        <button className={style.buttonArrow} disabled={!pagination.canPrev} onClick={() => pagination.setPrevPage()}>
          <div><CircleOutlined /></div>
          <div>Prev</div>
        </button>

      </div>
      <div>
        {pages.map((page, index) => {
          if (isNaN(Number(page))) {
            return <button className={style.button} key={index}>...</button>;
          }
          return (
            <button
              className={page === currentPage ? style.buttonActive : style.button}
              key={index}
              disabled={page === currentPage}
              onClick={() => setPage(page as number)}
            >
              {page}
            </button>
          );
        })}
      </div>
      <div>
        <button className={style.buttonArrow} disabled={!pagination.canNext} onClick={() => pagination.setNextPage()}>
          <div>Next</div>
          <div><CircleOutlined /></div>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
