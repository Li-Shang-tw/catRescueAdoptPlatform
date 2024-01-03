import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

//載入rescuer資料
import rescuerData from "../assets/recuerData.json";

export default function CardRescuer({ id }) {
  const rescuer = rescuerData.find((user) =>
    user.rescueProjectsId.includes(parseInt(id))
  );
  console.log(rescuer.avatar);

  return (
    <div className=" shadow-lg  rounded-xl px-3 py-4">
      <div className="relative">
        <img
          className="rounded-md rounded-b-3xl mb-4 "
          src={
            rescuer.avatar ? rescuer.avatar : "src/assets/imgs/rescueAvatar.jpg"
          }
          alt="rescuerAvatar"
        />
      </div>
      <div className="mx-1.5">
        <h3 className="mb-4 font-bold text-lg">
          {rescuer.name ? rescuer.name : "不具名的救援者"}
        </h3>
        <div className="mb-4">
          <p className="mb-4">{rescuer.region}</p>
          <p>{rescuer.contactEmail}</p>
        </div>
        <div className="flex justify-center">
          <Link to={`/user/${id}`}>
            <Button variant="contained" color="warning">
              About
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
