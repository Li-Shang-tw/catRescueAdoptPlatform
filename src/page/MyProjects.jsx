import { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import Overview from "./Overview.jsx";

import AdoptingCardList from "../components/AdoptingCardList.jsx";
import Sort from "../components/Sort.jsx";
import { getCatsOfCurrentUserAPI } from "../callAPI.js";
//載入current user的資料
import { CurrentUserContext } from "../context/CurrentUserContext.js";

export default function MyAdoptProjects() {
  const [myCats, setyCats] = useState(null);
  //取得current user的資料
  const { currentUser } = useContext(CurrentUserContext);
  const currentUserId = currentUser.id;

  //取得query string>>type
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  //用useEffect來呼叫API
  useEffect(() => {
    const fetchData = async () => {
      //當type為rescue時，statw為3
      if (type === "rescue") {
        const data = await getCatsOfCurrentUserAPI(currentUserId, "1");
        setyCats(data);
      } else if (type === "adopt") {
        const data = await getCatsOfCurrentUserAPI(currentUserId, "3");
        setyCats(data);
      }
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
  if (myCats) {
    currentRescueCats = myCats.slice((currentPage - 1) * 8, currentPage * 8);
    //所有頁數
    totalPages = Math.ceil(myCats.length / 8);
  }

  //======sort=======
  function handleSort() {
    console.log("sort");
  }
  return (
    <div>
      <Overview
        currentCats={myCats}
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
