import { PiBookmarkSimpleBold } from 'react-icons/pi';
import classes from './catalogItem.module.css';

export const CatalogItem = () => {
  return (
    <div className={classes.catalogItemWrapper}>
      <img
        src="src/assets/test-image.png"
        alt="image"
        className={classes.imageSize}
      />
      <section className={classes.infoWrapper}>
        <div className={classes.infoContent}>
          <article>
            <p className={classes.basicText}>Charles V, bust length...</p>
            <p className={classes.orangeText}>Giovanni Britto</p>
          </article>
          <p className={classes.boldtext}>public</p>
        </div>
        <button className={classes.favouritesBtn}>
          <PiBookmarkSimpleBold size={24} color="rgba(241, 121, 0, 1)" />
        </button>
      </section>
    </div>
  );
};
