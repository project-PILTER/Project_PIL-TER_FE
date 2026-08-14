/*
  모든페이지에서 볼 수 있는 네비게이션으로
  메인, 커뮤니티, 건강일지, 약국찾기, 다크모드/라이트모드 버튼, 로그인 버튼이 있다.
  약 후기/정보는 추후에 추가 예정
*/

import Link from "next/link";
import logo from ".././../public/logo/logo_no_letter.png";
import letter from "../../public/logo/letter.png";
import Image from "next/image";
import ThemeButton from "./themeButton";
import { Bell } from "lucide-react";
import LoginButton from "./loginButton";
import { Button } from "../ui/button";

export default function Navigation() {
  return (
    <header className="flex items-center justify-between mx-auto w-full max-w-7xl">
      <Link href="/">
        <div className="flex items-center">
          <Image className="h-15 w-auto" src={logo} alt="PIL-TER" />
          <Image
            className="h-11 w-auto"
            src={letter}
            alt="PIL-TER"
            loading="eager"
          />
        </div>
      </Link>
      <nav>
        <ul className="flex items-center gap-[1.5625rem]">
          <li className="list-none transition-all duration-100 ease-in-out hover:scale-105">
            {/* <Image className="w-[70px] h-[70px]" src={logo} alt="PIL-TER" loading="eager"/> */}
          </li>
          <li className="list-none transition-all duration-100 ease-in-out hover:scale-105">
            <Link href="/">홈</Link>
          </li>
          <li className="list-none transition-all duration-100 ease-in-out hover:scale-105">
            <Link href="/community/articles">커뮤니티</Link>
          </li>
          <li className="list-none transition-all duration-100 ease-in-out hover:scale-105">
            <Link href="/journal">건강일지</Link>
          </li>
          <li className="list-none transition-all duration-100 ease-in-out hover:scale-105">
            <Link href="/medicines">약 정보/후기</Link>
          </li>
          <li className="list-none transition-all duration-100 ease-in-out hover:scale-105">
            <Link href="/pharmacy">약국찾기</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-2 pr-4">
        <ThemeButton />
        <Button className="rounded-full bg-transparent text-black hover:bg-neutral-100">
          <Bell />
        </Button>
        <LoginButton />
      </div>
    </header>
  );
}
