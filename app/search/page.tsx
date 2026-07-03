interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q: query } = await searchParams;

  if (!query) {
    return <div>검색어가 없습니다.</div>;
  }

  // 검색한 결과 가져오는 로직

  return (
    <div className="w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">
        &ldquo;<span>{query}</span>&rdquo;에 대한 검색 결과
      </h1>
      <div className="space-y-4">
        {/* {articles.map((article) => (
          <div key={article.id} className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{article.title}</h2>
            <p className="text-sm text-gray-500 mt-1">저자: {article.author}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
}
