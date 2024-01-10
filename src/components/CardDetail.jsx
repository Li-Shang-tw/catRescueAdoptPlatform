import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";

export default function RescueDetail({ rescueProject }) {
  console.log(rescueProject);
  return (
    <div className="shadow  rounded-xl px-3 py-4">
      <h2 className="text-2xl font-bold  mb-2">
        {rescueProject.name ? rescueProject.name : "待救援的貓貓"}
      </h2>
      <div className="flex justify-start mb-3">
        <h4>{rescueProject.location}</h4>
        <h4>{rescueProject.ageCategory}</h4>
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
          <p>{rescueProject.ctaRescue}</p>
          <Button
            variant="contained"
            color="warning"
            className="duration-100 hover:scale-110  hover:shadow-lg"
          >
            斗內
          </Button>
        </div>
      </div>
    </div>
  );
}
