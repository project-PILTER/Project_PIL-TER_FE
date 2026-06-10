"use client";

/*
  소셜 로그인 콜백 페이지
  네이버 로그인 시 관련 처리를 하는 페이지
*/

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NaverCallback() {
  const router = useRouter();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    console.log(code);
  }, [router]);

  return(
    <div>네이버 로그인 로딩중...</div>
  )
  
}