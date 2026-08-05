"use client";

import { Comment, CommentInput } from "@/types/community.type";
import CommentItem from "./commentItem";
import CommentForm from "./commentForm";
import { useEffect, useState } from "react";
import { deleteComment, postComment, putComment } from "@/services/community.client";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";

interface CommentListProps {
  initialComments: Comment[];
  articleId: number;
}

export default function CommentList({ initialComments, articleId }: CommentListProps) {
  const router = useRouter();
  const {user, isLoading} = useAuthStore();
  const [comments, setComments] = useState<Comment[]>(initialComments);

  useEffect(() => {
    if(!isLoading && !user) {
      alert("로그인 상태가 아닙니다. 홈으로 이동합니다.");
      router.push("/");
    }
  }, [user, isLoading, router]);

  if(isLoading || !user) {
    return <Loading />
  }
  
  const rootComments = comments.filter((comment) => comment.parentId === null);

  const getReplies = (commentId: number) => {
    return comments
      .filter((comment) => comment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
  };

  const handleCommentSubmit = async(content: string) => {
    try {
      const request: CommentInput = {
        communityArticleId: articleId,
        content: content
      } 
      const res = await postComment(request);

      console.log("댓글 response 정보: ", res);

      if(res) {
        setComments((prev) => [...prev, res]);
      }
      alert("댓글이 정상적으로 등록됐습니다.");
      router.refresh();
    } catch (error) {
      console.error("댓글 처리 문제 발생");
    }
  }

  const handleCommentUpdate = async(commentId: number, content: string) => {
    try {
      const res = await putComment(content, commentId);

      if(res) {
        setComments((prev) => prev.map((c) => (c.id === commentId ? {...c, content: res.content} : c)));
      }
    } catch (error) {
      console.error("댓글 추가 실패");
      alert("댓글 추가에 실패했습니다.");
    }
  }

  const handleCommentDelete = async(commentId: number) => {
    if(!confirm("정말 이 댓글을 삭제하시겠습니까?")) return;

    try {
      await deleteComment(commentId);

      setComments((prev) => prev.filter((c) => c.id !== commentId));
      alert("댓글이 성공적으로 삭제되었습니다.")
    } catch (error) {
      console.error("댓글 삭제 실패");
      alert("댓글 삭제에 실패했습니다.")
    }
  }

  return (
    <div className="w-full p-6 border border-gray-100 rounded-2xl shadow-sm mt-8">
      <h3 className="font-bold text-lg mb-4">댓글 {comments.length}개</h3>
      <CommentForm author={user} onSubmit={handleCommentSubmit}/>
      <hr className="my-6 border-gray-400" />

      <div className="flex flex-col gap-6">
        {rootComments.map((rootComment) => (
          <div key={rootComment.id} className="flex flex-col gap-4">
            <CommentItem currentUser={user} comment={rootComment} onReplySubmit={handleCommentSubmit} onUpdate={handleCommentUpdate} onDelete={handleCommentDelete}/>
            {getReplies(rootComment.id).length > 0 && (
              <div className="flex flex-col gap-4 pl-5 border-l-2 border-gray-200 ml-14">
                {getReplies(rootComment.id).map((reply) => (
                  <CommentItem key={reply.id} currentUser={user} comment={reply} isReply onReplySubmit={handleCommentSubmit} onUpdate={handleCommentUpdate} onDelete={handleCommentDelete}/>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
