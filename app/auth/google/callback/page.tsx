"use client";
/*
  소셜 로그인 콜백 페이지
  구글 로그인을 했을 때 관련 처리를 여기서 한다.
*/

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function GoogleCallback() {
  const router = useRouter();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    console.log(code);
  
  }, [router])

  return(
    <div>구글 로그인 로딩중 ...</div>
  )
  
}