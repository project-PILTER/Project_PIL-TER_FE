import ArticleDetail from "@/components/domain/community/article/articleDetail";
import CommentList from "@/components/domain/community/comment/commentList";
import { articles } from "@/components/domain/community/examples/articleExamples";
import { comments } from "@/components/domain/community/examples/commentExamples";
import { getArticleDetail } from "@/services/community.service";
import { redirect } from "next/navigation";

interface ArticlePageProps {
  params: Promise<{id: string}> | {id: string}
}

export default async function ArticlePage({params}:ArticlePageProps) {
  const resolvedParams = await params;
  const articleId = Number(resolvedParams.id);

  // const article = await getArticleDetail(articleId);
  const article = articles.find((item) => item.id === articleId);

  if(!article) {
    alert("검색된 게시글이 없습니다.");
    redirect("/");
  }

  return (
    <div className="w-4xl mx-auto p-4 space-y-4">
      <div className="flex flex-col gap-4">
        <ArticleDetail article={article} id={articleId}/>
      </div>
      <CommentList initialComments={comments} articleId={articleId}/>
    </div>
  );
}