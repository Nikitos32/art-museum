import { CiSearch } from 'react-icons/ci';
import classes from './search.module.css';
import { ChangeEvent } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface SearchProps {
  handleQuery: (event: ChangeEvent) => void;
  query: string;
}

interface Inputs {
  search: string;
}

export const Search = ({ handleQuery, query }: SearchProps) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const OnSubmit: SubmitHandler<Inputs> = (data, event) => {
    event?.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit(OnSubmit)} className={classes.searchInput}>
      <input
        {...register('search')}
        value={query}
        onChange={(event) => handleQuery(event)}
        className={classes.searchArea}
        placeholder="Search art, artist, work..."
        type="text"
      />
      <button type="submit" className={classes.searchBtn}>
        <CiSearch size={20} />
      </button>
    </form>
  );
};
