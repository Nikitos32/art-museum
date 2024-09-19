import { PaginationBtn } from 'components/UI/PaginationBtn/PaginationBtn';
import classes from './catalogPagination.module.css';
import { IoIosArrowForward } from 'react-icons/io';

export const CatalogPagination = () => {
  return (
    <p className={classes.catalogPaginationWrapper}>
      <PaginationBtn value="1" active={true} />
      <PaginationBtn value="2" />
      <PaginationBtn value="3" />
      <PaginationBtn value="4" />
      <button className={classes.arrowBtn}>
        <IoIosArrowForward />
      </button>
    </p>
  );
};
