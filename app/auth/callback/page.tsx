"use client";

import { useAuthStore } from "@/stores/authStore";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function CallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  useEffect(() => {
    const token = searchParams.get("token");

    if(token) {
      setAccessToken(token);
      alert("로그인에 성공했습니다.");

      router.push("/");
      router.refresh();
    } else {
      alert("로그인에 실패했습니다. 다시시도해주세요.");
      router.push("/");
    }
  }, [searchParams, setAccessToken, router])

  return(
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-lg font-medium">로그인을 완료하는 중입니다...</p>
    </div>
  )
}