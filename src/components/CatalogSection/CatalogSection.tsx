import { CatalogItemList } from 'components/CatalogItemList/CatalogItemList';
import { CatalogPagination } from 'components/CatalogPagination/CatalogPagination';
import { CatalogSectionTitle } from 'components/CatalogSectionTitle/CatalogSectionTitle';
import classes from './catalogSection.module.css';
import { useEffect, useState } from 'react';
import {
  ArtItem,
  Arts,
  SearchArts,
  SearchArtsItem,
} from 'constants/interfaces';
import { Oval } from 'react-loader-spinner';
import useDebounce from 'hooks/useDebounce';

interface CatalogSectionProps {
  query: string;
}

export const CatalogSection = ({ query }: CatalogSectionProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [arts, setArts] = useState<ArtItem[]>([]);
  const [searchResults, setSearchResults] = useState<SearchArtsItem[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const defferValueQuery = useDebounce<string>(query, 500);

  const handleCurrentPage = (clickedPage: number) => {
    setCurrentPage(clickedPage);
  };

  useEffect(() => {
    setIsLoading(true);
    if (defferValueQuery) {
      fetch(
        `https://api.artic.edu/api/v1/artworks/search?q=${defferValueQuery}&limit=3&from=${currentPage * 3}`
      )
        .then((data) => {
          return data.json();
        })
        .then((data: SearchArts) => {
          setSearchResults(data.data);
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
          <CatalogItemList
            query={defferValueQuery}
            searchArts={searchResults}
            arts={arts}
          />
        )}
        <CatalogPagination
          currentPage={currentPage}
          handleCurrentPage={handleCurrentPage}
        />
      </div>
    </section>
  );
};
