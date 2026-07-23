"use client";

/*
  로그인 컴포넌트
  모달에서 실행되며 이메일, 비밀번호로 로그인,
  소셜 로그인을 포함하고 있다.
*/

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoginData } from "@/types/auth.type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/auth.schema";
import SocialLogin from "./socialLogin";
import { getUser, loginUser } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/authStore";

interface LoginProps {
  onOpenChange: (open: boolean) => void;
  onSwitchToSignup: () => void;
}

export default function Login({ onOpenChange, onSwitchToSignup }: LoginProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: zodResolver(loginSchema) });
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const setUserInfo = useAuthStore((state) => state.setUserInfo);
  const setLoading = useAuthStore((state) => state.setLoading);
  const router = useRouter();

  const onSubmit = async(data: LoginData) => {
    try {
      setLoading(true);

      const res = await loginUser(data);

      const token = res?.result?.accessToken || res?.accessToken || res?.data?.accessToken;

      if(res && (res.isSuccess || token)) {
        setAccessToken(token);

        const userInfo = await getUser();
        if(userInfo) {
          setUserInfo(userInfo)
        }

        localStorage.setItem("isLoggedIn", "true");
        alert("로그인에 성공했습니다.");
        
        onOpenChange(false);
        router.refresh();
      }
    } catch (error) {
      console.error('로그인 중 에러 발생');
      alert("로그인 처리 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  }

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
            <p className="text-red-500">{errors.email.message}</p>
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
        </div>

        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
          <Button className="mt-4 bg-[#615ed6] h-9" type="submit">
            로그인
          </Button>
          <div className="flex flex-col mt-6 gap-2">
            <h2 className="font-bold text-xl">소셜 로그인</h2>
            <SocialLogin onOpenChange={onOpenChange} />
          </div>
      </form>

      <div className="flex mt-4 gap-1">
        <p className="text-muted-foreground">아직 회원이 아니신가요? </p>
        <span
          onClick={onSwitchToSignup}
          className="cursor-pointer hover:underline"
        >
          회원가입
        </span>
      </div>
    </div>
  );
}
