import classes from './menu.module.css';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <section className={classes.menuSection}>
      <Link to="/" className={classes.menuItem}>
        Home
      </Link>
      <Link to="/favourites" className={classes.menuItem}>
        Your favorites
      </Link>
    </section>
  );
};
