import { useState } from "react";

import { useSearchParams } from "react-router-dom";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { useContext, useEffect } from "react";
import { getCatsOfCurrentUserAPI } from "../callAPI";

//導入元件
import Overview from "./Overview";
import Banner from "../components/Banner";
import RescuingCardList from "../components/RescuingCardList";
import AdoptingCardList from "../components/AdoptingCardList";
import donateImage from "../assets/imgs/貓咪募款圖.jpg";
import adoptImage from "../assets/imgs/收養貓的圖示.jpg";
export default function Achievement() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cats, setCats] = useState(null);
  const q = searchParams.get("q");

  //取得當前登入者資料
  const userData = useContext(CurrentUserContext);
  const { currentUser } = userData;
  //用useEffect來呼叫API
  useEffect(() => {
    const fetchData = async () => {
      //當查詢救援時
      let state;
      switch (q) {
        case "rescue":
          state = "2";
          break;
        case "adopt":
          state = "4";
      }

      if (currentUser) {
        const data = await getCatsOfCurrentUserAPI(currentUser.id, state);
        setCats(data);
      }
    };
    fetchData();
  }, [q, currentUser]);

  function handleSetData(newValue) {
    setCats(newValue);
  }
  return (
    <>
      {q === "rescue" && (
        <Overview
          data={cats}
          handleSetData={handleSetData}
          sortType="rescue"
          Card={RescuingCardList}
        >
          <Banner>
            <div className="px-32 pt-12 pb-12 flex justify-between ">
              <div>
                <h2 className="text-8xl font-bold text-gray-900 leading-tight mb-10">
                  救援成就
                </h2>
                <p className="mb-4 text-4xl">你拯救了這些貓貓</p>
              </div>
              <img
                className="rounded-full  w-1/3"
                src={donateImage}
                alt="募款貓的圖示"
              />
            </div>
          </Banner>
        </Overview>
      )}
      {q === "adopt" && (
        <Overview
          data={cats}
          handleSetData={handleSetData}
          sortType="adopt"
          Card={AdoptingCardList}
        >
          <Banner>
            <div className="px-32 pt-12 pb-12 flex justify-between ">
              <div>
                <h2 className="text-8xl font-bold text-gray-900 leading-tight mb-10">
                  送養成就
                </h2>
                <p className="mb-4 text-4xl">你幫助這些貓貓找到家</p>
              </div>
              <img
                className="rounded-full  w-1/3"
                src={adoptImage}
                alt="收養貓的圖示"
              />
            </div>
          </Banner>
        </Overview>
      )}
    </>
  );
}
