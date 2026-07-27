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
import { useRouter } from "next/navigation";
import { User } from "@/types/auth.type";

interface CommentItemProps {
  author: Author | User;
  comment: Comment;
  isReply?: boolean;
  onReplySubmit?: (content: string, parentId: number) => Promise<void> | void;
  onLikeToggle?: (commentId: number, isLiked: boolean) => void;
  onUpdate?: (commentId: number, content: string) => Promise<void> | void;
  onDelete?: (commentId: number) => Promise<void> | void;
}
export default function CommentItem({
  author,
  comment,
  isReply = false,
  onReplySubmit,
  onLikeToggle,
  onUpdate,
  onDelete,
}: CommentItemProps) {
  const { id, author: commentAuthor, content, likeCount, createdAt } = comment;

  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [liked, setLiked] = useState(false);
  const [currentLikeCount, setCurrentLikeCount] = useState(likeCount);

  const isMyComment = author.nickname === commentAuthor.nickname;

  const handleLikeClick = () => {
    const nextLikedState = !liked;
    setCurrentLikeCount((prev) => (nextLikedState ? prev + 1 : prev - 1));
    setLiked(nextLikedState);
    if (onLikeToggle) onLikeToggle(id, nextLikedState);
  };

  const handleEditSubmit = async (newContent: string) => {
    if (onUpdate) {
      await onUpdate(id, newContent);
      setIsEditing(false);
    }
  };

  const handleReplySubmit = async (content: string) => {
    if(onReplySubmit) {
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
          <AvatarImage src={commentAuthor.profileImage ?? undefined} alt={commentAuthor.nickname} />
          <AvatarFallback>{commentAuthor.nickname}</AvatarFallback>
        </Avatar>

      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm">{author.nickname}</p>
            {author.isMedicalExpert && (
              <Badge className="bg-[#eceef9] rounded-xl font-medium text-black text-xs px-2 py-2">
                {author.expertTitle || "인증의료인"}
              </Badge>
            )}
            <p className="text-xs" suppressHydrationWarning>{getRelativeTime(createdAt)}</p>
          </div>

          {isMyComment && !isEditing && (
            <Dropdown options={dropdownOptions} align="end" />
          )}
        </div>

          {isEditing ? (
          <div>
            <CommentForm
              author={author}
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
                <p>{currentLikeCount}</p>
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
          <CommentForm
            author={author}
            onSubmit={handleReplySubmit}
          />
        </div>
      )}
    </div>
  );
}
