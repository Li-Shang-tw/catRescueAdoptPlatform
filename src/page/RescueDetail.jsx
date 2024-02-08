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

export default function RescueDetail() {
  //先設定rescueProject的state
  const [rescueProject, setRescueProject] = useState({});
  const [resucer, setRescuer] = useState({});

  //取得current user的資料
  const { currentUser } = useContext(CurrentUserContext);

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
  }, [id]);

  function handleUpdatRescueCat(feature) {
    //取得原本的rescueProject，整合更新的feature成新的rescueProject
    setRescueProject({ ...rescueProject, ...feature });
  }
  return (
    <div className="px-5" style={{ backgroundColor: "#ffe9d2" }}>
      <Carousel image={rescueProject.image} />
      <div className="w-10/12 mx-auto">
        <div className="flex justify-between mb-7 ">
          <CardDetail
            rescueProject={rescueProject}
            handleUpdatRescueCat={handleUpdatRescueCat}
            currentUserId={currentUser && currentUser.id}
            style="w-5/12"
          />

          <UserCard
            user={resucer}
            type="2"
            style="w-5/12  flex p-4 items-center justify-between"
          />
        </div>
        <div className="pb-4">
          <ProgressCard
            rescueProject={rescueProject}
            handleUpdatRescueCat={handleUpdatRescueCat}
          />

          <ListOfDonater rescueProject={rescueProject} />
        </div>
      </div>
    </div>
  );
}
