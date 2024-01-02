import RescueOverview from "../page/RescueOverview";
import { useState } from "react";
//載入救援的資料
import rescueData from "../assets/rescueData.json";

export default function RescueContainer() {
  //rescueData
  const [rescueCats, setRescueCats] = useState(rescueData);
  //current page
  const [currentPage, setCurrentPage] = useState(1);

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
  // console.log(import.meta.env.VITE_CAT_API_KEY);
  return (
    <>
      <div className="container mx-auto px-4">
        <RescueOverview
          currentRescueCats={currentRescueCats}
          setRescueCats={setRescueCats}
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </>
  );
}
