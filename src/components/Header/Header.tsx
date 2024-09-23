import { Menu } from 'components/Menu/Menu';
import classes from './header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={classes.headerWrapper}>
      <div className={classes.headerContent}>
        <Link to="/art-museum">
          <img src="/art-museum/src/assets/museum-logo-white.svg" alt="logo" />
        </Link>
        <Menu />
      </div>
    </header>
  );
};
