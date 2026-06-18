"use client";

import Image from "next/image";
import Profile from "../../../../public/logo/logo.png";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";

export default function CommentForm() {
  const [comment, setComment] = useState("");
  return (
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 rounded-full">
        <Image src={Profile} className="w-full h-full" width={40} height={40} alt="프로필" />
      </div>
      <div className="flex">
        <Input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="댓글을 입력하세요..."
          className="h-12 w-xl border-gray-200 focus-visible:border-violet-500"
        />
      </div>
      <div className="flex justify-end mt-2">
        <Button className="bg-[#615ed6]">
          <SendHorizonal />
          댓글 작성
        </Button>
      </div>
    </div>
  );
}
