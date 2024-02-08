import Avatar from "@mui/material/Avatar";
import CastleIcon from "@mui/icons-material/Castle";
import MedicationIcon from "@mui/icons-material/Medication";
import { getLoactionName } from "../composable/getLocationName";
import Button from "@mui/material/Button";
import Loading from "./Loading";
import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { putCatAPI, getUserAPI, putUserAPI } from "../callAPI";
import CardOutline from "./CardOutline";
export default function UserCard({
  user,
  type,
  style,
  project,
  setAdoptProject,
  handleApprove,
}) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const projectId = project && project.id;
  async function approveRequest() {
    //更改project state 4，requestingUsers清空
    await putCatAPI(projectId, {
      state: "4",
      requestingUsers: [],
      adoptId: user.id,
    });
    //更新project的狀態
    const newProject = {
      ...project,
      state: "4",
      requestingUsers: [],
      adoptId: user.id,
    };
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
    handleApprove();
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
    return <></>;
  }
  return (
    <CardOutline style={style}>
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
      <div className="text-center flex flex-col">
        <p className="mb-2 text-2xl font-bold">{user.name}</p>
        <div>
          <span className="mr-2 mb-1">
            {user.role === "rescuer" ? "救援者" : "認養者"}
          </span>
          {user.role === "rescuer" ? <MedicationIcon /> : <CastleIcon />}
        </div>
        <p className="mb-1">{getLoactionName(user.location)}</p>
        <p className="mb-1">{user.email}</p>

        {type === "3" && ApproveBtn()}
      </div>
    </CardOutline>
  );
}
