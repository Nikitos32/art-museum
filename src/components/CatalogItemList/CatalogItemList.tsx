import { CatalogItem } from 'components/CatalogItem/CatalogItem';
import classes from './catalogItemList.module.css';

export const CatalogItemList = () => {
  return (
    <div className={classes.catalogItemListWrapper}>
      <CatalogItem />
      <CatalogItem />
      <CatalogItem />
    </div>
  );
};
