import classes from './favouriteBtn.module.css';
import classNames from 'classnames';
import { FavouriteBtnProps } from 'constants/types';
import { useState } from 'react';
import { BsBookmarkCheckFill, BsBookmarkPlus } from 'react-icons/bs';

export const FavouriteBtn = ({ background, artId }: FavouriteBtnProps) => {
  const [, setLSItem] = useState<string>();
  const deleteFavouriteArt = () => {
    let savedItems: string[] = (
      localStorage.getItem('favouriteArts') as string
    ).split(',');
    savedItems = savedItems.filter((elem) => {
      if (elem !== `${artId}`) {
        return elem;
      }
    });
    localStorage.setItem('favouriteArts', savedItems.join());
    setLSItem(savedItems?.join());
  };

  const handleFavouriteBtnClick = () => {
    let savedItems: string[] = [];
    if (localStorage.getItem('favouriteArts')) {
      savedItems = (localStorage.getItem('favouriteArts') as string).split(',');
    }
    savedItems.push(`${artId}`);
    localStorage.setItem('favouriteArts', savedItems.join());
    setLSItem(savedItems?.join());
  };
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
        <BsBookmarkCheckFill size={24} color="rgba(241, 121, 0, 1)" />
      ) : (
        <BsBookmarkPlus size={24} color="rgba(241, 121, 0, 1)" />
      )}
    </button>
  );
};
