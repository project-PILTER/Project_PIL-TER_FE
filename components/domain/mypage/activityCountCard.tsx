import { Card } from "@/components/ui/card";
import { UserActivityCounts } from "@/types/auth.type";
import { FileText, HeartPulse, MessageSquare, ThumbsUp } from "lucide-react";

interface ActivityCountCardProps {
  counts: UserActivityCounts;
}

export default function ActivityCountCard({counts}: ActivityCountCardProps) {
  const items = [
    {
      title: "작성한 게시글",
      value: `${counts.totalPosts}개`,
      icon: FileText,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      title: "작성한 댓글",
      value: `${counts.totalComments}개`,
      icon: MessageSquare,
      iconColor: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      title: "받은 좋아요",
      value: `${counts.totalLikesReceived}개`,
      icon: ThumbsUp,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-50"
    },
    {
      title: "건강 기록 누적",
      value: `${counts.totalHealthDays}일`,
      icon: HeartPulse,
      iconColor: "text-[#6e6ed7]",
      bgColor: "bg-[#efeefa]"
    }
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Card key={item.title} className="p-5 border border-gray-100 shadow-sm rounded-2xl flex flex-row items-center gap-4">
            <div className={`p-3 rounded-xl shrink-0 ${item.bgColor}`}>
              <Icon className={`w-5 h-5 ${item.iconColor}`}/>
            </div>

            <div className="flex flex-col gap-1 text-left min-w-0">
              <p className="text-xs font-medium text-gray-400">{item.title}</p>
              <p className="text-2xl font-bold text-gray-900">{item.value}</p>
            </div>
          </Card>
        );
      })}
    </div>
  )
}