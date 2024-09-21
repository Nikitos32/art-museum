import { CiSearch } from 'react-icons/ci';
import classes from './search.module.css';
import { ChangeEvent } from 'react';

interface SearchProps {
  handleQuery: (event: ChangeEvent) => void;
  query: string;
}

export const Search = ({ handleQuery, query }: SearchProps) => {
  return (
    <form className={classes.searchInput}>
      <input
        value={query}
        onChange={(event) => handleQuery(event)}
        className={classes.searchArea}
        placeholder="Search art, artist, work..."
        type="text"
      />
      <button className={classes.searchBtn}>
        <CiSearch size={20} />
      </button>
    </form>
  );
};
