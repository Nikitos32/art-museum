import classes from './menu.module.css';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <section className={classes.menuSection}>
      <Link to="/art-museum" className={classes.menuItem}>
        Home
      </Link>
      <Link to="/art-museum/favourites" className={classes.menuItem}>
        Your favorites
      </Link>
    </section>
  );
};
