import { NavLink } from "react-router-dom";
//component
import CardService from "./CardService";
//image
import fundraiseImage from "../assets/imgs/fundraise.jpg";
import adoptImage from "../assets/imgs/adoptImage.jpg";
//mui
import Button from "@mui/material/Button";
export default function Service() {
  return (
    <div
      className="w-full flex  flex-col items-center pb-10"
      style={{ backgroundColor: "#ffdb7d" }}
    >
      <h2 className=" md:text-5xl  text-4xl font-bold  py-8 ">Service</h2>
      <div className="flex flex-col items-center sm:flex-row sm:justify-between w-11/12 ">
        <CardService
          title="募款"
          image={fundraiseImage}
          style="w-10/12 sm:w-5/12 mb-5 sm:mb-0"
        >
          <p className="xl:text-2xl lg:text-xl text-base p-4">
            你可以找到需要醫療的貓咪
          </p>
          <Button variant="contained">
            <NavLink to="/rescue">看更多</NavLink>
          </Button>
        </CardService>
        <CardService title="認養" image={adoptImage} style="w-10/12 sm:w-5/12">
          <p className="xl:text-2xl lg:text-xl text-base p-4">
            你可以找到可以認養的貓咪
          </p>
          <Button variant="contained">
            <NavLink to="/adopt">看更多</NavLink>
          </Button>
        </CardService>
      </div>
    </div>
  );
}
