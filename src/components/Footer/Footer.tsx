import { Link } from 'react-router-dom';
import classes from './footer.module.css';
import { MODSEN_LINK } from 'constants/constants';

export const Footer = () => {
  return (
    <footer className={classes.footerWrapper}>
      <div className={classes.footerContent}>
        <Link to="/">
          <img src="./museum-logo-black.svg" alt="logo" />
        </Link>
        <Link to={MODSEN_LINK}>
          <img src="./logo-modsen.svg" alt="logo" />
        </Link>
      </div>
    </footer>
  );
};
