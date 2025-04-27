import { Image } from '../NewsPage/NewsPage.types';
import { ArticleDescription } from './ArticleDescription';
import { ArticleSummaryProps } from './ArticleSummary.types';
import { ArticleSummaryImage } from './ArticleSummaryImage';
import { ArticleSummaryTitle } from './ArticleSummaryTitle';

export const ArticleSummary = ({ article }: ArticleSummaryProps) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <ArticleSummaryTitle title={article.title} />
      <ArticleSummaryImage image={article?.image} />
      <ArticleDescription description={article?.description} />
      <div className="mt-4 flex items-center justify-between">
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Read more
        </a>
        <div>
          <div className="text-sm text-gray-500">{article.source.title}</div>
          <div className="text-sm text-gray-500">
            {new Date(article.pubDate).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};
