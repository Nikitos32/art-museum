import { SearchSection } from 'components/SearchSection/SearchSection';
import classes from './mainPage.module.css';
import { CatalogSection } from 'components/CatalogSection/CatalogSection';

export const MainPage = () => {
  return (
    <main className={classes.mainPageWrapper}>
      <div className={classes.mainPageContent}>
        <SearchSection />
        <CatalogSection />
      </div>
    </main>
  );
};
