import Chip from "@mui/material/Chip";

//引用composable
import { getLoactionName } from "../composable/getLocationName";
import interpretAgeCategory from "../composable/interpretAgeCatergory";
//引用api
import { putCatAPI, putUserAPI } from "../callAPI";
//取的當前使用者
import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

//引用元件
import ModalSet from "./ModalSet";
import EditBtn from "./EditBtn";

export default function AdoptCardDetail({ adoptProject, updateAdoptProject }) {
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
    } else {
      return (
        <div onClick={() => requestAdopt(adoptProject.id)}>
          <EditBtn>認養</EditBtn>
        </div>
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
    <div className="shadow  rounded-xl px-3 py-4 bg-white">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold  mb-2">
          {adoptProject.name ? adoptProject.name : "待救援的貓貓"}
        </h2>
        {currentUser && adoptProject.rescuerId === currentUser.id && (
          <ModalSet btn={<EditBtn>編輯</EditBtn>} />
        )}
        {currentUser &&
          adoptProject.rescuerId !== currentUser.id &&
          currentUser.role === "adopter" && <AdoptBtn id={adoptProject.id} />}
      </div>
      <div className="flex justify-start mb-3">
        <h4 className="mr-4">{getLoactionName(adoptProject.location)}</h4>
        <h4>{interpretAgeCategory(adoptProject.ageCategory)}</h4>
      </div>
      <div>
        <div>
          <p className="mb-2">品種: {adoptProject.breed}</p>
          <p className="mb-2">性別: {adoptProject.gender}</p>
          <p className="mb-2">健康狀況: {adoptProject.health}</p>
        </div>
        <div className="flex justify-between">
          <p>{adoptProject.cta}</p>
        </div>
      </div>
    </div>
  );
}
