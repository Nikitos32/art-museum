import { PaginationBtn } from 'components/UI/PaginationBtn/PaginationBtn';
import classes from './catalogPagination.module.css';
import { catalogPaginationProps } from 'constants/types';
import { useEffect, useState } from 'react';

export const CatalogPagination = ({
  currentPage,
  handleCurrentPage,
}: catalogPaginationProps) => {
  const [paginationArray, setPaginationArray] = useState<number[]>([
    1, 2, 3, 4, 5,
  ]);

  useEffect(() => {
    if (currentPage === 101) {
      alert('Last page!');
    } else if (currentPage === paginationArray[paginationArray.length - 1]) {
      setPaginationArray(() => {
        const tmpArr: number[] = [];
        for (let i = currentPage - 1; i < currentPage + 4; i++) {
          tmpArr.push(i);
        }
        return tmpArr;
      });
    } else if (currentPage === paginationArray[0] && currentPage !== 1) {
      setPaginationArray(() => {
        const tmpArr: number[] = [];
        for (let i = currentPage - 3; i < currentPage + 2; i++) {
          tmpArr.push(i);
        }
        return tmpArr;
      });
    }
  }, [currentPage]);

  return (
    <p className={classes.catalogPaginationWrapper}>
      {paginationArray.map((elem, index) => {
        return (
          <PaginationBtn
            handleCurrentPage={handleCurrentPage}
            key={index}
            value={`${elem}`}
            active={elem === currentPage}
          />
        );
      })}
      <button
        onClick={() => {
          if (currentPage !== 101) {
            handleCurrentPage(currentPage + 1);
          }
        }}
        className={classes.arrowBtn}
      >
        {'>'}
      </button>
    </p>
  );
};
