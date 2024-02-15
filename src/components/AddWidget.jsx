import { useContext } from "react";
//----context
import { CurrentUserContext } from "../context/CurrentUserContext";

import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
//icon
import CastleIcon from "@mui/icons-material/Castle";
import MedicationIcon from "@mui/icons-material/Medication";
//modal
import FormForRescue from "./FormForRescue";
import FormForAdopt from "./FormForAdopt";
import ModalSet from "./ModalSet";

const actions = [
  {
    icon: <ModalSet btn={<MedicationIcon />} form={<FormForRescue />} />,
    name: "募資專案",
  },
  {
    icon: <ModalSet btn={<CastleIcon />} form={<FormForAdopt />} />,
    name: "送養專案",
  },
];
export default function AddWidget() {
  //---取得登入者資料-----
  const userData = useContext(CurrentUserContext);
  const { currentUser } = userData;
  return (
    currentUser?.role === "rescuer" && (
      <Box
        sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}
        className="fixed bottom-4 right-4"
      >
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Box>
    )
  );
}
