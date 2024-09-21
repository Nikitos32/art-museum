import { CatalogItem } from 'components/CatalogItem/CatalogItem';
import classes from './catalogItemList.module.css';
import { ArtItem, Arts, SearchArtsItem } from 'constants/interfaces';
import { useEffect, useState } from 'react';
import { EmptyResults } from 'components/EmptyResults/EmptyResults';

interface CatalogItemListProps {
  arts: ArtItem[];
  searchArts?: SearchArtsItem[];
  query: string;
  handleLoading: (type: boolean) => void;
}

export const CatalogItemList = ({
  query,
  arts,
  searchArts,
}: CatalogItemListProps) => {
  const [fetchArt, setFetchArt] = useState<ArtItem[]>([]);

  useEffect(() => {
    searchArts?.map((elem) => {
      fetch(elem.api_link)
        .then((data) => {
          return data.json();
        })
        .then((data: Arts) => {
          setFetchArt((prevState) => [...prevState, data.data as ArtItem]);
        });
    });
    return setFetchArt([]);
  }, [searchArts]);
  console.log(searchArts);

  return (
    <div className={classes.catalogItemListWrapper}>
      {searchArts?.length === 0 && query ? (
        <EmptyResults />
      ) : query ? (
        fetchArt.map((elem) => {
          return <CatalogItem art={elem} key={elem.image_id + '12'} />;
        })
      ) : (
        arts.map((elem) => {
          return <CatalogItem art={elem} key={elem.title + '12'} />;
        })
      )}
    </div>
  );
};
