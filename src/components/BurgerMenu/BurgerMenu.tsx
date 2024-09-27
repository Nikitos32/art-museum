import { BurgerMenuProps } from 'constants/types';
import classes from './burgerMenu.module.css';

export const BurgerMenu = ({ handleBurger }: BurgerMenuProps) => {
  return (
    <div
      className={classes.burgerMenuSVG}
      onClick={handleBurger}
      aria-label="burger"
    >
      <img src="./burger-open.svg" alt="menu" aria-label="burger" />
      <img src="./burger-open.svg" alt="menu" aria-label="burger" />
      <img src="./burger-open.svg" alt="menu" aria-label="burger" />
    </div>
  );
};
