import { OtherWorkItem } from 'components/OtherWorkItem/OtherWorkItem';
import classes from './otherWorkList.module.css';

export const OtherWorkList = () => {
  return (
    <div className={classes.otherWorkListWrapper}>
      <OtherWorkItem />
      <OtherWorkItem />
      <OtherWorkItem />
      <OtherWorkItem />
      <OtherWorkItem />
      <OtherWorkItem />
      <OtherWorkItem />
      <OtherWorkItem />
      <OtherWorkItem />
    </div>
  );
};
