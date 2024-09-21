import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import classes from './mainLayout.module.css';

export const MainLayout = () => {
  return (
    <div className={classes.mainLayoutWrapper}>
      <Header />
      <div className={classes.outletSection}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
