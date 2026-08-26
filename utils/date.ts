import { format, formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

// 몇 시간 전, 1일 전 이렇게 나오는 함수
export function getRelativeTime(date: string) {
  return formatDistanceToNow(new Date(date), { addSuffix: true, locale: ko });
}

// YYYY-MM-DDTHH:mm:ssZ 형식에서 YYYY-MM-DD만 나오게 하는 함수
export function formatDate(date: string): string {
  if(!date) return "";

  return format(new Date(date), "yyyy-MM-dd");
}

export function formatDateTime(date: string): string {
  if(!date) return "";

  return format(new Date(date), "yyyy-MM-dd HH:mm");
}

export function formatDateKorean(date: string): string {
  if (!date) return "";

  return format(new Date(date), "yyyy년 MM월 dd일", { locale: ko });
}