import { CatalogItemList } from 'components/CatalogItemList/CatalogItemList';
import { CatalogPagination } from 'components/CatalogPagination/CatalogPagination';
import { CatalogSectionTitle } from 'components/CatalogSectionTitle/CatalogSectionTitle';
import classes from './catalogSection.module.css';
import { useState } from 'react';

export const CatalogSection = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleCurrentPage = (clickedPage: number) => {
    setCurrentPage(clickedPage);
  };

  return (
    <section className={classes.catalogWrapper}>
      <CatalogSectionTitle
        firstParagraph="Topics for you"
        secondParagraph="Our special gallery"
      />
      <div>
        <CatalogItemList />
        <CatalogPagination
          currentPage={currentPage}
          handleCurrentPage={handleCurrentPage}
        />
      </div>
    </section>
  );
};
