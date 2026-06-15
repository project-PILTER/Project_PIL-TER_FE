"use client";

/*
  로그인 버튼 컴포넌트
  로그인 관련된 로직 실행
*/

import { Button } from "../ui/button";
import { LogIn } from "lucide-react";
import { useState } from "react";
import AuthModal from "../domain/auth/authModal";

export default function LoginButton() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");

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
