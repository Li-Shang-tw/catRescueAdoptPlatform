//導入元件
import PaginationComponent from "../components/Pagination.jsx";
import Sort from "../components/Sort.jsx";
import { useState } from "react";
export default function RescueOverview({ children, data, handleSort, Card }) {
  //current page
  const [currentPage, setCurrentPage] = useState(1);

  //計算出總頁數
  const totalPages = Math.ceil(data?.length / 8);
  //=========pagination=========
  function handlePageChange(event, page) {
    setCurrentPage(page);
  }

  //顯示當前頁面的資料

  const currentData = data?.slice((currentPage - 1) * 8, currentPage * 8);

  return (
    <div>
      <div className="drop-shadow ">{children}</div>
      <div style={{ backgroundColor: "#ffdb7d" }} className="px-10 py-5">
        {handleSort && <Sort sort={handleSort} />}

        <Card currentCats={currentData} />
        <PaginationComponent
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
