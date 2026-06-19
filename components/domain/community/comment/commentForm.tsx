"use client";

import Image from "next/image";
import Profile from "../../../../public/logo/logo.png";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { CommentUser } from "@/types/community.type";
import defaultProfile from "../../../../public/logo/logo.png"

interface CommentFormProps {
  author?: CommentUser | null;
}

export default function CommentForm({author}:CommentFormProps) {
  const [comment, setComment] = useState("");
  const profileSrc = author?.profileImage || defaultProfile;
  return (
    <div className="w-full">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image src={profileSrc} className="w-full h-full" width={40} height={40} alt="프로필" />
        </div>
        <div className="flex-1">
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 입력하세요..."
            className="h-20 min-h-[5rem] w-full border-gray-200 text-sm focus-visible:border-violet-500 resize-none p-3 transition-all"
          />
        </div>
      </div>
      <div className="flex justify-end mt-2">
        <Button className="gap-2 text-white font-medium bg-[#615ed6]">
          <SendHorizonal className="w-4 h-4"/>
          댓글 작성
        </Button>
      </div>
    </div>
  );
}
