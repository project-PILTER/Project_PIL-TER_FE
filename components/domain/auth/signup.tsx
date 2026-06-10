"use client";

/*
  회원가입 모달에 들어갈 내용이며
  이메일, 비밀번호로 회원가입 및
  소셜로그인으로 회원가입을 할 수 있다.
*/

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signupSchema } from "@/schemas/auth.schema";
import { signupData, SignupProps } from "@/types/auth.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import SocialLogin from "./socialLogin";

export default function Signup({ onOpenChange, onSwitchToLogin }: SignupProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) });
  const onSubmit = (data: signupData) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <div className="space-y-2">
            <label htmlFor="email">이메일</label>
            <Input
              className="mt-1"
              {...register("email")}
              type="email"
              placeholder="이메일"
            />
          </div>

          {errors.email && (
            <p className="mt-2 text-red-500">{errors.email.message}</p>
          )}

          <div className="mt-4">
            <label htmlFor="password">비밀번호</label>
            <Input
              className="mt-1"
              {...register("password")}
              type="password"
              placeholder="비밀번호"
            />
          </div>

          {errors.password && (
            <p className=" mt-2 text-red-500">{errors.password.message}</p>
          )}

          <div className="mt-4">
            <label htmlFor="password">비밀번호 확인</label>
            <Input
              className="mt-1"
              {...register("passwordConfirm")}
              type="password"
              placeholder="비밀번호 확인"
            />
          </div>

          {errors.passwordConfirm && (<p className="mt-2 text-red-500">{errors.passwordConfirm.message}</p>)}
        </div>

        <Button className="mt-2 bg-[#615ed6] mr-2 h-9" type="submit">
          회원가입
        </Button>
        <div className="flex flex-col mt-6 gap-2">
          <h2 className="font-bold text-xl">소셜 로그인</h2>
          <SocialLogin onOpenChange={onOpenChange} />
        </div>
      </form>

      <div className="flex mt-4 gap-1">
        <p className="text-muted-foreground">로그인으로</p>
        <span
          className="cursor-pointer hover:underline"
          onClick={onSwitchToLogin}
        >
          돌아가기
        </span>
      </div>
    </div>
  );
}
