import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
//先引入資料
import { getCatAPI, getUserAPI } from "../callAPI";
//載入current user的資料
import { CurrentUserContext } from "../context/CurrentUserContext";
//載入元件
import Carousel from "../components/Carousel";
import CardDetail from "../components/CardDetail";
import UserCard from "../components/UserCard";
import ProgressCard from "../components/ProgressCard";
import ListOfDonater from "../components/ListOfDonater";
//先帶入假資料
import rescuerData from "../assets/recuerData.json";

export default function RescueDetail() {
  //先設定rescueProject的state
  const [rescueProject, setRescueProject] = useState({});
  const [resucer, setRescuer] = useState(rescuerData[0]);

  //取得current user的資料
  const { currentUser } = useContext(CurrentUserContext);
  const currentUserId = currentUser.id;

  //取得id
  const { id } = useParams();
  //用useEffect來呼叫API
  useEffect(() => {
    const fetchData = async () => {
      const catData = await getCatAPI(id);
      setRescueProject(catData);
      const userData = await getUserAPI(catData.rescuerId);
      setRescuer(userData);
    };
    fetchData();
  }, []);

  function handleUpdatRescueCat(feature) {
    //取得原本的rescueProject，整合更新的feature成新的rescueProject
    setRescueProject({ ...rescueProject, ...feature });
  }
  return (
    <div className="px-5">
      <Carousel />
      <div className="flex justify-center mb-4">
        <div className="flex justify-between w-9/12">
          <div className="w-5/12 ">
            <CardDetail
              rescueProject={rescueProject}
              handleUpdatRescueCat={handleUpdatRescueCat}
              currentUserId={currentUserId}
            />
          </div>
          <div className="w-5/12">
            <UserCard currentUser={resucer} type="2" />
          </div>
        </div>
      </div>
      <div className="w-9/12 mx-auto">
        <ProgressCard rescueProject={rescueProject} />
      </div>
      <div className="my-4 w-9/12 mx-auto">
        <ListOfDonater rescueProject={rescueProject} />
      </div>
    </div>
  );
}
