import { PiBookmarkSimpleBold } from 'react-icons/pi';
import classes from './catalogItemInfo.module.css';
import { ArtItem } from 'constants/interfaces';

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
      <button className={classes.favouritesBtn}>
        <PiBookmarkSimpleBold size={24} color="rgba(241, 121, 0, 1)" />
      </button>
    </>
  );
};
