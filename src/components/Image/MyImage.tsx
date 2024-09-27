import { CatalogItemProps } from 'constants/types';
import classes from './myImage.module.css';

export const MyImage = ({ art }: CatalogItemProps) => {
  return (
    <img
      className={classes.imageSize}
      src={`https://www.artic.edu/iiif/2/${art?.image_id}/full/843,/0/default.jpg`}
      alt="image"
      loading="lazy"
    />
  );
};
