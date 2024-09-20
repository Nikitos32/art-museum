export interface Arts {
  data: ArtItem[];
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
}
