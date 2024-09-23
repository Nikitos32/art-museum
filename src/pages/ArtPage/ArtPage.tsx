import { useNavigate, useParams } from 'react-router-dom';
import classes from './artPage.module.css';
import { useEffect, useState } from 'react';
import { ArtItem, Arts } from 'constants/interfaces';
import { IoChevronBackOutline } from 'react-icons/io5';
import { Oval } from 'react-loader-spinner';
import { FavouriteBtn } from 'components/UI/FavouriteBtn/FavouriteBtn';

export const ArtPage = () => {
  const [art, setArt] = useState<ArtItem>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.artic.edu/api/v1/artworks/${param.artId}`)
      .then((data) => {
        return data.json();
      })
      .then((data: Arts) => {
        setIsLoading(false);
        setArt(data.data as ArtItem);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Oval
          visible={true}
          height="80"
          width="80"
          secondaryColor="rgba(224, 164, 73, 1)"
          color="rgba(241, 121, 0, 1)"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass={classes.loader}
        />
      ) : (
        <div className={classes.wrapper}>
          <div>
            <button
              className={classes.backBtn}
              onClick={() => navigate('..', { relative: 'path' })}
            >
              <IoChevronBackOutline size={24} color="rgba(241, 121, 0, 1)" />
            </button>
          </div>
          <div className={classes.artPageWrapper}>
            <div className={classes.image}>
              <FavouriteBtn artId={art?.id} background="white" />
              <div className={classes.imageWrapper}>
                <img
                  className={classes.imageSize}
                  src={`https://www.artic.edu/iiif/2/${art?.image_id}/full/843,/0/default.jpg`}
                  alt="image"
                />
              </div>
            </div>
            <section className={classes.infoSection}>
              <div className={classes.wrapperInfoSectionContent}>
                <p className={classes.title}>{art?.title}</p>
                <div className={classes.authorInfoWrapper}>
                  <p className={classes.orangeText}>{art?.artist_display}</p>
                  <p className={classes.dateText}>{art?.date_display}</p>
                </div>
              </div>
              <div className={classes.overview}>
                <p className={classes.overviewText}>Overview</p>
                <article className={classes.overviewWrapper}>
                  <p>
                    <span className={classes.orangeText}>
                      Artist nacionality:
                    </span>{' '}
                    {art?.place_of_origin}
                  </p>
                  <p>
                    <span className={classes.orangeText}>Dimensions: </span>
                    {art?.dimensions
                      ? art?.dimensions.split(';')[0]
                      : 'no dimensions'}
                  </p>
                  <p>
                    <span className={classes.orangeText}>Credit Line:</span>{' '}
                    {art?.credit_line}
                  </p>
                  <p>{art?.is_public_domain ? 'Public' : 'Private'}</p>
                </article>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};
