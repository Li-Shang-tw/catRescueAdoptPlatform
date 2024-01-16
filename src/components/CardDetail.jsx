import Chip from "@mui/material/Chip";

//引用composable
import { getLoactionName } from "../composable/getLocationName";
import interpretAgeCategory from "../composable/interpretAgeCatergory";
//引用元件
import ModalSet from "./ModalSet";
import FormForRescue from "./FormForRescue";
import EditBtn from "./EditBtn";

export default function RescueDetail({
  rescueProject,
  handleUpdatRescueCat,
  currentUserId,
}) {
  return (
    <div className="shadow  rounded-xl px-3 py-4 bg-white">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold  mb-2">
          {rescueProject.name ? rescueProject.name : "待救援的貓貓"}
        </h2>
        {rescueProject.rescuerId === currentUserId && (
          <ModalSet
            btn={<EditBtn>編輯</EditBtn>}
            form={
              <FormForRescue
                type="edit"
                rescueProject={rescueProject}
                handleUpdatRescueCat={handleUpdatRescueCat}
              />
            }
          />
        )}
      </div>
      <div className="flex justify-start mb-3">
        <h4 className="mr-4">{getLoactionName(rescueProject.location)}</h4>
        <h4>{interpretAgeCategory(rescueProject.ageCategory)}</h4>
      </div>
      <div>
        <div className="flex items-baseline mb-3">
          <div className="mr-1">
            {rescueProject.riskLevel === "3" && (
              <Chip label="高" color="error" />
            )}
            {rescueProject.riskLevel === "2" && (
              <Chip label="中" color="warning" />
            )}
            {rescueProject.riskLevel === "1" && (
              <Chip label="低" color="success" />
            )}
            {rescueProject.riskLevel === "" && <Chip label="未分類" />}
          </div>
          <p className="mb-5">{rescueProject.symptoms}</p>
        </div>
        <div className="flex justify-between">
          <p>{rescueProject.cta}</p>
        </div>
      </div>
    </div>
  );
}
