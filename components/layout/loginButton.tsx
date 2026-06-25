"use client";

/*
  로그인 버튼 컴포넌트
  로그인 관련된 로직 실행
*/

import { Button } from "../ui/button";
import { LogIn } from "lucide-react";
import { useState } from "react";
import AuthModal from "../domain/auth/authModal";
import Link from "next/link";
import Image from "next/image";
import { useAuthStore } from "@/stores/authStore";

export default function LoginButton() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const user = useAuthStore((state) => state.user);

  if(user) {
    return(
      <Link href="/mypage">
        {user.profileImage ? (<Image src={user.profileImage} alt="프로필" width={40} height={40} className="rounded-full object-cover" />) : <div className="w-10 h-10 rounded-full bg-[#5c59da] text-white flex items-center justify-center">{user.nickname.charAt(0)}</div>}
        
      </Link>
    )
  }

  return (
    <div>
      <Button
        className="bg-white dark:bg-black text-black dark:text-white hover:bg-[#e4e3f5]"
        onClick={() => {
          setMode("login");
          setOpen(true);
        }}
      >
        <LogIn className="mr-1" />
        로그인
      </Button>

      <AuthModal
        open={open}
        onOpenChange={setOpen}
        mode={mode}
        onModeChange={setMode}
      />
    </div>
  );
}
