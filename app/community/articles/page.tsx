export const dynamic = "force-dynamic";

import ArticleCard from "@/components/domain/community/article/articleCard";
import CommonPagination from "@/components/common/pagination";
import { ClipboardList, SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getArticles } from "@/services/community.server";

export default async function CommunityPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;

  const page = Number(params.page ?? 1);

  const articles = await getArticles(page);
  if (!articles) {
    redirect("/");
  }

  console.log("articles 정보: ", articles);

  const currentArticles = articles.content;
  const totalPages = articles.totalPages;

  return (
    <div className="w-full max-w-7xl mx-auto mt-2">
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
          totalPages={totalPages}
          basePath="/community/articles"
        />
      </div>
    </div>
  );
}
