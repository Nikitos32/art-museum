import classes from './catalogItem.module.css';
import { CatalogItemInfo } from 'components/CatalogItemInfo/CatalogItemInfo';
import { Link } from 'react-router-dom';
import { CatalogItemProps } from 'constants/types';

export const CatalogItem = ({ art }: CatalogItemProps) => {
  return (
    <div className={classes.catalogItemWrapper}>
      <Link to={`${art.id}`} className={classes.imageSizeWrapper}>
        {!art.image_id ? (
          <div className={classes.noImage}>
            {' '}
            <p>No Image</p>
          </div>
        ) : (
          <img
            src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
            alt="image"
            className={classes.imageSize}
            loading="lazy"
          />
        )}
      </Link>
      <section className={classes.infoWrapper}>
        <CatalogItemInfo art={art} />
      </section>
    </div>
  );
};
