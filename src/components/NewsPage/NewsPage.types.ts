export interface ImageType {
  title: string;
  url: string;
}

export interface Article {
  description: string;
  image?: ImageType;
  link: string;
  pubDate: string;
  source: {
    image?: ImageType;
    link?: string;
    title?: string;
  };
  title: string;
}
