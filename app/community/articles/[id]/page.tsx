export const dynamic = 'force-dynamic';

import ArticleDetail from "@/components/domain/community/article/articleDetail";
import CommentList from "@/components/domain/community/comment/commentList";
import { getArticleDetail } from "@/services/community.service";
import { redirect } from "next/navigation";

interface ArticlePageProps {
  params: Promise<{id: string}> | {id: string}
}

export default async function ArticlePage({params}:ArticlePageProps) {
  const resolvedParams = await params;
  const articleId = Number(resolvedParams.id);

  const article = await getArticleDetail(articleId);

  if(!article) {
    redirect("/");
  }

  const comments = article.comments;

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      <div className="flex flex-col gap-4">
        <ArticleDetail article={article} id={articleId}/>
      </div>
      <CommentList initialComments={comments} articleId={articleId}/>
    </div>
  );
}