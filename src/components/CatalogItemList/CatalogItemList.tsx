import { CatalogItem } from 'components/CatalogItem/CatalogItem';
import classes from './catalogItemList.module.css';
import { ArtItem } from 'constants/interfaces';

interface CatalogItemListProps {
  arts: ArtItem[];
}

export const CatalogItemList = ({ arts }: CatalogItemListProps) => {
  return (
    <div className={classes.catalogItemListWrapper}>
      {arts.map((elem) => {
        return <CatalogItem art={elem} key={elem.title + '12'} />;
      })}
    </div>
  );
};
