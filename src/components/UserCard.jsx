import Avatar from "@mui/material/Avatar";
import CastleIcon from "@mui/icons-material/Castle";
import MedicationIcon from "@mui/icons-material/Medication";
import { getLoactionName } from "../composable/getLocationName";
import Button from "@mui/material/Button";
import Loading from "./Loading";
import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { putCatAPI, getUserAPI, putUserAPI } from "../callAPI";

export default function UserCard({
  user,
  type,
  style,
  project,
  setAdoptProject,
}) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const projectId = project && project.id;
  async function approveRequest() {
    //更改project state 4，requestingUsers清空
    await putCatAPI(projectId, { state: "4", requestingUsers: [] });
    //更新project的狀態
    const newProject = { ...project, state: "4", requestingUsers: [] };
    setAdoptProject(newProject);
    //將project id 加入user.petProject
    //取得收養者的資料
    const adopter = await getUserAPI(user.id);
    //準備更新收養者的資料
    const updateAdopter = {};
    //將project id 加入user.petProject
    const petProject = adopter.petProject.includes(projectId)
      ? [...adopter.petProject]
      : [...adopter.petProject, projectId];

    updateAdopter.petProject = petProject;
    //將project id 從 requestingProject移除
    const requestingProject = adopter.requestingProject.filter(
      (id) => id !== projectId
    );
    updateAdopter.requestingProject = requestingProject;
    await putUserAPI(adopter.id, updateAdopter);
    //準備更新擁有者的資料
    const updateOwner = {};
    //將project id 從adoptProject移除
    const adoptProject = currentUser.adoptProject.filter(
      (id) => id !== projectId
    );
    updateOwner.adoptProject = adoptProject;
    //將project id 加入adoptHistory

    const adoptHistory = currentUser.adoptHistory
      ? [...currentUser.adoptHistory, projectId]
      : [projectId];
    updateOwner.adoptedHistory = adoptHistory;
    //更新資料庫
    await putUserAPI(currentUser.id, updateOwner);
    //更新context
    setCurrentUser({
      ...currentUser,
      adoptProject: adoptProject,
      adoptHistory: adoptHistory,
    });
    alert("已核准");
  }
  function ApproveBtn() {
    //如果是專案的擁有者的話
    if (currentUser && currentUser.adoptProject.includes(projectId)) {
      return (
        <Button variant="contained" onClick={approveRequest}>
          核准
        </Button>
      );
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
