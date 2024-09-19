import classes from './paginationBtn.module.css';

interface PaginationBtnProps {
  value: string;
  active?: boolean;
}

export const PaginationBtn = ({ value, active }: PaginationBtnProps) => {
  return (
    <button className={active ? classes.activeBtn : classes.paginationBtn}>
      {value}
    </button>
  );
};
