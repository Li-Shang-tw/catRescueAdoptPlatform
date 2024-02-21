import Overview from "./Overview";
import { useState, useEffect } from "react";

import { getRescuingCatsAPI } from "../callAPI";
import RescuingCardList from "../components/RescuingCardList";
import Banner from "../components/Banner";

import donateImage from "../assets/imgs/貓咪募款圖.jpg";

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
          <div className=" py-12 w-10/12 mx-auto flex  flex-col items-center sm:flex-row  justify-between ">
            <div>
              <h1 className="font-bold text-gray-900 leading-tight mb-10 text-4xl md:text-7xl lg:text-8xl text-center">
                貓咪募款總覽
              </h1>
              <p className="mb-4 xl:text-4xl  md-text-3xl text-xl text-center">
                受傷貓貓需要你的募款
              </p>
            </div>
            <img
              className="rounded-full  w-3/5 sm:w-1/2 md:w-1/3"
              src={donateImage}
              alt="募款貓的圖示"
            />
          </div>
        </Banner>
      </Overview>
    </>
  );
}
