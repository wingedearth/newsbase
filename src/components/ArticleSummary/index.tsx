import { ArticleSummaryProps } from "./ArticleSummary.types";
import { ArticleSummaryTitle } from "./ArticleSummaryTitle";

export const ArticleSummary = ({ article }: ArticleSummaryProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
            <ArticleSummaryTitle title={article.title} />
            <p className="mt-2 text-gray-600">{article.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Read more
              </a>
              <div>
                <div className="text-sm text-gray-500">
                  {article.source.title}
                </div>
                <div className="text-sm text-gray-500">
                  {new Date(article.pubDate).toLocaleDateString()}
                </div>
              </div>
            </div>
            </div>
  );
};
