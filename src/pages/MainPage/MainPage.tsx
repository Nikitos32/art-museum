import { SearchSection } from 'components/SearchSection/SearchSection';
import classes from './mainPage.module.css';
import { CatalogSection } from 'components/CatalogSection/CatalogSection';
import { OtherWorkSection } from 'components/OtherWorkSection/OtherWorkSection';

export const MainPage = () => {
  return (
    <main className={classes.mainPageWrapper}>
      <div className={classes.mainPageContent}>
        <SearchSection />
        <CatalogSection />
        <OtherWorkSection />
      </div>
    </main>
  );
};
