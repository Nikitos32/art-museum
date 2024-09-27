import classes from './favouritePage.module.css';
import { CatalogSectionTitle } from 'components/CatalogSectionTitle/CatalogSectionTitle';
import { EmptyResults } from 'components/EmptyResults/EmptyResults';
import { OtherWorkItem } from 'components/OtherWorkItem/OtherWorkItem';
import { Loader } from 'components/Loader/Loader';
import { useFetchFavouriteArts } from 'api/api';
import { memo } from 'react';

export const FavouritePage = memo(function FavouritePage() {
  const { fetchArt, isLoading } = useFetchFavouriteArts();

  return (
    <section className={classes.favouriteSectionWrapper}>
      <p className={classes.favouriteSectionTitle}>
        Here Are Your
        <span className={classes.orangeText}>Favourites</span>
      </p>
      <div className={classes.favouriteSavedWrapper}>
        <CatalogSectionTitle
          firstParagraph="Saved by you"
          secondParagraph="Your favorites list"
        />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.otherWorkListWrapper}>
            {localStorage.getItem('favouriteArts') ? (
              fetchArt.map((elem) => {
                return <OtherWorkItem art={elem} key={elem.id} />;
              })
            ) : (
              <EmptyResults />
            )}
          </div>
        )}
      </div>
    </section>
  );
});
