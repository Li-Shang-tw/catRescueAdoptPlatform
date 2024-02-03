import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";
import { getLoactionName } from "../composable/getLocationName";
import interpretAgeCatergory from "../composable/interpretAgeCatergory";
import Loading from "./Loading";

export default function Card({ currentCats }) {
  if (currentCats === null) {
    return <Loading />;
  } else if (!currentCats) {
    return <p>暫時沒有救援貓貓的專案</p>;
  }

  const cardsList = currentCats.map((item) => (
    <li
      key={item.id}
      className=" shadow  rounded-xl duration-100 hover:scale-110  hover:shadow-lg bg-white"
    >
      <Link to={`/rescue/${item.id}`}>
        <div className="relative">
          <img
            className="rounded-md rounded-b-3xl mb-2.5 "
            src={item.image ? item.image : "/src/assets/imgs/rescuephoto2.jpg"}
            alt="rescueImg"
          />
        </div>
        <div className="mx-1.5">
          <h3 className="mb-px font-bold text-lg">
            {item.name ? item.name : "待救援的貓貓"}
          </h3>
          <div>
            <span className="mb-px mr-2.5">
              {interpretAgeCatergory(item.ageCategory)}
            </span>
            <span className="mb-px">{getLoactionName(item.location)}</span>
          </div>
          <div className="flex items-baseline mt-1">
            <div className="mr-1">
              {item.riskLevel === "3" && <Chip label="高" color="error" />}
              {item.riskLevel === "2" && <Chip label="中" color="warning" />}
              {item.riskLevel === "1" && <Chip label="低" color="success" />}
              {item.riskLevel === "" && <Chip label="未分類" />}
            </div>
            <p className="mb-5">{item.symptoms}</p>
          </div>
        </div>
      </Link>
    </li>
  ));
  return (
    <>
      <ul className="grid  gap-4 lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-2 mb-4">
        {cardsList}
      </ul>
    </>
  );
}
