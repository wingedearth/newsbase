import { Image } from '@/components/NewsPage/NewsPage.types';

export const ArticleSummaryImage = ({ image }: { image?: Image }) => {
  if (!image?.url || typeof image?.url !== 'string') return null;

  return <img src={image.url} />;
};
