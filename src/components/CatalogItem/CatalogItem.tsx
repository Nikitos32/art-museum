import { ArtItem } from 'constants/interfaces';
import classes from './catalogItem.module.css';
import { CatalogItemInfo } from 'components/CatalogItemInfo/CatalogItemInfo';

interface CatalogItemProps {
  art: ArtItem;
}

export const CatalogItem = ({ art }: CatalogItemProps) => {
  return (
    <div className={classes.catalogItemWrapper}>
      <img
        src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
        alt="image"
        className={classes.imageSize}
      />
      <section className={classes.infoWrapper}>
        <CatalogItemInfo art={art} />
      </section>
    </div>
  );
};
