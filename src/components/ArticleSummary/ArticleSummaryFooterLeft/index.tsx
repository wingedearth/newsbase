import { Article } from '@/components/NewsPage/NewsPage.types';

export const ArticleSummaryFooterLeft = ({ article }: { article: Article }) => {
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      Read more
    </a>
  );
};
