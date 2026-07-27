/*
  게시글 모음 컴포넌트로
  게시글을 불러와 1개씩 보여주는 공간이다.
*/

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Eye, Flame, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Article } from "@/types/community.type";
import Link from "next/link";
import { getRelativeTime } from "@/utils/date";
import { stripHtml } from "@/utils/string";

interface CommunityListProps {
  article: Article;
}

export default function ArticleCard({ article }: CommunityListProps) {
  return (
    <Link href={`/community/articles/${article.id}`} className="block">
      <Card className="w-full p-6">
        <div className="flex justify-between items-center">
          <div className="flex ml-2 gap-2">
            <Badge className="bg-[#efeefa] text-[#6e6ed7]">
              {article.category.name}
            </Badge>
            {article.isHot && (
              <Badge className="bg-red-500">
                <Flame />
                HOT
              </Badge>
            )}
          </div>
          <p className="mr-4" suppressHydrationWarning>{getRelativeTime(article.updatedAt)}</p>
        </div>

        <div className="mx-4 font-bold hover:text-[#615ED6]">{article.title}</div>

        <div className="mx-4 truncate">{stripHtml(article.content)}</div>

        <div className="mx-4 flex justify-between">
          <div className="flex">
            {article.author.profileImage && (
              <Image
                className="bg-[#efeefa] rounded-sm object-cover"
                width={24}
                height={24}
                src={article.author.profileImage}
                alt="건강"
              />
            )}
            <p className="text-[#797887] ml-2">{article.author.nickname}</p>
          </div>
          <div className="flex items-end gap-1">
            <Heart className="h-5 w-5" />
            <p className="mr-2">{article.likeCount}</p>

            <MessageCircle className="h-5 w-5" />
            <p className="mr-2">{article.commentCount}</p>
            
            <Eye className="h-5 w-5" />
            <p>{article.viewCount}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
