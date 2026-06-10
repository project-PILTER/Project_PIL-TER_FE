import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return(
    <div className="flex flex-col h-[calc(100vh-70px)] justify-center items-center">
      <LoaderCircle className="w-10 h-10 animate-spin" />
      <h2 className="mt-3">로딩중...</h2>
    </div>
  )
}