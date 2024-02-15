import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import CastleIcon from "@mui/icons-material/Castle";
import MedicationIcon from "@mui/icons-material/Medication";
const actions = [
  { icon: <MedicationIcon />, name: "募資專案" },
  { icon: <CastleIcon />, name: "送養專案" },
];
export default function AddWidget() {
  return (
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
  );
}
