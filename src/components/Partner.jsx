//component
import CardService from "./CardService";
//image
import CatShelterImage from "../assets/imgs/catShelter.png";
import catClinic from "../assets/imgs/catClinic.png";
import catDoctor from "../assets/imgs/catDoctor.png";

export default function Partner() {
  return (
    <div
      className="w-full flex  flex-col items-center pb-10"
      style={{ backgroundColor: "#ffe9d2" }}
    >
      <h2 className="text-5xl font-bold  py-8 ">合作醫院</h2>
      <div className="flex  justify-between w-9/12 ">
        <CardService
          title="Cat Shelter"
          image={CatShelterImage}
          style="w-3/12"
        ></CardService>
        <CardService
          title="Cat Clinic"
          image={catClinic}
          style="w-3/12"
        ></CardService>
        <CardService
          title="Cat Doctor"
          image={catDoctor}
          style="w-3/12"
        ></CardService>
      </div>
    </div>
  );
}
