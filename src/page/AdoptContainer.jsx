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
          <div className=" py-12 w-10/12 mx-auto flex  flex-col items-center sm:flex-row  justify-between ">
            <div>
              <h1 className="font-bold text-gray-900 leading-tight mb-10 text-4xl md:text-7xl lg:text-8xl text-center">
                貓咪領養總覽
              </h1>
              <p className="mb-4 xl:text-4xl  md-text-3xl text-xl text-center">
                快帶可愛的貓貓回家
              </p>
            </div>
            <img
              className="rounded-full  w-3/5 sm:w-1/2 md:w-1/3"
              src="/src/assets/imgs/收養貓的圖示.jpg"
              alt="收養貓的圖示"
            />
          </div>
        </Banner>
      </Overview>
    </>
  );
}
