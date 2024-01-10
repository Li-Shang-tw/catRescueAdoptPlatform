import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//先引入資料
import { getCatAPI, getUserAPI } from "../callAPI";
//載入元件
import Carousel from "../components/Carousel";
import CardDetail from "../components/CardDetail";
import UserCard from "../components/UserCard";
//先帶入假資料
import rescuerData from "../assets/recuerData.json";
export default function RescueDetail() {
  //先設定rescueProject的state
  const [rescueProject, setRescueProject] = useState({});
  const [resucer, setRescuer] = useState(rescuerData[0]);

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
  return (
    <div className="px-5">
      <Carousel />
      <div className="flex justify-center">
        <div className="flex justify-between w-9/12">
          <div className="w-5/12 ">
            <CardDetail rescueProject={rescueProject} />
          </div>
          <div className="w-5/12">
            <UserCard currentUser={resucer} type="2" />
          </div>
        </div>
      </div>
    </div>
  );
}
