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
      className="w-full flex  flex-col items-center pb-5"
      style={{ backgroundColor: "#ffdb7d" }}
    >
      <h2 className="text-5xl font-bold p-8 ">Service</h2>
      <div className="flex w-full justify-around ">
        <CardService title="募款" image={fundraiseImage}>
          <p className="text-2xl p-8">你可以找到需要醫療的貓咪</p>
          <Button variant="contained">
            <NavLink to="/rescue">看更多</NavLink>
          </Button>
        </CardService>
        <CardService title="認養" image={adoptImage}>
          <p className="text-2xl p-8">你可以找到可以認養的貓咪</p>
          <Button variant="contained">
            <NavLink to="/adopt">看更多</NavLink>
          </Button>
        </CardService>
      </div>
    </div>
  );
}
