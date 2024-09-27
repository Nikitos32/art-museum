import { MainArtPageInfoProps } from 'constants/types';
import classes from './mainArtPageInfo.module.css';

export const MainArtPageInfo = ({ art }: MainArtPageInfoProps) => {
  return (
    <section className={classes.infoSection}>
      <div className={classes.wrapperInfoSectionContent}>
        <p className={classes.title}>{art?.title}</p>
        <div className={classes.authorInfoWrapper}>
          <p className={classes.orangeText}>{art?.artist_display}</p>
          <p className={classes.dateText}>{art?.date_display}</p>
        </div>
      </div>
      <div className={classes.overview}>
        <p className={classes.overviewText}>Overview</p>
        <article className={classes.overviewWrapper}>
          <p>
            <span className={classes.orangeText}>Artist nacionality:</span>{' '}
            {art?.place_of_origin}
          </p>
          <p>
            <span className={classes.orangeText}>Dimensions: </span>
            {art?.dimensions ? art?.dimensions.split(';')[0] : 'no dimensions'}
          </p>
          <p>
            <span className={classes.orangeText}>Credit Line:</span>{' '}
            {art?.credit_line}
          </p>
          <p>{art?.is_public_domain ? 'Public' : 'Private'}</p>
        </article>
      </div>
    </section>
  );
};
