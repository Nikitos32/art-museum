import classes from './favouriteBtn.module.css';
import classNames from 'classnames';
import { FavouriteBtnProps } from 'constants/types';
import { useFavouriteBtn } from 'helpers/favouriteBtnHalper';

export const FavouriteBtn = ({ background, artId }: FavouriteBtnProps) => {
  const { deleteFavouriteArt, handleFavouriteBtnClick } = useFavouriteBtn(
    artId as string
  );
  return (
    <button
      onClick={() => {
        if (localStorage.getItem('favouriteArts')?.includes(`${artId}`)) {
          deleteFavouriteArt();
        } else {
          handleFavouriteBtnClick();
        }
      }}
      className={classNames(classes.favouritesBtn)}
      style={{ background: `${background}` }}
    >
      {localStorage.getItem('favouriteArts')?.includes(`${artId}`) ? (
        <p>Saved</p>
      ) : (
        //"rgba(241, 121, 0, 1)"
        <p>Add</p>
        //"rgba(241, 121, 0, 1)"
      )}
    </button>
  );
};
