import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
//api
import { getCatAPI } from "../callAPI";
import AdoptingCardList from "../components/AdoptingCardList";
import Loading from "../components/Loading";
export default function RequestingAdoptsModal() {
  //設定state
  const [requestCats, setRequestCats] = useState(null);
  //取得當前用戶
  const { currentUser } = useContext(CurrentUserContext);
  //取得申請中的cat資料
  useEffect(() => {
    const fetchData = async () => {
      const data = await Promise.all(
        currentUser.requestingProject.map(async (id) => {
          const catData = await getCatAPI(id);
          return catData;
        })
      );
      setRequestCats(data);
    };
    fetchData();
  }, [currentUser.requestingProject]);
  //尚未載入資料時
  if (requestCats === null) {
    return <Loading />;
  }
  return (
    <div>
      <h3>申請中的專案</h3>
      {requestCats ? (
        <AdoptingCardList currentCats={requestCats} />
      ) : (
        <p>尚未申請任何專案</p>
      )}
    </div>
  );
}
