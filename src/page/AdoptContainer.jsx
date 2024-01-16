import { useState, useEffect } from "react";
import { getAdoptingCatsAPI } from "../callAPI";
import Overview from "./Overview";

import AdoptingCardList from "../components/AdoptingCardList";
export default function AdoptContainer() {
  const [adoptCats, setAdoptCats] = useState(null);

  //用useEffect來呼叫API
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAdoptingCatsAPI();
      setAdoptCats(data);
    };
    fetchData();
  }, []);

  //current page
  const [currentPage, setCurrentPage] = useState(1);

  //=========pagination=========
  function handlePageChange(event, page) {
    setCurrentPage(page);
  }
  //處理沒資料時的狀況
  if (!adoptCats) {
    return <div>loading</div>;
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
          currentCats={adoptCats}
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
