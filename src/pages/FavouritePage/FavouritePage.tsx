import { PiBookmarkSimpleBold } from 'react-icons/pi';
import classes from './favouritePage.module.css';
import { CatalogSectionTitle } from 'components/CatalogSectionTitle/CatalogSectionTitle';
import { EmptyResults } from 'components/EmptyResults/EmptyResults';
import { OtherWorkItem } from 'components/OtherWorkItem/OtherWorkItem';
import { Loader } from 'components/Loader/Loader';
import { useFetchFavouriteArts } from 'api/api';

export const FavouritePage = () => {
  const { fetchArt, isLoading } = useFetchFavouriteArts();

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
};
