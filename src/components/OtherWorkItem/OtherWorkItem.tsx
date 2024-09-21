import { CatalogItemInfo } from 'components/CatalogItemInfo/CatalogItemInfo';
import classes from './otherWorkItem.module.css';
import { ArtItem } from 'constants/interfaces';
import { Link } from 'react-router-dom';

interface OtherWorkItemProps {
  art: ArtItem;
}

export const OtherWorkItem = ({ art }: OtherWorkItemProps) => {
  return (
    <Link
      to={`${art.id}`}
      className={classes.otherWorkItemWrapper}
      style={{ textDecoration: 'none' }}
    >
      <img
        src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
        alt="image"
        className={classes.otherWorkImage}
      />
      <CatalogItemInfo art={art} />
    </Link>
  );
};
