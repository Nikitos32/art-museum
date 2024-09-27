import { OtherWorkItem } from 'components/OtherWorkItem/OtherWorkItem';
import classes from './otherWorkList.module.css';
import { ArtItem } from 'constants/interfaces';
import { useFetchOtherWorkList } from 'api/api';

export const OtherWorkList = () => {
  const [arts] = useFetchOtherWorkList();
  return (
    <div className={classes.otherWorkListWrapper}>
      {(arts.data as ArtItem[]).map((elem) => {
        return <OtherWorkItem art={elem} key={elem.id} />;
      })}
    </div>
  );
};
