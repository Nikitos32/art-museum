import classes from './emptyResults.module.css';

export const EmptyResults = () => {
  return (
    <div className={classes.emptyQuery}>
      <p>No Results!</p>
    </div>
  );
};
