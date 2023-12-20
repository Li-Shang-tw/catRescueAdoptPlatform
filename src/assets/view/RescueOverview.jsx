//導入元件
import Card from "../../components/Card";
import PaginationComponent from "../../components/Pagination";
import Sort from "../../components/Sort";
import { useState } from "react";

export default function RescueOverview({
  currentRescueCats,
  setRescueCats,
  totalPages,
  currentPage,
  handlePageChange,
  handleNextPage,
  handlePreviousPage,
}) {
  //排序
  function sort(order) {
    //分開已定義與未定義危險度的陣列
    const undefinedRisk = currentRescueCats.filter(
      (item) => item.riskLevel === ""
    );
    const definedRisk = currentRescueCats.filter(
      (item) => item.riskLevel !== ""
    );
    if (order === "riskDes") {
      //排序已定義危險度的陣列
      definedRisk.sort((a, b) => {
        return b.riskLevel - a.riskLevel;
      });
      //合併陣列
      const sortedRescueCats = [...definedRisk, ...undefinedRisk];
      setRescueCats(sortedRescueCats);
    } else if (order === "riskAsc") {
      definedRisk.sort((a, b) => {
        return a.riskLevel - b.riskLevel;
      });
      //合併陣列
      const sortedRescueCats = [...definedRisk, ...undefinedRisk];
      setRescueCats(sortedRescueCats);
    }
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2">
        貓咪救援總覽
      </h1>
      <p className="mb-4">可愛的貓貓需要你的幫忙</p>
      <Sort sort={sort} />
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
