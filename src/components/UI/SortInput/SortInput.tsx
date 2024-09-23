import { ChangeEvent } from 'react';
import classes from './sortInput.module.css';

interface SortInputProps {
  handleSortValue: (event: ChangeEvent) => void;
  disable: string;
}

export const SortInput = ({ handleSortValue, disable }: SortInputProps) => {
  return (
    <div className={classes.selectWrapper}>
      <select
        disabled={disable ? false : true}
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
