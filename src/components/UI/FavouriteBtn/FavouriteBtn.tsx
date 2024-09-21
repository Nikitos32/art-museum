import { PiBookmarkSimpleBold } from 'react-icons/pi';
import classes from './favouriteBtn.module.css';

export const FavouriteBtn = () => {
  return (
    <button className={classes.favouritesBtn}>
      <PiBookmarkSimpleBold size={24} color="rgba(241, 121, 0, 1)" />
    </button>
  );
};
