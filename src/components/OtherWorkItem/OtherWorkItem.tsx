import { CatalogItemInfo } from 'components/CatalogItemInfo/CatalogItemInfo';
import classes from './otherWorkItem.module.css';

export const OtherWorkItem = () => {
  return (
    <div className={classes.otherWorkItemWrapper}>
      <img
        src="src/assets/test-image.png"
        alt="image"
        className={classes.otherWorkImage}
      />
      <CatalogItemInfo />
    </div>
  );
};
