/*
  로그인, 회원가입과 관련된 타입
*/

import { loginSchema, signupSchema } from "@/schemas/auth.schema";
import z from "zod";

export type LoginData = z.infer<typeof loginSchema>
export type SignupData = z.infer<typeof signupSchema>

export interface Signup {
  email: string;
  password: string;
  nickname: string;
}

export interface User {
  id: number;
  email: string;
  nickname: string;
  profileImage?: string | null;
  createdAt: string;

  isMedicalExpert?: boolean; // 의료 전문의일 경우 true, 일반 유저면 false
  expertTitle?: string; // 어느 전공 전문의인지
}

export interface Mypage{
  nickname: string;
  email: string;
  createdAt: string;
  articleCount: number;
  commentCount: number;
  totalLikesReceived: number;
  totalHealthDays: number;
}

export interface UserActivityCounts {
  totalPosts: number; // 작성 게시글 수
  totalComments: number; // 댓글 수
  totalLikesReceived: number; // 받은 좋아요 수
  totalHealthDays: number; // 건강 기록 총 일수
}

export interface MonthlyActivitySummary {
  currentPosts: number; // 이번 달 게시글
  targetPosts: number; // 목표 게시글 수
  currentComments: number; // 이번 달 댓글
  targetComments: number; // 목표 댓글 수
  healthRecordRate: number; // 건강 기록 달성률
}

export interface MypageInfo extends Mypage {
  recentJournals: {
    dataLabel: string,
    condition: string,
    content: string
  },
}

export interface ProfileDataRequest {
  nickname: string;
  profileImageUrl: string;
}

export interface UserInfo {
  id: number;
  email: string;
  name: string;
  role: string;
}

export interface TokenResponse {
  accessToken: string;
}