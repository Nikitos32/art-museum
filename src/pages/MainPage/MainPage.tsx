import { SearchSection } from 'components/SearchSection/SearchSection';
import classes from './mainPage.module.css';
import { CatalogSection } from 'components/CatalogSection/CatalogSection';
import { OtherWorkSection } from 'components/OtherWorkSection/OtherWorkSection';
import { ChangeEvent, useState } from 'react';

export const MainPage = () => {
  const [query, setQuery] = useState<string>('');

  const handleQuery = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setQuery(target.value);
  };

  return (
    <main className={classes.mainPageWrapper}>
      <div className={classes.mainPageContent}>
        <SearchSection query={query} handleQuery={handleQuery} />
        <CatalogSection query={query} />
        <OtherWorkSection />
      </div>
    </main>
  );
};
