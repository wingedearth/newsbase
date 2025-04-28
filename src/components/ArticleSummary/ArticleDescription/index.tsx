import parse from 'html-react-parser';
// import DOMPurify from 'dompurify';
// import { JSDOM } from 'jsdom';

export const ArticleDescription = ({
  description,
}: {
  description?: string;
}) => {
  // const { window } = new JSDOM('');
  // const domPurifyWindow = DOMPurify(window);
  // const sanitizedText = domPurifyWindow.sanitize(description || '');
  return description ? (
    <div className="mt-2 text-gray-600">{parse(description)}</div>
  ) : null;
};
