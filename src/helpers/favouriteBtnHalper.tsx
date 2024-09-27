import { useState } from 'react';

export const useFavouriteBtn = (artId: string) => {
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

  return { deleteFavouriteArt, handleFavouriteBtnClick };
};
