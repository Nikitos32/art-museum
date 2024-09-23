import classes from './catalogItemInfo.module.css';
import { ArtItem } from 'constants/interfaces';
import { FavouriteBtn } from 'components/UI/FavouriteBtn/FavouriteBtn';
import { Link } from 'react-router-dom';

interface CatalogItemInfoProps {
  art?: ArtItem;
}

export const CatalogItemInfo = ({ art }: CatalogItemInfoProps) => {
  return (
    <>
      <Link to={`${art?.id}`}>
        <div className={classes.infoContent}>
          <article>
            <p className={classes.basicText}>{art?.title}</p>
            <p className={classes.orangeText}>{art?.artist_display}</p>
          </article>
          <p className={classes.boldtext}>
            {art?.is_public_domain ? 'public' : 'private'}
          </p>
        </div>
      </Link>
      <FavouriteBtn artId={art?.id as string} />
    </>
  );
};
