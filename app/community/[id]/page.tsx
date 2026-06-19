import ArticleDetail from "@/components/domain/community/articleDetail";
import { articles } from "@/components/domain/community/articleExamples";
import CommentForm from "@/components/domain/community/comment/commentForm";
import { notFound } from "next/navigation";

interface ArticlePageProps {
  params: Promise<{id: string}> | {id: string}
}

export default async function ArticlePage({params}:ArticlePageProps) {
  const resolvedParams = await params;
  const articleId = Number(resolvedParams.id);
  const article = articles.find((item) => item.id === articleId);

  if(!article) {
    notFound();
  }

  return (
    <div className="w-4xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-6">커뮤니티 게시글 목록</h1>
      <div className="flex flex-col gap-4">
        <ArticleDetail article={article} />
      </div>
      <CommentForm />
    </div>
  );
}