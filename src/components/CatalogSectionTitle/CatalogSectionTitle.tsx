import { CatalogSectionTitleProps } from 'constants/types';
import classes from './catalogSectionTitle.module.css';

export const CatalogSectionTitle = ({
  firstParagraph,
  secondParagraph,
}: CatalogSectionTitleProps) => {
  return (
    <title className={classes.titleWrapper}>
      <p className={classes.topicsText}>{firstParagraph}</p>
      <p className={classes.mainCatalogTitleText}>{secondParagraph}</p>
    </title>
  );
};
