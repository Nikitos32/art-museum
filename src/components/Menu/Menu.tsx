import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import classes from './menu.module.css';
import { Link } from 'react-router-dom';
import { useResize } from 'hooks/useResize';

export const Menu = () => {
  const { width, handleBurger, isBurgerOpen } = useResize();

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
        <Link
          to="/"
          className={classes.menuItem}
          aria-label="burger"
          data-testid="favouriteBtn"
        >
          Home
        </Link>
        <Link to="/favourites" className={classes.menuItem} aria-label="burger">
          Your favorites
        </Link>
      </div>
    </section>
  );
};
