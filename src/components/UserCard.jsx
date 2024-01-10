import Avatar from "@mui/material/Avatar";
import CastleIcon from "@mui/icons-material/Castle";
import MedicationIcon from "@mui/icons-material/Medication";
import { getLoactionName } from "../composable/getLocationName";
import Button from "@mui/material/Button";

export default function UserCard({ currentUser, type }) {
  return (
    <>
      <div className="border-2 px-10 py-4 rounded-xl bg-white font-medium ">
        <div className="flex justify-around">
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
            <div>
              <span className="mr-2 mb-1">
                {currentUser.role === "rescuer" ? "救援者" : "認養者"}
              </span>
              {currentUser.role === "rescuer" ? (
                <MedicationIcon />
              ) : (
                <CastleIcon />
              )}
            </div>
            <p className="mb-1">{getLoactionName(currentUser.location)}</p>
            <p className="mb-1">{currentUser.email}</p>
            <div className="flex">
              <p className="mr-3">救援數: {currentUser.rescueCats.length}</p>
              <p>認養數: {currentUser.adoptCats.length}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
