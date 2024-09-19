import classes from './search.module.css';

export const Search = () => {
  return (
    <input
      className={classes.searchInput}
      placeholder="Search art, artist, work..."
      type="search"
    />
  );
};
