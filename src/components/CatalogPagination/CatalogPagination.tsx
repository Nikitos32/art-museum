import { PaginationBtn } from 'components/UI/PaginationBtn/PaginationBtn';
import classes from './catalogPagination.module.css';
import { IoIosArrowForward } from 'react-icons/io';

interface catalogPaginationProps {
  currentPage: number;
  handleCurrentPage: (clickedPage: number) => void;
}

export const CatalogPagination = ({
  currentPage,
  handleCurrentPage,
}: catalogPaginationProps) => {
  return (
    <p className={classes.catalogPaginationWrapper}>
      {[1, 2, 3, 4].map((elem, index) => {
        return (
          <PaginationBtn
            handleCurrentPage={handleCurrentPage}
            key={index}
            value={`${index + 1}`}
            active={elem === currentPage}
          />
        );
      })}
      <button
        onClick={() => {
          if (currentPage !== 4) handleCurrentPage(currentPage + 1);
        }}
        className={classes.arrowBtn}
      >
        <IoIosArrowForward />
      </button>
    </p>
  );
};
