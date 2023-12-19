import { Pane, Pagination } from "evergreen-ui";
import { useState } from "react";

export default function PaginationComponent({
  totalPages,
  currentPage,
  handlePageChange,
  handleNextPage,
  handlePreviousPage,
}) {
  return (
    <Pane className="flex justify-center">
      <Pagination
        page={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
      />
    </Pane>
  );
}
