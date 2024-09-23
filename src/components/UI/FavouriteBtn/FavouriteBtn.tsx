import { PiBookmarkSimpleBold } from 'react-icons/pi';
import classes from './favouriteBtn.module.css';
import classNames from 'classnames';

interface FavouriteBtnProps {
  background?: string;
  artId: string;
}

export const FavouriteBtn = ({ background, artId }: FavouriteBtnProps) => {
  const handleFavouriteBtnClick = () => {
    let savedItems: string[] = [];
    if (localStorage.getItem('favouriteArts')) {
      savedItems = (localStorage.getItem('favouriteArts') as string).split(',');
    }
    savedItems.push(`${artId}`);
    localStorage.setItem('favouriteArts', savedItems.join());
  };
  return (
    <button
      onClick={() => {
        handleFavouriteBtnClick();
      }}
      className={classNames(classes.favouritesBtn)}
      style={{ background: `${background}` }}
    >
      <PiBookmarkSimpleBold size={24} color="rgba(241, 121, 0, 1)" />
    </button>
  );
};
