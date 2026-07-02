"use client";

import { Comment, CommentInput } from "@/types/community.type";
import CommentItem from "./commentItem";
import CommentForm from "./commentForm";
import { useState } from "react";
import { deleteComment, postComment, putComment } from "@/services/community.service";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/navigation";

interface CommentListProps {
  initialComments: Comment[];
  articleId: number;
}

export default function CommentList({ initialComments, articleId }: CommentListProps) {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const [comments, setComments] = useState<Comment[]>(initialComments);

  if(!user) {
    router.push("/");
    return null;
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

      if(res) {
        setComments((prev) => [...prev, res]);
      }
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
            <CommentItem author={user} comment={rootComment} onReplySubmit={handleCommentSubmit} onUpdate={handleCommentUpdate} onDelete={handleCommentDelete}/>
            {getReplies(rootComment.id).length > 0 && (
              <div className="flex flex-col gap-4 pl-5 border-l-2 border-gray-200 ml-14">
                {getReplies(rootComment.id).map((reply) => (
                  <CommentItem key={reply.id} author={user} comment={reply} isReply onReplySubmit={handleCommentSubmit} onUpdate={handleCommentUpdate} onDelete={handleCommentDelete}/>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
