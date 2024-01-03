import { useParams } from "react-router-dom";
//先引入資料
// import rescurData from "../assets/rescueData.json";

export default function RescueDetail() {
  const { id } = useParams();
  // const rescueProject = rescurData.find((item) => item.id === id);
  // console.log(rescueProject);
  return (
    <div>
      <h1>RescueDetail{id}</h1>
    </div>
  );
}
