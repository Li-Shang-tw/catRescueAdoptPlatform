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
      <h2 className="xl:text-5xl md:text-4xl  text-3xl font-bold p-8 ">
        Choose Your Role
      </h2>
      <div className="flex flex-col items-center sm:flex-row sm:justify-between w-11/12  ">
        <CardService
          title="募款"
          image={resucerImage}
          style="w-10/12 sm:w-5/12 mb-5 sm:mb-0"
        >
          <p className="xl:text-2xl lg:text-xl text-base p-4">
            成為救援者，你可以發起募款、收養專案
          </p>
          <Button variant="contained">
            <NavLink to="/signUp">註冊帳號</NavLink>
          </Button>
        </CardService>
        <CardService
          title="募款"
          image={adoptImage}
          style="w-10/12 sm:w-5/12 mb-5 sm:mb-0"
        >
          <p className="xl:text-2xl lg:text-xl text-base p-4">
            成為收養者，你可以收養喜歡的貓咪
          </p>
          <Button variant="contained">
            <NavLink to="/signUp">註冊帳號</NavLink>
          </Button>
        </CardService>
      </div>
    </div>
  );
}
