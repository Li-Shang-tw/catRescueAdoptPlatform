import RescueOverview from "../page/RescueOverview";
import { useState, useContext } from "react";
//載入救援資料的context
import { RescueContext } from "../context/RescueContext";

export default function RescueContainer() {
  //使用context
  const rescueData = useContext(RescueContext);
  const { rescueCats, setRescueCats } = rescueData;

  //current page
  const [currentPage, setCurrentPage] = useState(1);

  //=========pagination=========
  function handlePageChange(event, page) {
    setCurrentPage(page);
  }

  //顯示當前頁面的資料
  const currentRescueCats = rescueCats.slice(
    (currentPage - 1) * 8,
    currentPage * 8
  );
  //所有頁數
  const totalPages = Math.ceil(rescueCats.length / 8);

  //=========sort=========
  function handleSort(order) {
    //分開已定義與未定義危險度的陣列
    const undefinedRisk = rescueCats.filter((item) => item.riskLevel === "");
    const definedRisk = rescueCats.filter((item) => item.riskLevel !== "");
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
    <>
      <div className="container mx-auto px-4">
        <RescueOverview
          currentRescueCats={currentRescueCats}
          setRescueCats={setRescueCats}
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          handleSort={handleSort}
        />
      </div>
    </>
  );
}
