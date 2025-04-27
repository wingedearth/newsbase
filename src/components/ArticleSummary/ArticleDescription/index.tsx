export const ArticleDescription = ({
  description,
}: {
  description?: string;
}) => {
  return description ? (
    <p className="mt-2 text-gray-600">{description}</p>
  ) : null;
};
