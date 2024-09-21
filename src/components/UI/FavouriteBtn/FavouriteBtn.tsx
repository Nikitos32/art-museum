import { PiBookmarkSimpleBold } from 'react-icons/pi';
import classes from './favouriteBtn.module.css';
import classNames from 'classnames';

interface FavouriteBtnProps {
  background?: string;
}

export const FavouriteBtn = ({ background }: FavouriteBtnProps) => {
  return (
    <button
      className={classNames(classes.favouritesBtn)}
      style={{ background: `${background}` }}
    >
      <PiBookmarkSimpleBold size={24} color="rgba(241, 121, 0, 1)" />
    </button>
  );
};
