import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "ssl.pstatic.net",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "http",
        hostname: "k.kakaocdn.net",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "nedrug.mfds.go.kr",
        port: "",
        pathname: "/pbp/cmn/itemImageDownload/**"
      },
    ]
  }
};

export default nextConfig;
