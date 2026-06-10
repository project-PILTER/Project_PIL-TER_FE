/*
  로그인, 회원가입과 관련된 타입
*/

import { loginSchema, signupSchema } from "@/schemas/auth.schema";
import z from "zod";

export interface LoginProps {
  onOpenChange: (open: boolean) => void;
  onSwitchToSignup: () => void;
}

export interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  
  mode: "login" | "signup"
  onModeChange: (mode: "login" | "signup") => void;
}

export interface SignupProps {
  onOpenChange: (open:boolean) => void;
  onSwitchToLogin: () => void;
}

export interface SocialLoginProps {
  onOpenChange: (open: boolean) => void;
}

export type LoginData = z.infer<typeof loginSchema>
export type signupData = z.infer<typeof signupSchema>