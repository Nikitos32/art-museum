import { CiSearch } from 'react-icons/ci';
import classes from './search.module.css';

export const Search = () => {
  return (
    <form className={classes.searchInput}>
      <input
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
