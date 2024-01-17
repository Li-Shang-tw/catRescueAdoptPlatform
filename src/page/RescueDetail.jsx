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
    <div className="px-5 ">
      <Carousel />

      <div className="flex  justify-between  mx-auto md:9/12  lg:w-10/12 mb-5">
        <CardDetail
          rescueProject={rescueProject}
          handleUpdatRescueCat={handleUpdatRescueCat}
          currentUserId={currentUserId}
          style="w-5/12"
        />

        <UserCard
          currentUser={resucer}
          type="2"
          style="w-6/12 justify-between"
        />
      </div>
      <div className="lg:w-10/12  md:9/12 mx-auto">
        <ProgressCard
          rescueProject={rescueProject}
          handleUpdatRescueCat={handleUpdatRescueCat}
        />
      </div>
      <div className="my-4 w-9/12 mx-auto">
        <ListOfDonater rescueProject={rescueProject} />
      </div>
    </div>
  );
}
