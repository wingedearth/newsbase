import { Article } from '@/components/NewsPage/NewsPage.types';

export const ArticleSummaryFooterRight = ({
  article,
}: {
  article: Article;
}) => {
  return (
    <div className="article-summary-footer-right">
      <div className="text-sm text-gray-500">{article.source.title}</div>
      <div className="text-sm text-gray-500">
        {new Date(article.pubDate).toLocaleDateString()}
      </div>
    </div>
  );
};
