import ArticleDetail from "@/components/domain/community/article/articleDetail";
import CommentList from "@/components/domain/community/comment/commentList";
import { comments } from "@/components/domain/community/examples/commentExamples";
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
    alert("검색된 게시글이 없습니다.");
    redirect("/");
  }

  return (
    <div className="w-4xl mx-auto p-4 space-y-4">
      <div className="flex flex-col gap-4">
        <ArticleDetail article={article} id={articleId}/>
      </div>
      <CommentList comments={comments} />
    </div>
  );
}