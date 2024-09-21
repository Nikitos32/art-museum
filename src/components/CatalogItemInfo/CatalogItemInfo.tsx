import classes from './catalogItemInfo.module.css';
import { ArtItem } from 'constants/interfaces';
import { FavouriteBtn } from 'components/UI/FavouriteBtn/FavouriteBtn';

interface CatalogItemInfoProps {
  art?: ArtItem;
}

export const CatalogItemInfo = ({ art }: CatalogItemInfoProps) => {
  return (
    <>
      <div className={classes.infoContent}>
        <article>
          <p className={classes.basicText}>{art?.title}</p>
          <p className={classes.orangeText}>{art?.artist_display}</p>
        </article>
        <p className={classes.boldtext}>
          {art?.is_public_domain ? 'public' : 'private'}
        </p>
      </div>
      <FavouriteBtn />
    </>
  );
};
