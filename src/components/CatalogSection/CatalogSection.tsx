import { CatalogItemList } from 'components/CatalogItemList/CatalogItemList';
import { CatalogPagination } from 'components/CatalogPagination/CatalogPagination';
import { CatalogSectionTitle } from 'components/CatalogSectionTitle/CatalogSectionTitle';
import classes from './catalogSection.module.css';
import { useDeferredValue, useEffect, useState } from 'react';
import { ArtItem, Arts, SearchArts } from 'constants/interfaces';
import { Oval } from 'react-loader-spinner';

interface CatalogSectionProps {
  query: string;
}

export const CatalogSection = ({ query }: CatalogSectionProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [arts, setArts] = useState<ArtItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const defferValueQuery = useDeferredValue(query);

  const handleCurrentPage = (clickedPage: number) => {
    setCurrentPage(clickedPage);
  };

  useEffect(() => {
    setIsLoading(true);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (defferValueQuery) {
      fetch(
        `https://api.artic.edu/api/v1/artworks/search?q=${defferValueQuery}&limit=3`
      )
        .then((data) => {
          return data.json();
        })
        .then((data: SearchArts) => {
          const searchArtsArray: ArtItem[] = [];
          for (let i = 0; i < data.data.length; i++) {
            fetch(data.data[i].api_link)
              .then((data) => {
                return data.json();
              })
              .then((data: Arts) => {
                searchArtsArray.push(data.data as ArtItem);
              });
          }
          setArts(searchArtsArray);
          setIsLoading(false);
        });
    } else {
      fetch(`https://api.artic.edu/api/v1/artworks?page=${currentPage}&limit=3`)
        .then((data) => {
          return data.json();
        })
        .then((data: Arts) => {
          setArts(data.data as ArtItem[]);
          setIsLoading(false);
        });
    }
  }, [currentPage, defferValueQuery]);

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
