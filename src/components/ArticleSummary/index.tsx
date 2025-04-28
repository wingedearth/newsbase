import { Image } from '../NewsPage/NewsPage.types';
import { ArticleDescription } from './ArticleDescription';
import { ArticleSummaryProps } from './ArticleSummary.types';
import { ArticleSummaryFooterLeft } from './ArticleSummaryFooterLeft';
import { ArticleSummaryFooterRight } from './ArticleSummaryFooterRight';
import { ArticleSummaryImage } from './ArticleSummaryImage';
import { ArticleSummaryTitle } from './ArticleSummaryTitle';

export const ArticleSummary = ({ article }: ArticleSummaryProps) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <ArticleSummaryTitle title={article.title} />
      <ArticleSummaryImage image={article?.image} />
      <ArticleDescription description={article?.description} />
      <div className="mt-4 flex items-center justify-between">
        <ArticleSummaryFooterLeft article={article} />
        <ArticleSummaryFooterRight article={article} />
      </div>
    </div>
  );
};
