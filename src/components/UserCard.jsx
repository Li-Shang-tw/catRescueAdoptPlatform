import Avatar from "@mui/material/Avatar";
import CastleIcon from "@mui/icons-material/Castle";
import MedicationIcon from "@mui/icons-material/Medication";
import { getLoactionName } from "../composable/getLocationName";
import Button from "@mui/material/Button";
import Loading from "./Loading";
import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

export default function UserCard({ user, type, style, projectId }) {
  const { currentUser } = useContext(CurrentUserContext);

  function ApproveBtn() {
    //如果是專案的擁有者的話
    console.log(currentUser);
    console.log(projectId);
    if (currentUser.adoptProject.includes(projectId)) {
      return <Button variant="contained">核准</Button>;
    }
  }
  //如果尚未有資料的話
  if (user === null) {
    return <Loading />;
  } else if (!user) {
    return <p>暫時沒有用戶資料</p>;
  }
  return (
    <>
      <div
        className={`border-2 px-10 py-4 rounded-xl bg-white font-medium flex ${style}`}
      >
        <div className="flex flex-col items-center">
          <Avatar
            alt={user.name}
            src={user.avatar}
            sx={{ width: 150, height: 150 }}
          />
          {type === "2" && (
            <div className="mt-5">
              <Button variant="contained">About</Button>
            </div>
          )}
        </div>
        <div>
          <p className="mb-2 text-xl">{user.name}</p>
          <span className="mr-2 mb-1">
            {user.role === "rescuer" ? "救援者" : "認養者"}
          </span>
          {user.role === "rescuer" ? <MedicationIcon /> : <CastleIcon />}

          <p className="mb-1">{getLoactionName(user.location)}</p>
          <p className="mb-1">{user.email}</p>
        </div>
        {type === "3" && ApproveBtn()}
      </div>
    </>
  );
}
