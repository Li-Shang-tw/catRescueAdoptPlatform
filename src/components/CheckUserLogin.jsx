import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { getUserAPI } from "../callAPI";
export default function CheckUserLogin() {
  //取得userContext的user
  const userData = useContext(CurrentUserContext);
  const { currentUser, setCurrentUser } = userData;
  //先取得cookie中的id
  const id = document.cookie
    .split("; ")
    .find((row) => row.startsWith("id="))
    ?.split("=")[1];

  //如果目前沒有登入者資料，取得user資料
  useEffect(() => {
    const getUser = async () => {
      //如果cookie中有id
      if (id) {
        const user = await getUserAPI(id);
        setCurrentUser(user);
      }
    };
    //如果目前沒有登入者資料

    console.log(currentUser);
    if (!currentUser) {
      getUser();
    }
  });
  //使用useNavigate
  const navigate = useNavigate();

  //如果cookie中沒有id
  if (!id) {
    //導向登入頁面
    navigate("/signIn");
    return <></>;
  }
}
