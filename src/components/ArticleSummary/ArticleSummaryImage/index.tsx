import { ImageType } from '@/components/NewsPage/NewsPage.types';
import Image from 'next/image';

export const ArticleSummaryImage = ({ image }: { image?: ImageType }) => {
  if (!image?.url || typeof image?.url !== 'string') return null;

  return <img alt={image.title} src={image.url} />;
};
