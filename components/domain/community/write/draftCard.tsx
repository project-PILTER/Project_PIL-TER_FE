import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Trash2 } from "lucide-react";
import { categories } from "../examples/categoryExamples";
import { Draft } from "@/types/community.type";
import { getRelativeTime } from "@/utils/date";

interface DraftCardProps {
  draft: Draft;
  onLoad: () => void;
  onDelete: () => void;
}

export default function DraftCard({ draft, onLoad, onDelete }: DraftCardProps) {
  const categoryName =
    categories.find((category) => category.id === Number(draft.categoryId))
      ?.name ?? "미분류";
  return (
    <Card
      className="cursor-pointer transition-all hover:border-violet-300 hover:shadow-md" 
      onClick={onLoad}
    >
      <CardContent className="p-3">
        <div className="flex items-start justify-between">
          <div className="flex flex-1 gap-3">
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold truncate">{draft.title}</h3>

              <div className="mt-2 flex items-center gap-2">
                <Badge>{categoryName}</Badge>
                <span suppressHydrationWarning>{getRelativeTime(draft.createdAt)}</span>
              </div>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{draft.content.replace(/<[^>]*>/g, "")}</p>
            </div>
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete();
                }}
              >
                <Trash2 size={18} className="bg-none"/>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>삭제</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </CardContent>
    </Card>
  );
}
