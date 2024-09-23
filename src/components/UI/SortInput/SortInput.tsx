import { ChangeEvent } from 'react';
import classes from './sortInput.module.css';

interface SortInputProps {
  handleSortValue: (event: ChangeEvent) => void;
}

export const SortInput = ({ handleSortValue }: SortInputProps) => {
  return (
    <div className={classes.selectWrapper}>
      <select
        name="sortSelect"
        id="sortSelect"
        className={classes.sortSelect}
        onChange={(event: ChangeEvent) => handleSortValue(event)}
      >
        <option value="none">none</option>
        <option value="desc">updated at desc order</option>
        <option value="asc">updated at asc order</option>
      </select>
    </div>
  );
};
