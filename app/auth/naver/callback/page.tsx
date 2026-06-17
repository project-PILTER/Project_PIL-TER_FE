"use client";
/*
  소셜 로그인 콜백 페이지
  네이버 로그인 시 관련 처리를 하는 페이지
*/
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function NaverCallback() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    console.log(code);
  }, [searchParams]);

  return(
    <div>네이버 로그인 로딩중...</div>
  )
  
}