import { PaginationBtnProps } from 'constants/types';
import classes from './paginationBtn.module.css';

export const PaginationBtn = ({
  handleCurrentPage,
  value,
  active,
}: PaginationBtnProps) => {
  return (
    <button
      aria-label="1"
      onClick={() => handleCurrentPage(+value)}
      className={active ? classes.activeBtn : classes.paginationBtn}
    >
      {value}
    </button>
  );
};
