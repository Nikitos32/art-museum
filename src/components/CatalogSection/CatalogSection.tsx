import { CatalogItemList } from 'components/CatalogItemList/CatalogItemList';
import { CatalogPagination } from 'components/CatalogPagination/CatalogPagination';
import { CatalogSectionTitle } from 'components/CatalogSectionTitle/CatalogSectionTitle';
import classes from './catalogSection.module.css';
import { useEffect, useState } from 'react';
import { Arts } from 'constants/interfaces';

export const CatalogSection = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [arts, setArts] = useState<Arts>({ data: [] });

  const handleCurrentPage = (clickedPage: number) => {
    setCurrentPage(clickedPage);
  };

  useEffect(() => {
    fetch(`https://api.artic.edu/api/v1/artworks?page=${currentPage}&limit=3`)
      .then((data) => {
        return data.json();
      })
      .then((data: Arts) => {
        setArts(data);
      });
  }, [currentPage]);

  return (
    <section className={classes.catalogWrapper}>
      <CatalogSectionTitle
        firstParagraph="Topics for you"
        secondParagraph="Our special gallery"
      />
      <div>
        <CatalogItemList arts={arts} />
        <CatalogPagination
          currentPage={currentPage}
          handleCurrentPage={handleCurrentPage}
        />
      </div>
    </section>
  );
};
