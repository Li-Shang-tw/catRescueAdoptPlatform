import { useState, useEffect, useContext } from "react";
import Overview from "./Overview";
import Pagination from "../components/Pagination.jsx";
import AdoptingCardList from "../components/AdoptingCardList";
import Sort from "../components/Sort.jsx";
import { getCatsOfCurrentUserAPI } from "../callAPI";
//載入current user的資料
import { CurrentUserContext } from "../context/CurrentUserContext.js";

export default function MyAdoptProjects() {
  const [adoptCats, setAdoptCats] = useState(null);
  //取得current user的資料
  const { currentUser } = useContext(CurrentUserContext);
  const currentUserId = currentUser.id;

  //用useEffect來呼叫API
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCatsOfCurrentUserAPI(currentUserId, "3");
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
    <div>
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
            你的送養專案
          </h1>
        </div>
      </Overview>
    </div>
  );
}
