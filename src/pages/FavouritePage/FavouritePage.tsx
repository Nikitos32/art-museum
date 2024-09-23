import { PiBookmarkSimpleBold } from 'react-icons/pi';
import classes from './favouritePage.module.css';
import { CatalogSectionTitle } from 'components/CatalogSectionTitle/CatalogSectionTitle';
import { EmptyResults } from 'components/EmptyResults/EmptyResults';
import { useEffect, useState } from 'react';
import { ArtItem, Arts } from 'constants/interfaces';
import { OtherWorkItem } from 'components/OtherWorkItem/OtherWorkItem';

export const FavouritePage = () => {
  const [fetchArt, setFetchArt] = useState<ArtItem[]>([]);

  useEffect(() => {
    localStorage
      .getItem('favouriteArts')
      ?.split(',')
      .map((elem) => {
        fetch(`https://api.artic.edu/api/v1/artworks/${elem}`)
          .then((data) => {
            return data.json();
          })
          .then((data: Arts) => {
            setFetchArt((prevState) => [...prevState, data.data as ArtItem]);
          });
      });
    return setFetchArt([]);
  }, []);

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
        <div className={classes.otherWorkListWrapper}>
          {localStorage.getItem('favouriteArts') ? (
            fetchArt.map((elem) => {
              return <OtherWorkItem art={elem} key={elem.id} />;
            })
          ) : (
            <EmptyResults />
          )}
        </div>
      </div>
    </section>
  );
};
