import { MypageInfo } from "@/types/auth.type";


export const mypageInfo: MypageInfo = {
  // 1. 기존 User 기반 정보
  nickname: "희망을그대에게",
  email: "test123@gmail.com",
  createdAt: "2026-06-26T08:15:32.124Z",

  // 2. Mypage 기본 활동 데이터
  articleCount: 12,
  commentCount: 48,
  totalLikesReceived: 156,
  totalHealthDays: 7, // 가입일(06-26)부터 오늘(07-02)까지의 기간 반영

  // 3. ✨ 새로 확장된 MypageInfo 전용 필드 (최근 건강 일지 기록)
  recentJournals: {
    dataLabel: "2026-07-02T03:42:27.209Z", // 최근 작성 날짜 및 일지 제목
    condition: "약간의 메스꺼움이 있으나 식사 섭취량은 양호함. 처방받은 항구토제 복용 완료." // 현재 환자 상태 요약
  }
};