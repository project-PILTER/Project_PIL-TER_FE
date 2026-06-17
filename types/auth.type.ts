/*
  로그인, 회원가입과 관련된 타입
*/

import { loginSchema, signupSchema } from "@/schemas/auth.schema";
import z from "zod";

export type LoginData = z.infer<typeof loginSchema>
export type signupData = z.infer<typeof signupSchema>