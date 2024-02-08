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
  const [adopter, setAdopter] = useState(null);

  //取得current user的資料
  const { currentUser } = useContext(CurrentUserContext);
  console.log("render");
  //取得id
  const { id } = useParams();
  //用useEffect來呼叫API
  useEffect(() => {
    const fetchData = async () => {
      const catData = await getCatAPI(id);
      setAdoptProject(catData);
      const userData = await getUserAPI(catData.rescuerId);
      setRescuer(userData);
      //取得收養者的資料

      if (catData.state === "4") {
        const adopter = await getUserAPI(catData.adoptId);
        console.log(adopter);
        setAdopter(adopter);
      }
    };
    fetchData();
  }, [id]);
  // console.log(adoptProject);
  function updateAdoptProject(feature) {
    //取得原本的rescueProject，整合更新的feature成新的rescueProject
    setAdoptProject({ ...adoptProject, ...feature });
  }
  return (
    <div className="px-5" style={{ backgroundColor: "#ffe9d2" }}>
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
            <UserCard
              user={resucer}
              type="2"
              style="flex p-4 items-center justify-between"
            />
          </div>
        </div>
      </div>

      {adoptProject.requestingUsers &&
        adoptProject.requestingUsers.length !== 0 && (
          <RequestUsersList
            userList={adoptProject.requestingUsers}
            project={adoptProject}
            setAdoptProject={setAdoptProject}
          />
        )}
      {adoptProject.state === "4" && adopter && (
        <div className="flex justify-center">
          <div className="w-1/2">
            <UserCard user={adopter} type="3" project={adoptProject} />
          </div>
        </div>
      )}
    </div>
  );
}
