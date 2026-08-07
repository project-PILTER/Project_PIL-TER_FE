"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Author, Comment } from "@/types/community.type";
import { MessageSquare, Pencil, ThumbsUp, Trash2 } from "lucide-react";
import { useState } from "react";
import CommentForm from "./commentForm";
import { getRelativeTime } from "@/utils/date";
import { DropdownOption } from "@/types/ui.type";
import Dropdown from "@/components/common/dropdown";
import { User } from "@/types/auth.type";
import { postCommentLike } from "@/services/community.client";

interface CommentItemProps {
  currentUser: Author | User;
  comment: Comment;
  isReply?: boolean;
  onReplySubmit?: (content: string, parentId: number) => Promise<void> | void;
  onLikeToggle?: (commentId: number, isLiked: boolean) => void;
  onUpdate?: (commentId: number, content: string) => Promise<void> | void;
  onDelete?: (commentId: number) => Promise<void> | void;
}
export default function CommentItem({
  currentUser,
  comment,
  isReply = false,
  onReplySubmit,
  onUpdate,
  onDelete,
}: CommentItemProps) {
  const { id, content, createdAt } = comment;

  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(comment.likeCount);

  const commentAuthor = comment.author;

  const isMyComment = currentUser.id === commentAuthor.id;

  const handleLikeClick = async () => {
    const previousIsLiked = isLiked;
    const previousLikeCount = likeCount;

    if (isLiked) {
      setLikeCount((prev) => prev - 1);
      setIsLiked(false);
    } else {
      setLikeCount((prev) => prev + 1);
      setIsLiked(true);
    }

    try {
      const res = await postCommentLike(id);

      if (res) {
        if (res.isLiked) {
          alert("좋아요 등록 성공");
        } else {
          alert("좋아요가 취소되었습니다.");
        }
        console.log("좋아요 정보: ", res);
      }
    } catch (error) {
      console.error("좋아요 요청 실패", error);
      alert("좋아요에 실패했습니다. 다시시작해주세요.");

      setIsLiked(previousIsLiked);
      setLikeCount(previousLikeCount);
    }
  };

  const handleEditSubmit = async (newContent: string) => {
    if (onUpdate) {
      await onUpdate(id, newContent);
      setIsEditing(false);
    }
  };

  const handleReplySubmit = async (content: string) => {
    if (onReplySubmit) {
      await onReplySubmit(content, id);
      setIsReplying(false);
    }
  };

  const dropdownOptions: DropdownOption[] = [
    {
      label: "수정",
      icon: <Pencil className="w-3 h-3" />,
      onClick: () => setIsEditing(true),
    },
    {
      label: "삭제",
      icon: <Trash2 className="w-3 h-3" />,
      onClick: async () => {
        if (onDelete) await onDelete(id);
      },
    },
  ];
  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-4 items-start w-full">
        <Avatar className="w-10 h-10">
          <AvatarImage
            src={commentAuthor.profileImage ?? undefined}
            alt={commentAuthor.nickname}
          />
          <AvatarFallback>{commentAuthor.nickname}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-1 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm">{commentAuthor.nickname}</p>
              {commentAuthor.isMedicalExpert && (
                <Badge className="bg-[#eceef9] rounded-xl font-medium text-black text-xs px-2 py-2">
                  {commentAuthor.expertTitle || "인증의료인"}
                </Badge>
              )}
              <p className="text-xs" suppressHydrationWarning>
                {getRelativeTime(createdAt)}
              </p>
            </div>

            {isMyComment && !isEditing && (
              <Dropdown options={dropdownOptions} align="end" />
            )}
          </div>

          {isEditing ? (
            <div>
              <CommentForm
                author={commentAuthor}
                onSubmit={handleEditSubmit}
                initialContent={content}
              />
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-gray-400"
                onClick={() => setIsEditing(false)}
              >
                취소
              </Button>
            </div>
          ) : (
            <p className="text-sm leading-relaxed whitespace-pre-wrap">
              {content}
            </p>
          )}

          {!isEditing && (
            <div className="flex items-center gap-4 mb-2">
              <Button
                className="flex items-center gap-2 text-xs text-gray-400 bg-transparent transition-colors duration-200 hover:bg-[#615ed6] hover:text-white"
                onClick={handleLikeClick}
              >
                <ThumbsUp />
                <p>{likeCount}</p>
              </Button>

              {!isReply && (
                <Button
                  className="flex items-center gap-2 text-xs text-gray-400 bg-transparent transition-colors duration-200 hover:bg-[#615ed6] hover:text-white"
                  onClick={() => setIsReplying(!isReplying)}
                >
                  <MessageSquare />
                  <p>답글</p>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {isReplying && (
        <div className="mt-4 pl-14 w-full">
          <CommentForm author={currentUser} onSubmit={handleReplySubmit} />
        </div>
      )}
    </div>
  );
}
