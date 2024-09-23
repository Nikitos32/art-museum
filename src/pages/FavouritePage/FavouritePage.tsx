import { PiBookmarkSimpleBold } from 'react-icons/pi';
import classes from './favouritePage.module.css';
import { CatalogSectionTitle } from 'components/CatalogSectionTitle/CatalogSectionTitle';
import { EmptyResults } from 'components/EmptyResults/EmptyResults';

export const FavouritePage = () => {
  return (
    <section className={classes.favouriteSectionWrapper}>
      <p className={classes.favouriteSectionTitle}>
        Here Are Your
        <span className={classes.orangeText}>
          <PiBookmarkSimpleBold size={48} color="rgba(241, 121, 0, 1)" />{' '}
          Favourites
        </span>
      </p>
      <div className={classes.favouriteSavedWrapper}>
        <CatalogSectionTitle
          firstParagraph="Saved by you"
          secondParagraph="Your favorites list"
        />
        <EmptyResults />
      </div>
    </section>
  );
};
