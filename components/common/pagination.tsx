import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "../ui/pagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function CommonPagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  const pageGroupSize = 10;
  const startPage =
    Math.floor((currentPage - 1) / pageGroupSize) * pageGroupSize + 1;

  const endPage = Math.min(startPage + pageGroupSize - 1, totalPages);

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  const previousPage = startPage - pageGroupSize;
  const nextPage = startPage + pageGroupSize;

  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationLink href={`${basePath}?page=1`}>
              &lt;&lt;
            </PaginationLink>
          </PaginationItem>
        )}

        {startPage > 1 && (
          <PaginationItem>
            <PaginationLink href={`${basePath}?page=${previousPage}`}>
              &lt;
            </PaginationLink>
          </PaginationItem>
        )}

        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={`${basePath}?page=${page}`}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {nextPage <= totalPages && (
          <PaginationItem>
            <PaginationLink href={`${basePath}?page=${nextPage}`}>
              &gt;
            </PaginationLink>
          </PaginationItem>
        )}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationLink href={`${basePath}?page=${totalPages}`}>
              &gt;&gt;
            </PaginationLink>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
