import "./App.css";
import RescueOverview from "./assets/view/RescueOverview";
import rescueData from "../src/assets/rescueData.json";
import { useState } from "react";

function App() {
  //rescueData
  const [rescueCats, setRescueCats] = useState(rescueData);

  //current page
  const [currentPage, setCurrentPage] = useState(1);
  function handlePageChange(page) {
    setCurrentPage(page);
  }
  function handleNextPage() {
    setCurrentPage(currentPage + 1);
  }
  function handlePreviousPage() {
    setCurrentPage(currentPage - 1);
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
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
        />
      </div>
    </>
  );
}

export default App;
