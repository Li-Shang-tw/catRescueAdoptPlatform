import Chip from "@mui/material/Chip";

//引用composable
import { getLoactionName } from "../composable/getLocationName";
import interpretAgeCategory from "../composable/interpretAgeCatergory";
//引用元件
import ModalSet from "./ModalSet";

import EditBtn from "./EditBtn";

export default function AdoptCardDetail({
  adoptProject,
  updateAdoptProject,
  currentUser,
}) {
  return (
    <div className="shadow  rounded-xl px-3 py-4 bg-white">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold  mb-2">
          {adoptProject.name ? adoptProject.name : "待救援的貓貓"}
        </h2>
        {currentUser && adoptProject.rescuerId === currentUser.id && (
          <ModalSet btn={<EditBtn>編輯</EditBtn>} />
        )}
        {currentUser &&
          adoptProject.rescuerId !== currentUser.id &&
          currentUser.role === "adopter" && <EditBtn>認養</EditBtn>}
      </div>
      <div className="flex justify-start mb-3">
        <h4 className="mr-4">{getLoactionName(adoptProject.location)}</h4>
        <h4>{interpretAgeCategory(adoptProject.ageCategory)}</h4>
      </div>
      <div>
        <div>
          <p className="mb-2">品種: {adoptProject.breed}</p>
          <p className="mb-2">性別: {adoptProject.gender}</p>
          <p className="mb-2">健康狀況: {adoptProject.health}</p>
        </div>
        <div className="flex justify-between">
          <p>{adoptProject.cta}</p>
        </div>
      </div>
    </div>
  );
}
