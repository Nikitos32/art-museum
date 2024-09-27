import { useNavigate } from 'react-router-dom';
import classes from './artPage.module.css';
import { memo } from 'react';
import { Loader } from 'components/Loader/Loader';
import { useFetchArt } from 'api/api';
import { MainArtPageInfo } from 'components/MainArtPageInfo/MainArtPageInfo';
import { ArtItem } from 'constants/types';
import { ImageWithFavouriteBtn } from 'components/ImageWithFavouriteBtn/ImageWithFavouriteBtn';

export const ArtPage = memo(function ArtPage() {
  const navigate = useNavigate();
  const { art, isLoading } = useFetchArt();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.wrapper}>
          <div>
            <button
              className={classes.backBtn}
              onClick={() => navigate('..', { relative: 'path' })}
            >
              <p>{'<'}</p>
            </button>
          </div>
          <div className={classes.artPageWrapper}>
            <ImageWithFavouriteBtn art={art as ArtItem} />
            <MainArtPageInfo art={art as ArtItem} />
          </div>
        </div>
      )}
    </>
  );
});
