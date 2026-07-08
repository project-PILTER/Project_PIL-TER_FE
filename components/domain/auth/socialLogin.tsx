/*
  소셜 로그인 버튼들로
  카카오, 구글, 네이버로 이루어져 있다.
*/

import Image from "next/image";
import kakaoLogin from "../../../public/auth/kakao_login.png";
import googleLogin from "../../../public/auth/google_login.png";
import naverLogin from "../../../public/auth/naver_login.png";

interface SocialLoginProps {
  onOpenChange: (open: boolean) => void;
}

export default function SocialLogin({ onOpenChange }: SocialLoginProps) {
  const handleSocialLogin = (type: "kakao" | "google" | "naver") => {
    onOpenChange(false);

    const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

    const urls = {
      kakao: `${API_URL}/oauth2/authorization/kakao`,
      google: `${API_URL}/oauth2/authorization/google`,
      naver: `${API_URL}/oauth2/authorization/naver`,
    };

    window.location.replace(urls[type]);
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => handleSocialLogin("kakao")}>
        <Image
          src={kakaoLogin}
          className="cursor-pointer"
          alt="카카오 로그인"
          width={240}
          height={80}
        />
      </button>
      <button onClick={() => handleSocialLogin("google")}>
        <Image src={googleLogin} className="cursor-pointer" alt="구글 로그인" width={240} height={80}/>
      </button>
      <button onClick={() => handleSocialLogin("naver")}>
        <Image
          src={naverLogin}
          className="cursor-pointer"
          alt="네이버 로그인"
          width={240}
          height={80}
        />
      </button>
    </div>
  );
}
