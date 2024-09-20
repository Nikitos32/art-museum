import { CatalogItemList } from 'components/CatalogItemList/CatalogItemList';
import { CatalogPagination } from 'components/CatalogPagination/CatalogPagination';
import { CatalogSectionTitle } from 'components/CatalogSectionTitle/CatalogSectionTitle';
import classes from './catalogSection.module.css';
import { useEffect, useState } from 'react';
import { Arts } from 'constants/interfaces';
import { Oval } from 'react-loader-spinner';

export const CatalogSection = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [arts, setArts] = useState<Arts>({ data: [] });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCurrentPage = (clickedPage: number) => {
    setCurrentPage(clickedPage);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.artic.edu/api/v1/artworks?page=${currentPage}&limit=3`)
      .then((data) => {
        return data.json();
      })
      .then((data: Arts) => {
        setArts(data);
        setIsLoading(false);
      });
  }, [currentPage]);

  return (
    <section className={classes.catalogWrapper}>
      <CatalogSectionTitle
        firstParagraph="Topics for you"
        secondParagraph="Our special gallery"
      />
      <div className={classes.galleryWrapper}>
        {isLoading ? (
          <Oval
            visible={true}
            height="80"
            width="80"
            secondaryColor="rgba(224, 164, 73, 1)"
            color="rgba(241, 121, 0, 1)"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass={classes.loader}
          />
        ) : (
          <CatalogItemList arts={arts} />
        )}
        <CatalogPagination
          currentPage={currentPage}
          handleCurrentPage={handleCurrentPage}
        />
      </div>
    </section>
  );
};
