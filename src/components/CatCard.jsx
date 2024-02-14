import { Link } from "react-router-dom";
import { getLoactionName } from "../composable/getLocationName";
import interpretAgeCatergory from "../composable/interpretAgeCatergory";
import CardOutline from "./CardOutline";
import Chip from "@mui/material/Chip";
export default function Card({ item, type }) {
  return (
    <CardOutline style="duration-500 hover:scale-110">
      <Link to={`/${type}/${item.id}`}>
        <div className="flex flex-col items-center ">
          <img
            className=" mb-2.5 rounded-b-sm"
            src={item.image ? item.image : "/src/assets/imgs/rescuephoto2.jpg"}
            alt="rescueImg"
          />

          <div className="my-5 flex flex-col items-center">
            <h3 className="mb-px font-bold text-2xl">
              {item.name ? item.name : "可愛的貓貓"}
            </h3>
            <div>
              <span className="mb-px mr-2.5">
                {interpretAgeCatergory(item.ageCategory)}
              </span>
              {type === "adopt" ? (
                <span className="mb-px">{item.breed}</span>
              ) : (
                <span>{getLoactionName(item.location)}</span>
              )}
            </div>
            {type === "adopt" && (
              <div className="flex items-baseline mt-1">
                <p>{getLoactionName(item.location)}</p>
              </div>
            )}

            {type === "rescue" && (
              <div className="flex items-baseline mt-1">
                <div className="mr-1">
                  {item.riskLevel === "3" && <Chip label="高" color="error" />}
                  {item.riskLevel === "2" && (
                    <Chip label="中" color="warning" />
                  )}
                  {item.riskLevel === "1" && (
                    <Chip label="低" color="success" />
                  )}
                  {item.riskLevel === "" && <Chip label="未分類" />}
                </div>
                <p className="mb-5">{item.symptoms}</p>
              </div>
            )}
          </div>
        </div>
      </Link>
    </CardOutline>
  );
}
