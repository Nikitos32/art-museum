import { PiBookmarkSimpleBold } from 'react-icons/pi';
import classes from './catalogItemInfo.module.css';

export const CatalogItemInfo = () => {
  return (
    <>
      <div className={classes.infoContent}>
        <article>
          <p className={classes.basicText}>
            Charles V, bust lengthvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
          </p>
          <p className={classes.orangeText}>Giovanni Britto</p>
        </article>
        <p className={classes.boldtext}>public</p>
      </div>
      <button className={classes.favouritesBtn}>
        <PiBookmarkSimpleBold size={24} color="rgba(241, 121, 0, 1)" />
      </button>
    </>
  );
};
