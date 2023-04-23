import { useState, useEffect } from 'react';

export interface IPaginationControl {
  currentPage: number,
  maxItems: number,
  maxPages: number,
  canPrev: boolean,
  canNext: boolean,
  setPage: React.Dispatch<number>;
  setNextPage: () => void,
  setPrevPage: () => void,
}

interface PaginationHook<T> extends IPaginationControl {
  slicedData: T[];
};

function usePagination<T>(
  data: T[],
  initialPage: number,
  itemsPerPage: number
): PaginationHook<T> {
  const [slicedData, setSlicedData] = useState<T[]>([]);
  const [currentPage, setCurrentPage] = useState(initialPage);

  const maxItems = data.length;
  const maxPages = Math.ceil(data.length / itemsPerPage);
  const canPrev = currentPage > 1;
  const canNext = currentPage < maxPages;

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setSlicedData(data.slice(startIndex, endIndex));
  }, [data, itemsPerPage, currentPage]);

  const setPage = (newPage: number) => {
    if (newPage > 0 && newPage <= maxPages) {
      setSlicedData([]);
      //setTimeout(() => {
        setSlicedData(data.slice((newPage - 1) * itemsPerPage, newPage * itemsPerPage));
        setCurrentPage(newPage);
      //}, 0);
    }
  }

  const setNextPage = () => { setPage(currentPage+1); }
  const setPrevPage = () => { setPage(currentPage-1); }

  return {
    slicedData,
    currentPage,
    canPrev,
    canNext,
    maxItems,
    maxPages,
    setPage,
    setNextPage,
    setPrevPage,
  };
}

export default usePagination;
