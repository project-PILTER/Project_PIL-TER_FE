"use client";
import { useAuthStore } from "@/stores/authStore";
/*
  소셜 로그인 콜백 페이지
  구글 로그인을 했을 때 관련 처리를 여기서 한다.
*/
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function GoogleCallback() {
  const searchParmas = useSearchParams();
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    if(!code) {
      alert("로그인 정보가 유효하지 않습니다. 다시로그인해주세요");
      router.push("/");
      return;
    }

    const processLogin = async() => {
      
    }
  
  }, [searchParmas])

  return(
    <div>구글 로그인 로딩중 ...</div>
  )
  
}