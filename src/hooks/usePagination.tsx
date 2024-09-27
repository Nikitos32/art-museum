import {
  MAX_DECREASE_AMOUNT_PAGE,
  MAX_INCREASE_AMOUNT_PAGE,
  MAX_PAGE,
} from 'constants/constants';
import { useEffect, useState } from 'react';

export const usePagination = (currentPage: number) => {
  const [paginationArray, setPaginationArray] = useState<number[]>([
    1, 2, 3, 4, 5,
  ]);
  useEffect(() => {
    if (currentPage === MAX_PAGE) {
      alert('Last page!');
    } else if (currentPage === paginationArray[paginationArray.length - 1]) {
      setPaginationArray(() => {
        const tmpArr: number[] = [];
        for (
          let i = currentPage - 1;
          i < currentPage + MAX_INCREASE_AMOUNT_PAGE;
          i++
        ) {
          tmpArr.push(i);
        }
        return tmpArr;
      });
    } else if (currentPage === paginationArray[0] && currentPage !== 1) {
      setPaginationArray(() => {
        const tmpArr: number[] = [];
        for (
          let i = currentPage - MAX_DECREASE_AMOUNT_PAGE;
          i < currentPage + 2;
          i++
        ) {
          tmpArr.push(i);
        }
        return tmpArr;
      });
    }
  }, [currentPage]);

  return [paginationArray];
};
