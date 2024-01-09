import Overview from "./Overview";
import { useState, useContext } from "react";
//載入救援資料的context
import { RescueContext } from "../context/RescueContext";
import RescuingCardList from "../components/RescuingCardList";

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
        <Overview
          currentCats={currentRescueCats}
          setRescueCats={setRescueCats}
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          handleSort={handleSort}
          Card={RescuingCardList}
        >
          <div>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2">
              貓咪救援總覽
            </h1>
            <p className="mb-4">可愛的貓貓需要你的幫忙</p>
          </div>
        </Overview>
      </div>
    </>
  );
}
