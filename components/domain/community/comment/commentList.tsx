import { Comment } from "@/types/community.type"

interface CommentListProps {
  comments: Comment[];
}

export default function CommentList({comments}:CommentListProps) {
  const rootComments = comments.filter((comment) => comment.parentId === null);
  return(
    <div>
      {/* {rootComments.map((rootComment) => (
        <CommentItem comment={rootComment} />
      ))} */}
    </div>
  )
}