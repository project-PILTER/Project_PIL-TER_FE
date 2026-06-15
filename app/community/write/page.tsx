"use client";

/*
  게시글 작성 페이지
  카테고리 기능, 제목 입력 기능 추가 예정
*/
import Tiptap from "@/components/common/editor/tiptap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function WritePage() {
  const [title, setTitle] = useState("");
  return (
    <div className="w-4xl mx-auto mt-4">
      <div className="space-y-2">
        <label className="text-xl font-semibold">제목</label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
          maxLength={100}
          autoComplete="off"
          spellCheck={false}
          className="h-11 mt-2 focus-visible:border-violet-500"
        />
        <p className="text-right text-sm text-muted-foreground">
          {title.length}/100
        </p>
      </div>
      <div className="flex justify-between my-3">
        <p className="text-xl font-bold">게시글 작성</p>
        <Button className="bg-[#615ed6]">게시하기</Button>
      </div>
      <Tiptap />
    </div>
  );
}
