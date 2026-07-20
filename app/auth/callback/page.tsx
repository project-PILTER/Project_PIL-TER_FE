"use client";

import { getUser } from "@/services/auth.service";
import { useAuthStore } from "@/stores/authStore";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function CallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const setUserInfo = useAuthStore((state) => state.setUserInfo);

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      const handleLoginSuccess = async () => {
        setAccessToken(token);

        try {
          const userInfo = await getUser(token);
          if (userInfo) {
            setUserInfo(userInfo);
          }
        } catch (error) {
          console.error("소셜로그인 유저정보 가져오기 실패");
        }

        localStorage.setItem("isLoggedIn", "true");

        alert("로그인에 성공했습니다.");

        router.push("/");
      };

      handleLoginSuccess();
    } else {
      alert("로그인에 실패했습니다. 다시 시도 해주세요.");
      window.location.href = "/";
    }
  }, [searchParams, setAccessToken, setUserInfo, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-lg font-medium">로그인을 완료하는 중입니다...</p>
    </div>
  );
}
