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
    <div className="px-5 pb-5" style={{ backgroundColor: "#ffe9d2" }}>
      <Carousel image={adoptProject.image} />
      <div className=" w-11/12  mx-auto">
        <div className=" flex flex-col md:flex-row   justify-between mb-7 ">
          <AdoptCardDetail
            adoptProject={adoptProject}
            updateAdoptProject={updateAdoptProject}
            currentUser={currentUser}
            style="  w-full md:w-6/12 mr-10  mb-5 md:mb-0 lg:mr-0 lg:w-5/12"
          />

          <UserCard
            user={resucer}
            type="2"
            style=" w-full md:w-6/12 lg:w-5/12 flex flex-col sm:flex-row p-4 items-center justify-between"
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
          <div>
            <h2 className="font-bold text-4xl mb-5">領養者</h2>
            <UserCard
              user={adopter}
              type="2"
              project={adoptProject}
              style="  w-full justify-evenly flex flex-col sm:flex-row p-4 items-center justify-between"
            />
          </div>
        )}
      </div>
    </div>
  );
}
