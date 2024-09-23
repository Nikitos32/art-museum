import { ArtItem } from 'constants/interfaces';
import classes from './catalogItem.module.css';
import { CatalogItemInfo } from 'components/CatalogItemInfo/CatalogItemInfo';
import { Link } from 'react-router-dom';

interface CatalogItemProps {
  art: ArtItem;
}

export const CatalogItem = ({ art }: CatalogItemProps) => {
  return (
    <div className={classes.catalogItemWrapper}>
      <Link
        to={`${art.id}`}
        className={classes.imageSizeWrapper}
        style={{ textDecoration: 'none' }}
      >
        <img
          src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
          alt="image"
          className={classes.imageSize}
        />
      </Link>
      <section className={classes.infoWrapper}>
        <CatalogItemInfo art={art} />
      </section>
    </div>
  );
};
