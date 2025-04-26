export interface Image {
  title?: string;
  url: string;
}

export interface Article {
  description: string;
  image?: Image;
  link: string;
  pubDate: string;
  source: {
    image?: Image;
    link?: string;
    title?: string;
  }
  title: string;
};
