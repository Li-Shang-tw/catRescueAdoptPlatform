import Button from "@mui/material/Button";
import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { useNavigate } from "react-router-dom";
export default function LogOut() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  //使用useNavigate
  const navigate = useNavigate();
  function handleLogOut() {
    // //清空currentUser
    setCurrentUser(null);
    //清空cookie
    document.cookie = "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    alert("登出成功");
    //導向登入頁面
    navigate(`/signIn`);
  }
  return (
    <div className="text-center">
      <h4 className="font-bold mb-5">你確定要登出嗎?</h4>
      <Button variant="contained" color="error" onClick={handleLogOut}>
        <span className="font-semibold">登出</span>
      </Button>
    </div>
  );
}
