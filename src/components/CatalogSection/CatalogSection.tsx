import { CatalogItemList } from 'components/CatalogItemList/CatalogItemList';
import { CatalogPagination } from 'components/CatalogPagination/CatalogPagination';
import { CatalogSectionTitle } from 'components/CatalogSectionTitle/CatalogSectionTitle';
import classes from './catalogSection.module.css';
import { ChangeEvent, useEffect, useState } from 'react';
import {
  ArtItem,
  Arts,
  SearchArts,
  SearchArtsItem,
} from 'constants/interfaces';
import { Oval } from 'react-loader-spinner';
import useDebounce from 'hooks/useDebounce';
import { SortInput } from 'components/UI/SortInput/SortInput';

interface CatalogSectionProps {
  query: string;
}

export const CatalogSection = ({ query }: CatalogSectionProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [arts, setArts] = useState<ArtItem[]>([]);
  const [searchResults, setSearchResults] = useState<SearchArtsItem[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const defferValueQuery = useDebounce<string>(query, 500);
  const [sortOrder, setSortOrder] = useState<string>('none');

  const handleSortValue = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setSortOrder(target.value);
  };

  const handleCurrentPage = (clickedPage: number) => {
    setCurrentPage(clickedPage);
  };

  const handleLoading = (type: boolean) => {
    setIsLoading(type);
  };

  useEffect(() => {
    setIsLoading(true);
    if (defferValueQuery) {
      fetch(
        `https://api.artic.edu/api/v1/artworks/search?q=${defferValueQuery}&limit=3&from=${currentPage * 3}${sortOrder === 'none' ? '' : `&sort[source_updated_at][order]=${sortOrder}`}`
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
  }, [currentPage, defferValueQuery, sortOrder]);

  return (
    <section className={classes.catalogWrapper}>
      <CatalogSectionTitle
        firstParagraph="Topics for you"
        secondParagraph="Our special gallery"
      />
      <SortInput disable={query} handleSortValue={handleSortValue} />
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
            handleLoading={handleLoading}
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
