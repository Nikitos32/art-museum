import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import classes from './menu.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useResize } from 'hooks/useResize';

export const Menu = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
  const [width] = useResize();

  const handleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <section className={classes.menuWrapper}>
      <BurgerMenu handleBurger={handleBurger} />
      <div
        className={
          isBurgerOpen && width < 700
            ? classes.menuSectionIsOpen
            : classes.menuSection
        }
      >
        <Link to="/" className={classes.menuItem}>
          Home
        </Link>
        <Link to="/favourites" className={classes.menuItem}>
          Your favorites
        </Link>
      </div>
    </section>
  );
};
