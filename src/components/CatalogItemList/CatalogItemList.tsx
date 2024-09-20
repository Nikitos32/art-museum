import { CatalogItem } from 'components/CatalogItem/CatalogItem';
import classes from './catalogItemList.module.css';
import { Arts } from 'constants/interfaces';

interface CatalogItemListProps {
  arts: Arts;
}

export const CatalogItemList = ({ arts }: CatalogItemListProps) => {
  return (
    <div className={classes.catalogItemListWrapper}>
      {arts.data.map((elem) => {
        return <CatalogItem art={elem} key={elem.image_id} />;
      })}
    </div>
  );
};
