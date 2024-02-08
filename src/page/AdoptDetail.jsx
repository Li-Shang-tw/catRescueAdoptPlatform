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
  const [isApproved, setIsApproved] = useState(false);

  function handleApprove() {
    setIsApproved(true);
  }
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

      if (catData.state === "4" || isApproved) {
        const adopter = await getUserAPI(catData.adoptId);
        console.log("GET");
        setAdopter(adopter);
      }
    };
    fetchData();
  }, [id, isApproved]);
  // console.log(adoptProject);
  function updateAdoptProject(feature) {
    //取得原本的rescueProject，整合更新的feature成新的rescueProject
    setAdoptProject({ ...adoptProject, ...feature });
  }
  return (
    <div className="px-5" style={{ backgroundColor: "#ffe9d2" }}>
      <Carousel />
      <div className="w-10/12 mx-auto pb-4">
        <div className="flex justify-between mb-7">
          <AdoptCardDetail
            adoptProject={adoptProject}
            updateAdoptProject={updateAdoptProject}
            currentUser={currentUser}
            style="w-5/12"
          />

          <UserCard
            user={resucer}
            type="2"
            style=" w-5/12 flex p-4 items-center justify-between"
          />
        </div>

        {adoptProject.requestingUsers &&
          adoptProject.requestingUsers.length !== 0 && (
            <RequestUsersList
              userList={adoptProject.requestingUsers}
              project={adoptProject}
              setAdoptProject={setAdoptProject}
              handleApprove={handleApprove}
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
    </div>
  );
}
