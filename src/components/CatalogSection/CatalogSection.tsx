import { CatalogItemList } from 'components/CatalogItemList/CatalogItemList';
import { CatalogPagination } from 'components/CatalogPagination/CatalogPagination';
import { CatalogSectionTitle } from 'components/CatalogSectionTitle/CatalogSectionTitle';
import classes from './catalogSection.module.css';
import { ChangeEvent, useState } from 'react';
import useDebounce from 'hooks/useDebounce';
import { SortInput } from 'components/UI/SortInput/SortInput';
import { Loader } from 'components/Loader/Loader';
import { CatalogSectionProps } from 'constants/types';
import { useFetchCatalogArts } from 'api/api';
import { DEBOUNCE_DELAY_MC } from 'constants/constants';

export const CatalogSection = ({ query }: CatalogSectionProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const defferValueQuery = useDebounce<string>(query, DEBOUNCE_DELAY_MC);
  const [sortOrder, setSortOrder] = useState<string>('none');
  const { isLoading, searchResults, arts, setIsLoading } = useFetchCatalogArts(
    defferValueQuery,
    sortOrder,
    currentPage
  );

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

  return (
    <section className={classes.catalogWrapper}>
      <CatalogSectionTitle
        firstParagraph="Topics for you"
        secondParagraph="Our special gallery"
      />
      <SortInput disable={query} handleSortValue={handleSortValue} />
      <div className={classes.galleryWrapper}>
        {isLoading ? (
          <Loader />
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
