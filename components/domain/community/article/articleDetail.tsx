"use client";

import Dropdown from "@/components/common/dropdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  deleteArticle,
  postLike,
  putArticle,
} from "@/services/community.service";
import { Article } from "@/types/community.type";
import { DropdownOption } from "@/types/ui.type";
import {
  Bookmark,
  Edit2,
  Eye,
  Heart,
  MoreHorizontal,
  Share2,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ArticleDetailProps {
  article: Article;
  id: number;
}

export default function ArticleDetail({ article, id }: ArticleDetailProps) {
  const router = useRouter();

  const [likeCount, setLikeCount] = useState(article.likeCount);
  const [isLiked, setIsLiked] = useState(false);

  const handleEdit = () => {
    router.push(`/community/articles/edit/${id}`);
  };

  const handleDelete = async () => {
    if (!confirm("정말 이 게시글을 삭제하시겠습니까?")) return;

    try {
      await deleteArticle(id);
      alert("삭제되었습니다.");
      router.push("/community/articles");
    } catch (error) {
      alert("삭제에 실패했습니다.");
    }
  };

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
      const res = await postLike(id);

      if (!res || !res.data) {
        throw new Error("좋아요 api 실패");
      }
    } catch (error) {
      console.error("좋아요 요청 실패", error);
      alert("좋아요에 실패했습니다. 다시시작해주세요.");

      setIsLiked(previousIsLiked);
      setLikeCount(previousLikeCount);
    }
  };

  const dropdownOptions: DropdownOption[] = [
    {
      label: "수정하기",
      icon: <Edit2 className="w-4 h-4" />,
      onClick: handleEdit,
    },
    {
      label: "삭제하기",
      icon: <Trash2 className="w-4 h-4" />,
      onClick: handleDelete,
    },
  ];

  return (
    <Card className="w-full p-8 border-none shadow-sm rounded-2xl">
      <div className="flex flex-wrap gap-2 mb-6">
        <Badge className="bg-[#efeefa] text-[#6e6ed7] px-3 py-1 font-normal text-sm rounded-md border-none">
          {article.category.name}
        </Badge>
      </div>

      <h1 className="text-2xl font-bold leading-snug">{article.title}</h1>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full">
            {article.author.profileImage && (
              <Image
                className="bg-[#efeefa] rounded-full"
                src={article.author.profileImage}
                width={44}
                height={44}
                alt="프로필 이미지"
              />
            )}
          </div>
          <div>
            <div className="flex items-center gap-1">
              {article.author.nickname}
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span>{article.createdAt}</span>

              <span className="flex items-center gap-1">
                <Eye />
                {article.viewCount}
              </span>
            </div>
          </div>
        </div>

        <Dropdown options={dropdownOptions} />
      </div>

      <div className="whitespace-pre-wrap leading-relaxed text-1.125rem min-h-[18.75rem] mb-8">
        {article.content}
      </div>

      <div className="pt-6 border-t border-gray-100 flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className={`flex items-center gap-1 px-4 py-2 border-gray-100 rounded-lg hover:bg-gray-50 ${isLiked ? "text-red-500 border-red-100 bg-red-50/50" : ""}`}
            onClick={handleLikeClick}
          >
            <Heart
              className="w-4 h-4"
              fill={isLiked ? "currentColor" : "none"}
            />
            <span>좋아요</span>
            <span className="font-medium">{likeCount}</span>
          </Button>

          <Button
            variant="outline"
            className="flex items-center gap-1 px-4 py-2 border-gray-100 rounded-lg hover:bg-gray-50"
          >
            <Bookmark className="h-4 w-4" />
            <span>저장</span>
          </Button>
        </div>

        <Button
          variant="ghost"
          className="flex items-center gap-1 px-4 py-2 border-gray-100 rounded-lg hover:bg-gray-50"
        >
          <Share2 className="w-4 h-4" />
          <span>공유</span>
        </Button>
      </div>
    </Card>
  );
}
