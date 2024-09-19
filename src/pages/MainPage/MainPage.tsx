import { SearchSection } from 'components/SearchSection/SearchSection';
import classes from './mainPage.module.css';

export const MainPage = () => {
  return (
    <main className="">
      <div className={classes.mainPageWrapper}>
        <SearchSection />
      </div>
    </main>
  );
};
