import { Search } from 'components/UI/Search/Search';
import classes from './searchSection.module.css';

export const SearchSection = () => {
  return (
    <section className={classes.searchSection}>
      <p className={classes.searchSectionTitle}>
        Let{"'"}s Find Some
        <span className={classes.orangeText}> Art </span>
        Here!
      </p>
      <Search />
    </section>
  );
};
