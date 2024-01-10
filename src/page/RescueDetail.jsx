import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//先引入資料
import { getCatAPI } from "../callAPI";
//載入元件
import Carousel from "../components/Carousel";
import CardDetail from "../components/CardDetail";
import CardRescuer from "../components/CardRescuer";
export default function RescueDetail() {
  //先設定rescueProject的state
  const [rescueProject, setRescueProject] = useState({});
  //取得id
  const { id } = useParams();
  //用useEffect來呼叫API
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCatAPI(id);
      setRescueProject(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Carousel />
      <div className="flex justify-between ">
        <div className="w-8/12 ">
          <CardDetail rescueProject={rescueProject} />
        </div>
        <div className="w-3/12">
          <CardRescuer id={id} />
        </div>
      </div>
    </div>
  );
}
