"use client";
/*
  소셜 로그인 콜백 페이지
  카카오 로그인 시 관련한 처리를 여기서 한다.
*/

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function KakaoCallback() {
  const router = useRouter();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    console.log(code);

    router.replace("/");
  
    
  }, [router]);

  return (
    <div>카카오 로그인 로딩중...</div>
  )
  
}