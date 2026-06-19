"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Comment } from "@/types/community.type";
import getRelativeTime from "@/utils/date";
import { MessageSquare, ThumbsUp } from "lucide-react";
import { useState } from "react";
import CommentForm from "./commentForm";

interface CommentItemProps {
  comment: Comment;
  isReply?: boolean;
}
export default function CommentItem({comment, isReply = false}: CommentItemProps) {
  const { author, content, likeCount, createdAt } = comment;
  const [isReplying, setIsReplying] = useState(false);
  const [liked, setLiked] = useState(false);
  const [currentLikeCount, setCurrentLikeCount] = useState(likeCount);

  const handleLikeClick = () => {
    if(!liked) { // 클릭 후에 좋아요가 false일 경우
      setCurrentLikeCount((prev) => prev - 1);
    } else { // 클릭 후에 좋아요가 true일 경우
      setCurrentLikeCount((prev) => prev + 1);
    }
    setLiked(!liked);
  }
  return(
    <div className="flex flex-col w-full">
      <div className="flex gap-4 ittems-start w-full">
        <Avatar className="w-10 h-10">
          <AvatarImage />
          <AvatarFallback>{author.nickname}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm">{author.nickname}</p>
            {author.isMedicalExpert && (
              <Badge className="bg-[#eceef9] rounded-xl font-medium text-black text-xs px-2 py-3">{author.expertTitle || "인증의료인"}</Badge>
            )}
            <p className="text-xs">{getRelativeTime(createdAt)}</p>
          </div>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">
            {content}
          </p>
          <div className="flex items-center gap-4 mb-2">
            <Button className="flex items-center gap-2 text-xs text-gray-400 bg-transparent transition-colors duration-200 hover:bg-[#615ed6] hover:text-white" onClick={handleLikeClick}>
              <ThumbsUp />
              <p>{currentLikeCount}</p>
            </Button>
            {!isReply && (
              <Button  className="flex items-center gap-2 text-xs text-gray-400 bg-transparent transition-colors duration-200 hover:bg-[#615ed6] hover:text-white" onClick={() => setIsReplying(!isReplying)}>
                <MessageSquare />
                <p>답글</p>
              </Button>
            )}
          </div>
        </div>
      </div>
      {isReplying && (
        <div className="mt-4 pl-14 w-full">
          <CommentForm />
        </div>
      )}
    </div>
  )
}