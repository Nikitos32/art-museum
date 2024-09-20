import classes from './paginationBtn.module.css';

interface PaginationBtnProps {
  value: string;
  active: boolean;
  handleCurrentPage: (clickedPage: number) => void;
}

export const PaginationBtn = ({
  handleCurrentPage,
  value,
  active,
}: PaginationBtnProps) => {
  return (
    <button
      onClick={() => handleCurrentPage(+value)}
      className={active ? classes.activeBtn : classes.paginationBtn}
    >
      {value}
    </button>
  );
};
