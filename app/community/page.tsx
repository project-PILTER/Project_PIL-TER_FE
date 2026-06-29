import ArticleCard from "@/components/domain/community/article/articleCard";
import { getArticles } from "@/services/community.service";
import CommonPagination from "@/components/common/pagination";
import { ClipboardList, SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function CommunityPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const articles = await getArticles();

  const page = Number(params.page ?? 1);
  const PAGE_SIZE = 8;
  const startIndex = (page - 1) * PAGE_SIZE;
  const currentArticles = articles.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <div className="w-7xl mx-auto mt-2">
      <div className="flex justify-between my-4">
        <div className="flex">
          <ClipboardList />
          <h2 className="ml-2 font-bold text-xl">커뮤니티 게시글 목록</h2>
        </div>
        <Button className="bg-[#615ed6]" asChild>
          <Link href="/community/articles/write">
            <SquarePen />
            글쓰기
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <div className="mt-8">
        <CommonPagination
          currentPage={page}
          totalPages={5}
          basePath="/community"
        />
      </div>
    </div>
  );
}
