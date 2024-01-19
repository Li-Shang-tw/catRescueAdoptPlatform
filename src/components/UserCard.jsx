import Avatar from "@mui/material/Avatar";
import CastleIcon from "@mui/icons-material/Castle";
import MedicationIcon from "@mui/icons-material/Medication";
import { getLoactionName } from "../composable/getLocationName";
import Button from "@mui/material/Button";

export default function UserCard({ currentUser, type, style }) {
  return (
    <>
      <div
        className={`border-2 px-10 py-4 rounded-xl bg-white font-medium flex ${style}`}
      >
        <div className="flex flex-col items-center">
          <Avatar
            alt={currentUser.name}
            src={currentUser.avatar}
            sx={{ width: 150, height: 150 }}
          />
          {type === "2" && (
            <div className="mt-5">
              <Button variant="contained">About</Button>
            </div>
          )}
        </div>
        <div>
          <p className="mb-2 text-xl">{currentUser.name}</p>
          <span className="mr-2 mb-1">
            {currentUser.role === "rescuer" ? "救援者" : "認養者"}
          </span>
          {currentUser.role === "rescuer" ? <MedicationIcon /> : <CastleIcon />}

          <p className="mb-1">{getLoactionName(currentUser.location)}</p>
          <p className="mb-1">{currentUser.email}</p>
          <div className="flex">
            <p className="mr-3">
              救援數:
              {currentUser.rescueProject ? currentUser.rescueProject.length : 0}
            </p>

            <p>
              認養數:
              {currentUser.adoptProject ? currentUser.adoptProject.length : 0}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
