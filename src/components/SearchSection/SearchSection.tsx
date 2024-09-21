import { Search } from 'components/UI/Search/Search';
import classes from './searchSection.module.css';
import { ChangeEvent } from 'react';

interface SearchSectionProps {
  handleQuery: (event: ChangeEvent) => void;
  query: string;
}

export const SearchSection = ({ handleQuery, query }: SearchSectionProps) => {
  return (
    <section className={classes.searchSection}>
      <p className={classes.searchSectionTitle}>
        Let{"'"}s Find Some
        <span className={classes.orangeText}> Art </span>
        Here!
      </p>
      <Search query={query} handleQuery={handleQuery} />
    </section>
  );
};
