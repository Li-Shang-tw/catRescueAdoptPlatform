import { useState, useEffect } from "react";
import { getAdoptingCatsAPI } from "../callAPI";
import Overview from "./Overview";
import Banner from "../components/Banner";
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

  //顯示當前頁面的資料
  let currentRescueCats;
  let totalPages;
  if (adoptCats) {
    currentRescueCats = adoptCats.slice((currentPage - 1) * 8, currentPage * 8);
    //所有頁數
    totalPages = Math.ceil(adoptCats.length / 8);
  }

  //======sort=======
  function handleSort() {
    console.log("sort");
  }
  return (
    <>
      <Overview
        currentCats={adoptCats}
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        handleSort={handleSort}
        Card={AdoptingCardList}
      >
        <Banner>
          <div className="px-32 pt-12 pb-12 flex justify-between ">
            <div>
              <h1 className="text-8xl font-bold text-gray-900 leading-tight mb-10">
                貓咪領養總覽
              </h1>
              <p className="mb-4 text-4xl">快帶可愛的貓貓回家</p>
            </div>
            <img
              className="rounded-full  w-1/3"
              src="/src/assets/imgs/收養貓的圖示.jpg"
              alt="收養貓的圖示"
            />
          </div>
        </Banner>
      </Overview>
    </>
  );
}
