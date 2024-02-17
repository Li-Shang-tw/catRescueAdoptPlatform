import { useEffect, useState } from "react";
import { getCatsOfOtherUserAPI } from "../callAPI";
import OverView from "../page/Overview";
import RescuingCardList from "./RescuingCardList";
import AdoptingCardList from "./AdoptingCardList";
export default function OtherUserProjects({ projectList, type, rescuerId }) {
  //設定初始狀態
  const [projects, setProjects] = useState([]);
  //用useEffect來取得資料
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCatsOfOtherUserAPI(rescuerId);
      //按照type來篩選資料
      let filterCats = [];
      switch (type) {
        case "rescuing":
          filterCats = data.filter((item) => item.state === "1");
          break;
        case "adopting":
          filterCats = data.filter((item) => item.state === "3");
          break;
        case "rescued":
          filterCats = data.filter((item) => item.state === "2");
          break;
        case "adopted":
          filterCats = data.filter((item) => item.state === "4");
          break;
      }

      setProjects(filterCats);
    };
    fetchData();
  }, [projectList, type, rescuerId]);

  //當以載入的資料為空時，顯示暫無資料
  if (projectList && projectList.length === 0) {
    return <p>暫無資料</p>;
  }

  //current page
  const [currentPage, setCurrentPage] = useState(1);

  //=========pagination=========
  function handlePageChange(event, page) {
    setCurrentPage(page);
  }

  //顯示當前頁面的資料
  let currentRescueCats;
  let totalPages;
  if (projects) {
    currentRescueCats = projects.slice((currentPage - 1) * 8, currentPage * 8);
    //所有頁數
    totalPages = Math.ceil(projects.length / 8);
  }

  return (
    <>
      <OverView
        currentCats={projects}
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        Card={
          ((type === "rescuing" || type === "rescued") && RescuingCardList) ||
          ((type === "adopting" || type === "adopted") && AdoptingCardList)
        }
      />
    </>
  );
}
