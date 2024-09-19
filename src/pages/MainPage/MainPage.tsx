import { SearchSection } from 'components/SearchSection/SearchSection';
import classes from './mainPage.module.css';

export const MainPage = () => {
  return (
    <main className={classes.mainPageWrapper}>
      <div className={classes.mainPageContent}>
        <SearchSection />
      </div>
    </main>
  );
};
