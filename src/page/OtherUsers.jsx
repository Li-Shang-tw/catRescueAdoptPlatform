import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { getOtherUsersAPI } from "../callAPI.js";
import OtherUsersCardList from "../components/OtherUsersCardList.jsx";
import { CurrentUserContext } from "../context/CurrentUserContext.js";
import Banner from "../components/Banner.jsx";
import Overview from "./Overview.jsx";

import rescuerImage from "../assets/imgs/救援者.jpg";
import adopterImage from "../assets/imgs/收容者.jpg";
export default function OtherUsers() {
  const [otherUsers, setOtherUsers] = useState(null);
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");

  //取得current user的資料
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getOtherUsersAPI(role);
      let otherUsers;
      //先移除掉自己
      //當有資料與有登入者時，才執行
      if (data && currentUser) {
        otherUsers = data.filter((item) => item.id !== currentUser.id);
      } else {
        otherUsers = data;
      }

      setOtherUsers(otherUsers);
    };
    fetchData();
  }, [role, currentUser]);
  function handleSetData(newValue) {
    setOtherUsers(newValue);
  }
  return (
    <>
      <Overview
        data={otherUsers}
        handleSetData={handleSetData}
        sortType="user"
        Card={OtherUsersCardList}
      >
        <Banner>
          <div className="py-12 w-10/12 mx-auto flex  flex-col items-center sm:flex-row  justify-between ">
            <div>
              <h1 className="font-bold text-gray-900 leading-tight mb-10 text-4xl md:text-7xl lg:text-8xl text-center">
                {(role === "rescuer" && "救援者總攬") ||
                  (role === "adopter" && "收養者總覽")}
              </h1>
              <p className="mb-4 xl:text-4xl  md-text-3xl text-xl text-center">
                讓我們認識這些英雄
              </p>
            </div>
            {(role === "rescuer" && (
              <img
                className="rounded-full  w-1/3"
                src={rescuerImage}
                alt="救援者"
              />
            )) ||
              (role === "adopter" && (
                <img
                  className="rounded-full  w-1/3"
                  src={adopterImage}
                  alt="收養者"
                />
              ))}
          </div>
        </Banner>
      </Overview>
    </>
  );
}
