import { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { getUserAPI } from "../callAPI";
export const useCheckLogin = () => {
  //取得userContext的user
  const userData = useContext(CurrentUserContext);
  const { currentUser, setCurrentUser } = userData;
  //使用router的hook
  const navigate = useNavigate();
  let location = useLocation();

  //先取得cookie中的id
  const id = document.cookie
    .split("; ")
    .find((row) => row.startsWith("id="))
    ?.split("=")[1];

  //如果目前沒有登入者資料，取得user資料
  useEffect(() => {
    async function checkLogin() {
      //檢查cookie中是否有id:是否登入
      if (id) {
        //檢查是否有currentUser，沒有的話就取得user資料
        if (!currentUser) {
          const user = await getUserAPI(id);
          setCurrentUser(user);
        }
      } else {
        //檢查當前的路徑是否為userProfile，是的話就導向登入頁
        if (location.pathname.startsWith("/user")) {
          navigate("/signIn");
        }
      }
    }
    checkLogin();
  }, [id, currentUser, location]);
};
