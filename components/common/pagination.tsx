import { PaginationProps } from "@/types/ui.type";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";

export default function CommonPagination({currentPage, totalPages, basePath}:PaginationProps) {
  const pages = Array.from(
    {length: totalPages},
    (_, i) => i + 1 // 현재값은 필요 없어서 _로 무시
  ) // 1부터 totalPages까지의 숫자 배열을 생성

  return(
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={`${basePath}?page=${currentPage - 1}`} />
          </PaginationItem>
        )}

        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink href={`${basePath}?page=${page}`} isActive={page === currentPage}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext href={`${basePath}?page=${currentPage - 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}