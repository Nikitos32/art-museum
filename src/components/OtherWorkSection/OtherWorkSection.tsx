import { CatalogSectionTitle } from 'components/CatalogSectionTitle/CatalogSectionTitle';
import { OtherWorkList } from 'components/OtherWorkList/OtherWorkList';
import classes from './otherWorkSection.module.css';

export const OtherWorkSection = () => {
  return (
    <section className={classes.otherWorkSectionWrapper}>
      <CatalogSectionTitle
        firstParagraph="Here some more"
        secondParagraph="Other works for you"
      />
      <OtherWorkList />
    </section>
  );
};
