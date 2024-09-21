import { ArtItem } from 'constants/interfaces';
import classes from './catalogItem.module.css';
import { CatalogItemInfo } from 'components/CatalogItemInfo/CatalogItemInfo';
import { Link } from 'react-router-dom';

interface CatalogItemProps {
  art: ArtItem;
}

export const CatalogItem = ({ art }: CatalogItemProps) => {
  return (
    <Link
      to={`${art.title}`}
      className={classes.catalogItemWrapper}
      style={{ textDecoration: 'none' }}
    >
      <img
        src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
        alt="image"
        className={classes.imageSize}
      />
      <section className={classes.infoWrapper}>
        <CatalogItemInfo art={art} />
      </section>
    </Link>
  );
};
