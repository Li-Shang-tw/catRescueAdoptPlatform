import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationComponent({
  totalPages,
  currentPage,
  handlePageChange,
}) {
  return (
    <div className="flex justify-center">
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Stack>
    </div>
  );
}
