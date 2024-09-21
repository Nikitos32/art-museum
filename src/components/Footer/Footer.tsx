import { Link } from 'react-router-dom';
import classes from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={classes.footerWrapper}>
      <div className={classes.footerContent}>
        <Link to="/">
          <img src="src/assets/museum-logo-black.svg" alt="logo" />
        </Link>
        <Link to="https://www.modsen-software.com/">
          <img src="src/assets/logo-modsen.svg" alt="logo" />
        </Link>
      </div>
    </footer>
  );
};
