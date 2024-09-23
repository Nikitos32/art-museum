import { CatalogItemInfo } from 'components/CatalogItemInfo/CatalogItemInfo';
import classes from './otherWorkItem.module.css';
import { ArtItem } from 'constants/interfaces';
import { Link } from 'react-router-dom';

interface OtherWorkItemProps {
  art: ArtItem;
}

export const OtherWorkItem = ({ art }: OtherWorkItemProps) => {
  return (
    <div className={classes.otherWorkItemWrapper}>
      <Link to={`${art.id}`} style={{ textDecoration: 'none' }}>
        <img
          src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
          alt="image"
          className={classes.otherWorkImage}
        />
      </Link>
      <CatalogItemInfo art={art} />
    </div>
  );
};
