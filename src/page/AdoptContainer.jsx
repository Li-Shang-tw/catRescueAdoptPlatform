import { useState, useContext } from "react";
import Overview from "./Overview";
//載入救援資料的context
import { AdoptContext } from "../context/AdoptContext";
import AdoptingCardList from "../components/AdoptingCardList";
export default function AdoptContainer() {
  //使用context
  const adoptData = useContext(AdoptContext);
  const { adoptCats } = adoptData;

  //current page
  const [currentPage, setCurrentPage] = useState(1);

  //=========pagination=========
  function handlePageChange(event, page) {
    setCurrentPage(page);
  }

  //顯示當前頁面的資料
  const currentRescueCats = adoptCats.slice(
    (currentPage - 1) * 8,
    currentPage * 8
  );
  //所有頁數
  const totalPages = Math.ceil(adoptCats.length / 8);

  //======sort=======
  function handleSort() {
    console.log("sort");
  }
  return (
    <>
      <div className="container mx-auto px-4">
        <Overview
          currentCats={currentRescueCats}
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          handleSort={handleSort}
          Card={AdoptingCardList}
        >
          <div>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2">
              貓咪領養總覽
            </h1>
            <p className="mb-4">快帶可愛的貓貓回家</p>
          </div>
        </Overview>
      </div>
    </>
  );
}
