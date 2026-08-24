"use client";

/*
  검색창 컴포넌트
  client 쪽에 렌더링되며 검색 기능을 수행함
*/

import { Search } from "lucide-react";
import { Button } from "../../ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!keyword.trim()) {
      alert("검색어를 입력해주세요.");
      return;
    }
    router.push(`/search?q=${encodeURIComponent(keyword)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="flex bg-white w-[30.875rem] h-[3rem] rounded-sm">
        <Search className="text-black h-full mx-2" />
        <input
          className="text-black w-full outline-none"
          type="search"
          placeholder="궁금한 증상이나 키워드를 입력해주세요."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="ml-2">
        <Button className="bg-white text-[#615ed6] rounded-sm hover:bg-white/90 h-12">
          검색하기
        </Button>
      </div>
    </div>
  );
}
