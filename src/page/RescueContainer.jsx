import Overview from "./Overview";
import { useState, useEffect } from "react";

import { getRescuingCatsAPI } from "../callAPI";
import RescuingCardList from "../components/RescuingCardList";
import Banner from "../components/Banner";

export default function RescueContainer() {
  //先設定rescueCat的state
  const [rescueCats, setRescueCats] = useState(null);
  //用useEffect來呼叫API
  useEffect(() => {
    const fetchData = async () => {
      const data = await getRescuingCatsAPI();
      setRescueCats(data);
    };
    fetchData();
  }, []);
  function handleSetData(newValue) {
    setRescueCats(newValue);
  }

  return (
    <>
      <Overview
        data={rescueCats}
        handleSetData={handleSetData}
        Card={RescuingCardList}
        sortType="rescue"
      >
        <Banner>
          <div className="px-32 pt-12 pb-12 flex justify-between ">
            <div>
              <h1 className="text-8xl font-bold text-gray-900 leading-tight mb-10">
                貓咪募款總覽
              </h1>
              <p className="mb-4 text-4xl">受傷貓貓需要你的募款</p>
            </div>
            <img
              className="rounded-full  w-1/3"
              src="/src/assets/imgs/貓咪募款圖.jpg"
              alt="募款貓的圖示"
            />
          </div>
        </Banner>
      </Overview>
    </>
  );
}
