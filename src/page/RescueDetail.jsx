import { useParams } from "react-router-dom";
//先引入資料
import rescurData from "../assets/rescueData.json";

//載入元件
import Carousel from "../components/Carousel";
import CardDetail from "../components/CardDetail";
import CardRescuer from "../components/CardRescuer";
export default function RescueDetail() {
  //取得id,並轉成數字
  const { id } = useParams();

  //找出符合路徑id的資料
  //id是字串，要轉成數字
  const rescueProject = rescurData.find((item) => item.id === parseInt(id));

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
