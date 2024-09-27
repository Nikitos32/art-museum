import { BurgerMenuProps } from 'constants/types';
import classes from './burgerMenu.module.css';

export const BurgerMenu = ({ handleBurger }: BurgerMenuProps) => {
  return (
    <div className={classes.burgerMenuSVG} onClick={handleBurger}>
      <img src="./burger-open.svg" alt="menu" />
      <img src="./burger-open.svg" alt="menu" />
      <img src="./burger-open.svg" alt="menu" />
    </div>
  );
};
