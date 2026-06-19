/*
  로그인, 회원가입과 관련된 타입
*/

import { loginSchema, signupSchema } from "@/schemas/auth.schema";
import z from "zod";

export type LoginData = z.infer<typeof loginSchema>
export type signupData = z.infer<typeof signupSchema>

export interface User {
  email: string;
  nickname: string;
  profileImage: string;
  isMedicalExpert?: boolean; // 의료 전문의일 경우 true, 일반 유저면 false
  expertTitle?: string; // 어느 전공 전문의인지
}