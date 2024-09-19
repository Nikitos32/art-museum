import classes from './catalogSectionTitle.module.css';

export const CatalogSectionTitle = () => {
  return (
    <title className={classes.titleWrapper}>
      <p className={classes.topicsText}>Topics for you</p>
      <p className={classes.mainCatalogTitleText}>Our special gallery</p>
    </title>
  );
};
