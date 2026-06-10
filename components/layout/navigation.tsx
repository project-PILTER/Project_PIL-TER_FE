/*
  모든페이지에서 볼 수 있는 네비게이션으로
  메인, 커뮤니티, 건강일지, 약국찾기, 다크모드/라이트모드 버튼, 로그인 버튼이 있다.
  약 후기/정보는 추후에 추가 예정
*/

import Link from "next/link";
import logo from "../../public/logo/logo.png";
import Image from "next/image";
import ThemeButton from "../common/themeButton";
import { Bell, } from "lucide-react";
import LoginButton from "../common/loginButton";

export default function Navigation() {
  return (
    <header className="flex items-center justify-between mx-auto w-7xl">
      <div className="flex">
        <Image
          className="w-[70px] h-[70px]"
          src={logo}
          alt="PIL-TER"
          loading="eager"
        />
        {/* <p className="font-bold text-xl mt-5 ml-5">PILTER</p> */}
      </div>
      <nav className="ml-35">
        <ul className="flex items-center gap-[1.5625rem]">
          <li className="list-none transition-all duration-100 ease-in-out hover:scale-105">
            {/* <Image className="w-[70px] h-[70px]" src={logo} alt="PIL-TER" loading="eager"/> */}
          </li>
          <li className="list-none transition-all duration-100 ease-in-out hover:scale-105">
            <Link href="/">홈</Link>
          </li>
          <li className="list-none transition-all duration-100 ease-in-out hover:scale-105">
            <Link href="/community">커뮤니티</Link>
          </li>
          <li className="list-none transition-all duration-100 ease-in-out hover:scale-105">
            <Link href="/journal">건강일지</Link>
          </li>
          <li className="list-none transition-all duration-100 ease-in-out hover:scale-105">
            <Link href="/pharmacy">약국찾기</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4 pr-4">
        <ThemeButton />
        <Bell />
        <LoginButton />
      </div>
    </header>
  );
}
