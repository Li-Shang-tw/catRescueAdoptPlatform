import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
//先引入資料
import { getCatAPI, getUserAPI } from "../callAPI";
//載入current user的資料
import { CurrentUserContext } from "../context/CurrentUserContext";
//載入元件
import Carousel from "../components/Carousel";
import AdoptCardDetail from "../components/AdoptCardDetail";
import UserCard from "../components/UserCard";
import RequestUsersList from "../components/RequestUsersList";
//先帶入假資料
import rescuerData from "../assets/recuerData.json";

export default function AdoptDetail() {
  //先設定rescueProject的state
  const [adoptProject, setAdoptProject] = useState({});
  const [resucer, setRescuer] = useState(rescuerData[0]);

  //取得current user的資料
  const { currentUser } = useContext(CurrentUserContext);

  //取得id
  const { id } = useParams();
  //用useEffect來呼叫API
  useEffect(() => {
    const fetchData = async () => {
      const catData = await getCatAPI(id);
      setAdoptProject(catData);
      const userData = await getUserAPI(catData.rescuerId);
      setRescuer(userData);
    };
    fetchData();
  }, []);

  function updateAdoptProject(feature) {
    //取得原本的rescueProject，整合更新的feature成新的rescueProject
    setAdoptProject({ ...adoptProject, ...feature });
  }
  return (
    <div className="px-5">
      <Carousel />
      <div className="flex  flex-col items-center mb-4">
        <div className="flex justify-between w-9/12">
          <div className="w-5/12 ">
            <AdoptCardDetail
              adoptProject={adoptProject}
              updateAdoptProject={updateAdoptProject}
              currentUser={currentUser}
            />
          </div>
          <div className="w-5/12">
            <UserCard currentUser={resucer} type="2" />
          </div>
        </div>
      </div>
      {adoptProject.requestingUsers && (
        <RequestUsersList
          userList={adoptProject.requestingUsers}
          projectId={adoptProject.id}
        />
      )}
    </div>
  );
}
