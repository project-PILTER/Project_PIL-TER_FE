import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MonthlyActivitySummary } from "@/types/auth.type";
import { HeartPulse } from "lucide-react";

interface MonthlySummaryProps {
  summary: MonthlyActivitySummary;
}

export default function MonthlySummary({ summary }: MonthlySummaryProps) {
  const postPercentage = summary.targetPosts > 0 ?Math.min(
    (summary.currentPosts / summary.targetPosts) * 100,
    100,
  ) : 0;
  const commentPercentage = summary.targetComments > 0 ? Math.min(
    (summary.currentComments / summary.targetComments) * 100,
    100,
  ) : 0;

  return (
    <Card className="p-6 border border-gray-100 shadow-sm rounded-2xl h-full flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-5">
          이번 달 활동 요약
        </h3>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 font-medium">
                이번 달 작성 게시글
              </span>
              <span className="text-gray-900 font-bold">
                {summary.currentPosts}{" "}
                <span className="text-gray-400 font-normal">
                  / {summary.targetPosts}개
                </span>
              </span>
            </div>
            <Progress
              value={postPercentage}
              className="h-3 w-full bg-gray-100 [&>div]:bg-[#5c59da]"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 font-medium">
                이번 달 작성 댓글
              </span>
              <span className="text-gray-900 font-bold">
                {summary.currentComments}{" "}
                <span className="text-gray-400 font-normal">
                  / {summary.targetComments}개
                </span>
              </span>
            </div>
            <Progress
              value={commentPercentage}
              className="h-3 w-full bg-gray-100 [&>div]:bg-[#5c59da]"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-xl p-4 flex justify-between items-center bg-violet-50">
        <HeartPulse className="w-4 h-4 text-[#5c59da]" />
        <span className="text-sm text-gray-600 font-medium">
          이번 달 건강 기록 달성률
        </span>
        <span className="text-xl font-extrabold text-[#5c59da]">
          {summary.healthRecordRate}%
        </span>
      </div>
      <p className="mt-2 text-xs text-gray-500">건강 기록을 꾸준히 작성하고 있어요.</p>
    </Card>
  );
}
