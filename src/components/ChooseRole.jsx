//component
import { NavLink } from "react-router-dom";
//component
import CardService from "./CardService";
//image
import resucerImage from "../assets/imgs/救援者.jpg";
import adoptImage from "../assets/imgs/收容者.jpg";
//mui
import Button from "@mui/material/Button";

export default function ChooseRole() {
  return (
    <div className="w-full flex  flex-col items-center pb-5">
      <h2 className="text-5xl font-bold p-8 ">Choose Your Role</h2>
      <div className="flex  justify-between w-9/12 ">
        <CardService title="募款" image={resucerImage}>
          <p className="text-2xl p-4">成為救援者，你可以發起募款、收養專案</p>
          <Button variant="contained">
            <NavLink to="/signUp">註冊帳號</NavLink>
          </Button>
        </CardService>
        <CardService title="募款" image={adoptImage}>
          <p className="text-2xl p-4">成為收養者，你可以收養喜歡的貓咪</p>
          <Button variant="contained">
            <NavLink to="/signUp">註冊帳號</NavLink>
          </Button>
        </CardService>
      </div>
    </div>
  );
}
