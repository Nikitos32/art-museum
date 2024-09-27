import classes from './catalogItemList.module.css';
import { EmptyResults } from 'components/EmptyResults/EmptyResults';
import { CatalogItemListProps, SearchArtsItem } from 'constants/types';
import { CatalogItem } from 'components/CatalogItem/CatalogItem';
import { useFetchSearchArts } from 'api/api';

export const CatalogItemList = ({
  query,
  arts,
  searchArts,
}: CatalogItemListProps) => {
  const [fetchArt] = useFetchSearchArts(searchArts as SearchArtsItem[]);

  return (
    <div className={classes.catalogItemListWrapper}>
      {searchArts?.length === 0 && query ? (
        <EmptyResults />
      ) : query ? (
        fetchArt.map((elem) => {
          return <CatalogItem art={elem} key={elem.id} />;
        })
      ) : (
        arts.map((elem) => {
          return <CatalogItem art={elem} key={elem.id} />;
        })
      )}
    </div>
  );
};
