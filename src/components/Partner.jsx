//component
import CardPartner from "./CardPartner";
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
      <h2 className="xl:text-5xl md:text-4xl  text-3xl font-bold  py-8 ">
        合作醫院
      </h2>
      <div className="flex  flex-col sm:flex-row  sm:justify-between w-9/12 ">
        <CardPartner
          image={CatShelterImage}
          style="w-full sm:w-3/12 sm:mb-0 mb-5"
        />
        <CardPartner image={catClinic} style="w-full sm:w-3/12 sm:mb-0 mb-5" />
        <CardPartner image={catDoctor} style="w-full sm:w-3/12 sm:mb-0 mb-5" />
      </div>
    </div>
  );
}
