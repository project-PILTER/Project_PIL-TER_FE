import { Comment } from "@/types/community.type";
import CommentItem from "./commentItem";
import CommentForm from "./commentForm";
import { commentCurrentUser } from "../../auth/userExamples";

interface CommentListProps {
  comments: Comment[];
}

export default function CommentList({ comments }: CommentListProps) {
  const rootComments = comments.filter((comment) => comment.parentId === null);
  const getReplies = (commentId: number) => {
    return comments
      .filter((comment) => comment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
  };
  return (
    <div className="w-full p-6 border border-gray-100 rounded-2xl shadow-sm mt-8">
      <h3 className="font-bold text-lg mb-4">댓글 {comments.length}개</h3>
      <CommentForm author={commentCurrentUser}/>
      <hr className="my-6 border-gray-400" />
      <div className="flex flex-col gap-6">
        {rootComments.map((rootComment) => (
          <div key={rootComment.id} className="flex flex-col gap-4">
            <CommentItem comment={rootComment} />
            {getReplies(rootComment.id).length > 0 && (
              <div className="flex flex-col gap-4 pl-5 border-l-2 border-gray-200 ml-14">
                {getReplies(rootComment.id).map((reply) => (
                  <CommentItem key={reply.id} comment={reply} isReply />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
