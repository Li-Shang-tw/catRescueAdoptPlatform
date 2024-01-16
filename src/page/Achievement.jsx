import { useState } from "react";

import { useSearchParams } from "react-router-dom";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { useContext, useEffect } from "react";
import { getCatsOfCurrentUserAPI } from "../callAPI";

//導入元件
import RescuingCardList from "../components/RescuingCardList";
export default function Achievement() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cats, setCats] = useState([]);
  const q = searchParams.get("q");

  //取得當前登入者資料
  const userData = useContext(CurrentUserContext);
  const { currentUser } = userData;
  //用useEffect來呼叫API
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCatsOfCurrentUserAPI(currentUser.id, "2");
      setCats(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>成就</h2>
      <RescuingCardList currentCats={cats} />
    </div>
  );
}
