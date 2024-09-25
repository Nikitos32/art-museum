import { CiSearch } from 'react-icons/ci';
import classes from './search.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs, SearchProps } from 'constants/types';

export const Search = ({ handleQuery, query }: SearchProps) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const OnSubmit: SubmitHandler<Inputs> = (data, event) => {
    data.search.toString();
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
