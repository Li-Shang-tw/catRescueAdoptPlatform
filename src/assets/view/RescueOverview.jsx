//建立元件，元件名稱叫做RescueOverview

import Card from "../../components/Card";
import PaginationComponent from "../../components/Pagination";
export default function RescueOverview({
  currentRescueCats,
  totalPages,
  currentPage,
  handlePageChange,
  handleNextPage,
  handlePreviousPage,
}) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2">
        貓咪救援總覽
      </h1>
      <p className="mb-4">可愛的貓貓需要你的幫忙</p>
      <hr className="mb-4 border-2 border-gray-300"></hr>
      <Card currentRescueCats={currentRescueCats} />
      <PaginationComponent
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
    </div>
  );
}
