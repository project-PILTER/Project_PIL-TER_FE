import { articles } from "@/components/domain/community/articleExamples";
import ArticleCard from "@/components/domain/community/articleCard";
import { getArticles } from "@/services/community.service";
import CommonPagination from "@/components/common/pagination";
import { ClipboardList } from "lucide-react";

export default async function CommunityPage({searchParams}:{searchParams: Promise<{page?: string;}>}) {
  const params = await searchParams;

  // const articles = await getArticles();

  const page = Number(params.page ?? 1);
  return (
    <div className="container mx-auto mt-2">
      <div className="flex my-4">
        <ClipboardList />
        <h2 className="ml-2 font-bold text-xl">커뮤니티 게시글 목록</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
      </div>
      <div className="mt-8">
        <CommonPagination currentPage={page} totalPages={10} basePath="/community" />
      </div>
    </div>
  );
}
