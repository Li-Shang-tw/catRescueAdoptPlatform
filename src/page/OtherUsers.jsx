import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOtherUsersAPI } from "../callAPI.js";
import OtherUsersCardList from "../components/OtherUsersCardList.jsx";

import Overview from "./Overview.jsx";
export default function OtherUsers() {
  const [otherUsers, setOtherUsers] = useState(null);
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");
  useEffect(() => {
    const fetchData = async () => {
      const data = await getOtherUsersAPI(role);
      setOtherUsers(data);
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
  let currentOtherUsers;
  let totalPages;
  if (otherUsers) {
    currentOtherUsers = otherUsers.slice(
      (currentPage - 1) * 8,
      currentPage * 8
    );
    //所有頁數
    totalPages = Math.ceil(otherUsers.length / 8);
  }

  //======sort=======
  function handleSort() {
    console.log("sort");
  }

  return (
    <>
      <div className="container mx-auto px-4">
        <Overview
          currentCats={currentOtherUsers}
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          handleSort={handleSort}
          Card={OtherUsersCardList}
        >
          <div>
            <h2>
              {(role === "rescuer" && "救援者總攬") ||
                (role === "adopter" && "收養者總覽")}
            </h2>
          </div>
        </Overview>
      </div>
    </>
  );
}
