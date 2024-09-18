import { Menu } from 'components/Menu/Menu';
import classes from './header.module.css';

export const Header = () => {
  return (
    <header className={classes.headerWrapper}>
      <div className={classes.headerContent}>
        <img src="src/assets/museum-logo-white.svg" alt="logo" />
        <Menu />
      </div>
    </header>
  );
};
