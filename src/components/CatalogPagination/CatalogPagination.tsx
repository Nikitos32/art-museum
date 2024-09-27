import { PaginationBtn } from 'components/UI/PaginationBtn/PaginationBtn';
import classes from './catalogPagination.module.css';
import { catalogPaginationProps } from 'constants/types';
import { usePagination } from 'hooks/usePagination';

export const CatalogPagination = ({
  currentPage,
  handleCurrentPage,
}: catalogPaginationProps) => {
  const [paginationArray] = usePagination(currentPage);
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
