import { ArtItem, Arts, SearchArts, SearchArtsItem } from 'constants/types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchSearchArts = (searchArts: SearchArtsItem[]) => {
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

  return [fetchArt];
};

export const useFetchFavouriteArts = () => {
  const [fetchArt, setFetchArt] = useState<ArtItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    localStorage
      .getItem('favouriteArts')
      ?.split(',')
      .map((elem) => {
        fetch(`https://api.artic.edu/api/v1/artworks/${elem}`)
          .then((data) => {
            return data.json();
          })
          .then((data: Arts) => {
            setFetchArt((prevState) => [...prevState, data.data as ArtItem]);
          });
      });
    setTimeout(() => setIsLoading(false), 2000);
    return setFetchArt([]);
  }, []);

  return { fetchArt, isLoading };
};

export const useFetchCatalogArts = (
  defferValueQuery: string,
  sortOrder: string,
  currentPage: number
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<SearchArtsItem[]>();
  const [arts, setArts] = useState<ArtItem[]>([]);
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
  return { isLoading, searchResults, arts, setIsLoading };
};

export const useFetchArt = () => {
  const [art, setArt] = useState<ArtItem>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const param = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.artic.edu/api/v1/artworks/${param.artId}`)
      .then((data) => {
        return data.json();
      })
      .then((data: Arts) => {
        setIsLoading(false);
        setArt(data.data as ArtItem);
      });
  }, []);

  return { art, isLoading };
};
