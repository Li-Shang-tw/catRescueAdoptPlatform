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
      //如果尚未有申請中的專案，就不用發請求
      if (currentUser.requestingProject.length === 0) {
        setRequestCats([]);
        return;
      }
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
      <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-10">
        申請中的專案
      </h3>
      {requestCats.length === 0 && <p>尚未有申請中的專案</p>}
      {requestCats && <AdoptingCardList currentData={requestCats} />}
    </div>
  );
}
