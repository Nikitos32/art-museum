import classes from './catalogItem.module.css';
import { CatalogItemInfo } from 'components/CatalogItemInfo/CatalogItemInfo';

export const CatalogItem = () => {
  return (
    <div className={classes.catalogItemWrapper}>
      <img
        src="src/assets/test-image.png"
        alt="image"
        className={classes.imageSize}
      />
      <section className={classes.infoWrapper}>
        <CatalogItemInfo />
      </section>
    </div>
  );
};
