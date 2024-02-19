import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import Button from "@mui/material/Button";

//引用composable
import { getLoactionName } from "../composable/getLocationName";
import interpretAgeCategory from "../composable/interpretAgeCatergory";
import interpretGender from "../composable/interpretGender";
import formatTime from "../composable/formatTime";
//引用api
import { putCatAPI, putUserAPI } from "../callAPI";
//取的當前使用者
import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

//引用元件
import ModalSet from "./ModalSet";
import CardOutline from "./CardOutline";
import FormForAdopt from "./FormForAdopt";

export default function AdoptCardDetail({
  adoptProject,
  updateAdoptProject,
  style,
}) {
  //取得當前用戶
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  function AdoptBtn(id) {
    if (
      adoptProject.requestingUsers &&
      adoptProject.requestingUsers.includes(currentUser.id)
    ) {
      return (
        <div>
          <Chip label="已送出認養申請" variant="outlined" color="success" />
        </div>
      );
    } else if (adoptProject.state === "3") {
      return (
        
          <Button
            variant="contained"
            onClick={() => requestAdopt(adoptProject.id)}
          >
            認養
          </Button>
       
      );
    } else if (adoptProject.state === "4") {
      return (
        <Chip
          label="家貓 "
          variant="filled"
          color="primary"
          icon={<FaceIcon />}
        />
      );
    }
  }
  async function requestAdopt(id) {
    //在cat資料上的requestAdopt加入currentUser的id
    await putCatAPI(id, {
      requestingUsers: [...adoptProject.requestingUsers, currentUser.id],
    });
    //更新adoptProject
    updateAdoptProject({
      requestingUsers: [...adoptProject.requestingUsers, currentUser.id],
    });
    //在user資料上的requestAdopt加入cat的id
    await putUserAPI(currentUser.id, {
      requestingProject: [...currentUser.requestingProject, id],
    });
    //更新currentUser
    setCurrentUser({
      ...currentUser,
      requestingProject: [...currentUser.requestingProject, id],
    });

    alert("已送出認養申請");
  }
  return (
    <CardOutline style={`px-5 py-4 ${style}`}>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold  mb-2">
          {adoptProject.name ? adoptProject.name : "待救援的貓貓"}
        </h2>
        {adoptProject.rescuerId === currentUser?.id &&
          adoptProject.state === "3" && (
            <ModalSet
              btn={<EditBtn>編輯</EditBtn>}
              form={
                <FormForAdopt
                  adoptProject={adoptProject}
                  updateAdoptProject={updateAdoptProject}
                />
              }
            />
          )}
        {adoptProject.rescuerId !== currentUser?.id &&
          currentUser?.role === "adopter" && <AdoptBtn id={adoptProject.id} />}
      </div>
      <div className="flex justify-start mb-3">
        <h4 className="mr-4">{getLoactionName(adoptProject.location)}</h4>
        <h4>{interpretAgeCategory(adoptProject.ageCategory)}</h4>
      </div>
      <div>
        <div>
          <p className="mb-2">品種: {adoptProject.breed}</p>
          <p className="mb-2">性別: {interpretGender(adoptProject.gender)}</p>
          <p className="mb-2">健康狀況: {adoptProject.health}</p>
          <p className="mb-3">{adoptProject.cta}</p>
        </div>

        <div className="flex">
          {adoptProject.createdAt && (
            <p className="ml-auto ">{formatTime(adoptProject.createdAt)}</p>
          )}
        </div>
      </div>
    </CardOutline>
  );
}
