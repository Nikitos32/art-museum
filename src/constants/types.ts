import { ChangeEvent, ReactNode } from 'react';

export interface Arts {
  data: ArtItem[] | ArtItem;
}

export interface ArtItem {
  title: string;
  artist_display: string;
  is_public_domain: boolean;
  place_of_origin: string;
  dimensions: string;
  credit_line: string;
  date_display: string;
  image_id: string;
  id: string;
}

export interface SearchArts {
  data: SearchArtsItem[];
}

export interface SearchArtsItem {
  api_link: string;
}

export interface CatalogItemProps {
  art: ArtItem;
}

export interface CatalogItemInfoProps {
  art?: ArtItem;
}

export interface CatalogItemListProps {
  arts: ArtItem[];
  searchArts?: SearchArtsItem[];
  query: string;
  handleLoading: (type: boolean) => void;
}

export interface catalogPaginationProps {
  currentPage: number;
  handleCurrentPage: (clickedPage: number) => void;
}

export interface CatalogSectionProps {
  query: string;
}

export interface CatalogSectionTitleProps {
  firstParagraph: string;
  secondParagraph: string;
}

export type Props = {
  children: ReactNode;
  fallback: ReactNode;
};

export interface OtherWorkItemProps {
  art: ArtItem;
}

export interface SearchSectionProps {
  handleQuery: (event: ChangeEvent) => void;
  query: string;
}

export interface FavouriteBtnProps {
  background?: string;
  artId?: string;
}

export interface PaginationBtnProps {
  value: string;
  active: boolean;
  handleCurrentPage: (clickedPage: number) => void;
}

export interface SearchProps {
  handleQuery: (event: ChangeEvent) => void;
  query: string;
}

export interface Inputs {
  search: string;
}

export interface SortInputProps {
  handleSortValue: (event: ChangeEvent) => void;
  disable: string;
}

export interface MainArtPageInfoProps {
  art: ArtItem;
}

export interface BurgerMenuProps {
  handleBurger: () => void;
}
