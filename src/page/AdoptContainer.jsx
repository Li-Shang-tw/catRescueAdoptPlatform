import { useState, useEffect } from "react";
import { getAdoptingCatsAPI } from "../callAPI";
import Overview from "./Overview";
import Banner from "../components/Banner";
import AdoptingCardList from "../components/AdoptingCardList";
export default function AdoptContainer() {
  const [adoptCats, setAdoptCats] = useState(null);

  //用useEffect來呼叫API
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAdoptingCatsAPI();
      setAdoptCats(data);
    };
    fetchData();
  }, []);

  function handleSetData(newValue) {
    setAdoptCats(newValue);
  }

  return (
    <>
      <Overview
        data={adoptCats}
        handleSetData={handleSetData}
        sortType="adopt"
        Card={AdoptingCardList}
      >
        <Banner>
          <div className="px-32 pt-12 pb-12 flex justify-between ">
            <div>
              <h1 className="text-8xl font-bold text-gray-900 leading-tight mb-10">
                貓咪領養總覽
              </h1>
              <p className="mb-4 text-4xl">快帶可愛的貓貓回家</p>
            </div>
            <img
              className="rounded-full  w-1/3"
              src="/src/assets/imgs/收養貓的圖示.jpg"
              alt="收養貓的圖示"
            />
          </div>
        </Banner>
      </Overview>
    </>
  );
}
