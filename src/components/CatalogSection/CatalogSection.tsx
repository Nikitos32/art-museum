import { CatalogItemList } from 'components/CatalogItemList/CatalogItemList';
import { CatalogPagination } from 'components/CatalogPagination/CatalogPagination';
import { CatalogSectionTitle } from 'components/CatalogSectionTitle/CatalogSectionTitle';
import classes from './catalogSection.module.css';

export const CatalogSection = () => {
  return (
    <section className={classes.catalogWrapper}>
      <CatalogSectionTitle />
      <div>
        <CatalogItemList />
        <CatalogPagination />
      </div>
    </section>
  );
};
