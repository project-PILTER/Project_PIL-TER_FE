/*
  배너에 해당하는 영역으로
  검색 기능 및 어떤 태그가 많이 사용됐는지 볼 수 있다.
  태그는 추후에 추가 예정
*/

import SearchBar from "@/components/domain/home/searchBar"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

export default function HeroSection() {
  return(
    <section className="flex flex-col justify-center items-center gap-8 bg-gradient-to-r from-[#625ed7] to-[#7181e7] w-full h-100 text-white">
      <Badge className="text-white bg-[#8d8ae1] h-8" variant="outline">
        <Sparkles />
        건강한 삶을 위한 커뮤니티
      </Badge>

      <div className="flex flex-col gap-3">
        <h1 className="decoration-solid text-5xl text-center leading-tight">당신의 건강고민, 
          <br />
          함께 나눠요.
        </h1>
        <h2 className="text-center color=[#cdccf2]">커뮤니티에서 비슷한 경험을 가진 사람들과 소통하고, 
          <br />
          건강 일지로 나의 건강 상태를 기록해보세요.
        </h2>
      </div>
      
      <SearchBar />
    </section>
  )
}