import Parser from 'rss-parser';
import { Article } from './NewsPage.types';
import { ArticleSummary } from '../ArticleSummary';
import { feedUrls } from './constants';

const mapParsedFeedToArticles = (parsedFeed: any) => {
  return parsedFeed?.items?.map((item: any) => ({
    description: item.contentSnippet || item.content || 'No description',
    image: item.enclosure?.url
      ? {
          url: item.enclosure.url,
        }
      : undefined,
    link: item.link || '#',
    pubDate: item.pubDate || item.isoDate || 'No date',
    source: {
      image: parsedFeed?.image
        ? {
            url: parsedFeed.image?.url || '',
          }
        : undefined,
      link: parsedFeed?.link || '',
      title: parsedFeed?.title || '',
    },
    title: item.title || 'No title',
  }));
};

const fetchNews = async (): Promise<Article[]> => {
  const parser = new Parser();

  const allArticles: Article[] = [];
  for (const feed of feedUrls) {
    try {
      const parsedFeed = await parser.parseURL(feed.url);
      const articles = mapParsedFeedToArticles(parsedFeed);
      console.log('parsedFeed:', parsedFeed);
      console.log('typeof parsedFeed.items:', typeof parsedFeed.items);
      console.log('articles:', articles);
      allArticles.push(...articles);
    } catch (error) {
      console.error(`Failed to fetch ${feed.url}:`, error);
    }
  }

  // Sort by date (newest first)
  return allArticles.sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  );
};

export const NewsPage = async () => {
  const articles = await fetchNews();

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-8 text-center text-4xl font-bold text-blue-600">
        Web Engineering News
      </h1>
      <div className="mx-auto grid max-w-4xl gap-6">
        {articles.slice(0, 10).map((article, index) => (
          <ArticleSummary key={index} article={article} />
        ))}
      </div>
    </main>
  );
};
