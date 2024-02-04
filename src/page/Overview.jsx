//導入元件
import PaginationComponent from "../components/Pagination.jsx";
import Sort from "../components/Sort.jsx";

export default function RescueOverview({
  children,
  currentCats,
  totalPages,
  currentPage,
  handlePageChange,
  handleSort,
  Card,
}) {
  return (
    <div>
      <div className="drop-shadow ">
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
