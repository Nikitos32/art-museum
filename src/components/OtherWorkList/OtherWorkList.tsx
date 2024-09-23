import { OtherWorkItem } from 'components/OtherWorkItem/OtherWorkItem';
import classes from './otherWorkList.module.css';
import { useEffect, useState } from 'react';
import { ArtItem, Arts } from 'constants/interfaces';

export const OtherWorkList = () => {
  const [arts, setArts] = useState<Arts>({ data: [] });

  useEffect(() => {
    fetch(`https://api.artic.edu/api/v1/artworks?page=6&limit=9`)
      .then((data) => {
        return data.json();
      })
      .then((data: Arts) => {
        setArts(data);
      });
  }, []);

  return (
    <div className={classes.otherWorkListWrapper}>
      {(arts.data as ArtItem[]).map((elem) => {
        return <OtherWorkItem art={elem} key={elem.id} />;
      })}
    </div>
  );
};
