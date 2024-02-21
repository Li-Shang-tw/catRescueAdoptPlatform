import { useEffect, useState } from "react";
import { getCatsOfOtherUserAPI, getCatsOfAdoperAPI } from "../callAPI";
import OverView from "../page/Overview";
import RescuingCardList from "./RescuingCardList";
import AdoptingCardList from "./AdoptingCardList";
import Loading from "./Loading";
import NoData from "./NoData";
export default function OtherUserProjects({ projectList, type, userId }) {
  //設定初始狀態
  const [projects, setProjects] = useState(null);

  //用useEffect來取得資料
  useEffect(() => {
    const fetchData = async () => {
      //當處理收養者的收養的專案
      if (type === "pet") {
        const data = await getCatsOfAdoperAPI(userId);
        //當資料不存在時
        if (data === "Not found") {
          setProjects(data);
          return;
        }

        setProjects(data);
      } else {
        //當處理救援者的募資中、募資成功、送養中、已領養的專案
        const data = await getCatsOfOtherUserAPI(userId);
        //當資料不存在時
        if (data === "Not found") {
          setProjects(data);
          return;
        }
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
      }
    };
    fetchData();
  }, [type, userId]);

  //當以載入的資料為空時，顯示暫無pr資料
  console.log(projects);
  if (!projects) {
    return <Loading />;
  } else if (projects === "Not found") {
    return <NoData />;
  }

  function handleSetData(newValue) {
    setProjects(newValue);
  }

  return (
    <>
      <OverView
        data={projects}
        handleSetData={handleSetData}
        Card={
          ((type === "rescuing" || type === "rescued") && RescuingCardList) ||
          ((type === "adopting" || type === "adopted" || type === "pet") &&
            AdoptingCardList)
        }
      />
    </>
  );
}
