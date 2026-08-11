"use client";

/*
  테마버튼 컴포넌트
  client쪽에서 렌더링되며 라이트모드/다크모드 바꾸기 가능
*/

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeButton() {
  const { setTheme } = useTheme();
  
  return (
    <Button
      className="rounded-full"
      variant="ghost"
      onClick={() => {
        const isDark = document.documentElement.classList.contains("dark");
        setTheme(isDark ? "light" : "dark");
      }}
    >
      <Sun className="h-5 w-5 dark:scale-0"/>

      <Moon className="h-5 w-5 dark:scale-100"/>
    </Button>
  );
}
