import { useState } from "react";

import { CurrentUserContext } from "../context/CurrentUserContext";
import { useContext, useEffect } from "react";
import { getCatsOfAdoperAPI } from "../callAPI";

//導入元件
import Overview from "./Overview";
import Banner from "../components/Banner";

import AdoptingCardList from "../components/AdoptingCardList";
export default function MyPet() {
  //設定狀態
  const [cats, setCats] = useState(null);
  //取得當前登入者資料
  const userData = useContext(CurrentUserContext);
  const { currentUser } = userData;

  //用useEffect來呼叫API
  useEffect(() => {
    const fetchData = async () => {
      if (currentUser) {
        const data = await getCatsOfAdoperAPI(currentUser.id);
        setCats(data);
      }
    };
    fetchData();
  }, [currentUser]);
  function handleSetData(newValue) {
    setCats(newValue);
  }
  return (
    <>
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
                我的寵物
              </h2>
              <p className="mb-4 text-4xl">你有這些寵物</p>
            </div>
          </div>
        </Banner>
      </Overview>
    </>
  );
}
