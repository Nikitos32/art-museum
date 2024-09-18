import { AiOutlineHome } from 'react-icons/ai';
import classes from './menu.module.css';
import { PiBookmarkSimpleBold } from 'react-icons/pi';

export const Menu = () => {
  return (
    <section className={classes.menuSection}>
      <p className={classes.menuItem}>
        <AiOutlineHome className={classes.iconColor} />
        Home
      </p>
      <p className={classes.menuItem}>
        <PiBookmarkSimpleBold className={classes.iconColor} />
        Your favorites
      </p>
    </section>
  );
};
