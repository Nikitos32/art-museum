import { AiOutlineHome } from 'react-icons/ai';
import classes from './menu.module.css';
import { PiBookmarkSimpleBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <section className={classes.menuSection}>
      <Link to="/" className={classes.menuItem}>
        <AiOutlineHome className={classes.iconColor} />
        Home
      </Link>
      <Link to="/favourites" className={classes.menuItem}>
        <PiBookmarkSimpleBold className={classes.iconColor} />
        Your favorites
      </Link>
    </section>
  );
};
