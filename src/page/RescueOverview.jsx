//導入元件
import Card from "../components/Card.jsx";
import PaginationComponent from "../components/Pagination.jsx";
import Sort from "../components/Sort.jsx";

export default function RescueOverview({
  currentRescueCats,
  setRescueCats,
  totalPages,
  currentPage,
  handlePageChange,
  handleSort,
}) {
  return (
    <div>
      <div className="drop-shadow-md">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2">
          貓咪救援總覽
        </h1>
        <p className="mb-4">可愛的貓貓需要你的幫忙</p>
        <Sort sort={handleSort} />
      </div>
      <Card currentRescueCats={currentRescueCats} />
      <PaginationComponent
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}
