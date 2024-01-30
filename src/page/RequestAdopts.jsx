import { useParams } from "react-router-dom";
import { getCatsOfCurrentUserAPI } from "../callAPI";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Overview from "./Overview";
import AdoptingCardList from "../components/AdoptingCardList";

export default function RequestAdopts() {
  const { id } = useParams();
  const [requestingProject, setRequestingProject] = useState(null);
  //current page
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      //取得當前用戶的所有送養專案
      const data = await getCatsOfCurrentUserAPI(id, "3");
      //篩選出有人申請的專案
      const requestingProject = data.filter((cat) => {
        return cat.requestingUsers.length > 0;
      });
      setRequestingProject(requestingProject);
    };
    fetchData();
  }, [id]);
  if (requestingProject === null) {
    return <Loading />;
  }

  //=========pagination=========
  function handlePageChange(event, page) {
    setCurrentPage(page);
  }

  //顯示當前頁面的資料
  let currentRescueCats;
  let totalPages;
  if (requestingProject) {
    currentRescueCats = requestingProject.slice(
      (currentPage - 1) * 8,
      currentPage * 8
    );
    //所有頁數
    totalPages = Math.ceil(requestingProject.length / 8);
  }

  //======sort=======
  function handleSort() {
    console.log("sort");
  }
  return (
    <div>
      <Overview
        currentCats={requestingProject}
        setRescueCats={setRequestingProject}
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        handleSort={handleSort}
        Card={AdoptingCardList}
      >
        <div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2">
            被申請的專案
          </h1>
        </div>
      </Overview>
    </div>
  );
}
