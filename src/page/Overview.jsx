//導入元件
import PaginationComponent from "../components/Pagination.jsx";
import Sort from "../components/Sort.jsx";
import { useState } from "react";
export default function RescueOverview({
  children,
  data,
  handleSetData,
  Card,
  sortType,
}) {
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
  //=========sort=========
  function handleSort(order) {
    //分開已定義與未定義危險度的陣列
    const undefinedRisk = data.filter((item) => item.riskLevel === "");
    const definedRisk = data.filter((item) => item.riskLevel !== "");
    if (order === "riskDes") {
      //排序已定義危險度的陣列
      definedRisk.sort((a, b) => {
        return b.riskLevel - a.riskLevel;
      });
      //合併陣列
      const sortedRescueCats = [...definedRisk, ...undefinedRisk];
      handleSetData(sortedRescueCats);
    } else if (order === "riskAsc") {
      definedRisk.sort((a, b) => {
        return a.riskLevel - b.riskLevel;
      });
      //合併陣列
      const sortedRescueCats = [...definedRisk, ...undefinedRisk];
      handleSetData(sortedRescueCats);
    }
  }
  return (
    <div>
      <div className="drop-shadow ">{children}</div>
      <div style={{ backgroundColor: "#ffdb7d" }} className="px-10 py-5">
        {sortType !== "user" && (
          <Sort handleSort={handleSort} sortType={sortType} />
        )}

        <Card currentData={currentData} />
        <PaginationComponent
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
