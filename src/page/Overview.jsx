//導入元件
import Card from "../components/Card.jsx";
import PaginationComponent from "../components/Pagination.jsx";
import Sort from "../components/Sort.jsx";

export default function RescueOverview({
  children,
  currentCats,
  setRescueCats,
  totalPages,
  currentPage,
  handlePageChange,
  handleSort,
}) {
  return (
    <div>
      <div className="drop-shadow-md flex justify-between mb-5 pb-2">
        {children}
        <Sort sort={handleSort} />
      </div>
      <Card currentCats={currentCats} />
      <PaginationComponent
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}
