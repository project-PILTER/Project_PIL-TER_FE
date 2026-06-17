import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Article } from "@/types/community.type";
import { Bookmark, Eye, Heart, MoreHorizontal, Share2 } from "lucide-react";
import Image from "next/image";
import Profile from "../../../public/logo/logo.png";

interface ArticleDetailProps {
  article: Article;
}

export default function ArticleDetail({ article }: ArticleDetailProps) {
  return (
    <Card className="w-full p-8 border-none shadow-sm rounded-2xl">
      <div className="flex flex-wrap gap-2 mb-6">
        <Badge className="bg-[#efeefa] text-[#6e6ed7] px-3 py-1 font-normal text-sm rounded-md border-none">{article.category.name}</Badge>
      </div>

      <h1 className="text-2xl font-bold leading-snug">{article.title}</h1>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full">
            {article.author.profileImage && (
              <Image
                className="bg-[#efeefa] w-full h-full rounded-full"
                src={Profile}
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

        <Button variant="ghost" size="icon">
          <MoreHorizontal className="w-5 h-5" />
        </Button>
      </div>

      <div className="whitespace-pre-wrap leading-relaxed text-1.125rem min-h-[18.75rem] mb-8">
        {article.content}
      </div>

      <div className="pt-6 border-t border-gray-100 flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-1 px-4 py-2 border-gray-100 rounded-lg hover:bg-gray-50">
            <Heart className="w-4 h-4" />
            <span>좋아요</span>
            <span className="font-medium">{article.likeCount}</span>
          </Button>

          <Button variant="outline" className="flex items-center gap-1 px-4 py-2 border-gray-100 rounded-lg hover:bg-gray-50">
            <Bookmark className="h-4 w-4" />
            <span>저장</span>
          </Button>
        </div>

        <Button variant="ghost" className="flex items-center gap-1 px-4 py-2 border-gray-100 rounded-lg hover:bg-gray-50">
          <Share2 className="w-4 h-4" />
          <span>공유</span>
        </Button>
      </div>
    </Card>
  );
}
