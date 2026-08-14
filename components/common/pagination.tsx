import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function CommonPagination({currentPage, totalPages, basePath}:PaginationProps) {
  const pageGroupSize = 10;
  const startPage = Math.floor((currentPage - 1) / pageGroupSize) * pageGroupSize + 1;

  const endPage = Math.min(startPage + pageGroupSize - 1, totalPages);

  const pages = Array.from(
    {length: endPage - startPage + 1},
    (_, i) => startPage + i
  )

  const previousPage = startPage - pageGroupSize;

  const nextPage = startPage + pageGroupSize;

  return(
    <Pagination>
      <PaginationContent>
        {startPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={`${basePath}?page=${previousPage}`} />
          </PaginationItem>
        )}

        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink href={`${basePath}?page=${page}`} isActive={page === currentPage}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {nextPage <= totalPages && (
          <PaginationItem>
            <PaginationNext href={`${basePath}?page=${nextPage}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}