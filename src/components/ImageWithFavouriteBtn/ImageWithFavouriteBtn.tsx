import { FavouriteBtn } from 'components/UI/FavouriteBtn/FavouriteBtn';
import classes from './imageWithFavouriteBtn.module.css';
import { MyImage } from 'components/Image/MyImage';
import { MainArtPageInfoProps } from 'constants/types';

export const ImageWithFavouriteBtn = ({ art }: MainArtPageInfoProps) => {
  return (
    <div className={classes.image}>
      <FavouriteBtn artId={art?.id} background="white" />
      <div className={classes.imageWrapper}>
        {!art?.image_id ? (
          <p className={classes.noImage}>No Image</p>
        ) : (
          <MyImage art={art} />
        )}
      </div>
    </div>
  );
};
