import { useState, useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";
import CastleIcon from "@mui/icons-material/Castle";
import MedicationIcon from "@mui/icons-material/Medication";
import PersonIcon from "@mui/icons-material/Person";

export default function TemporaryDrawer() {
  //---取得登入者資料-----
  const userData = useContext(CurrentUserContext);
  const { currentUser } = userData;
  //取得用戶名稱與路徑id
  function getUserNameLastWord() {
    if (currentUser) {
      const userName = currentUser.name;
      //用戶名稱只取最後一個字
      const userNameLastWord = userName.substr(userName.length - 1);
      return userNameLastWord;
    }
  }
  //----處理drawer---------
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className="w-60 px-4 py-3  h-full"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: "#ffdb7d" }}
    >
      <div className="  cursor-pointer rounded-full  hover:translate-x-3 hover:scale-y-110 hover:text-yellow-800  hover:underline">
        {currentUser ? (
          <NavLink to={`/user/${currentUser.id}`}>
            <div className="flex items-center">
              <Avatar>{getUserNameLastWord}</Avatar>
              <span className="ml-3 font-bold">{currentUser.name}</span>
            </div>
          </NavLink>
        ) : (
          <div className="flex items-center p-2">
            <NavLink to="/signIn">
              <AccountCircleIcon />
              <span className="ml-3 font-bold">登入</span>
            </NavLink>
          </div>
        )}
      </div>

      <ul className=" justify-between cursor-pointer  mt-5">
        <li className=" py-3 rounded-full font-bold decoration-2  hover:translate-x-3 hover:scale-y-110 hover:text-yellow-800  hover:underline">
          <NavLink to="/rescue">
            <div className="flex items-center">
              <MedicationIcon />
              <span className="ml-3">貓咪募款</span>
            </div>
          </NavLink>
        </li>
        <li className=" py-3  rounded-full font-bold hover:translate-x-3 hover:scale-y-110 hover:text-yellow-800  hover:underline  ">
          <NavLink to="/adopt">
            <div className="flex items-center">
              <CastleIcon />
              <span className="ml-3">貓咪領養</span>
            </div>
          </NavLink>
        </li>
        <li className=" py-3  rounded-full  font-bold hover:translate-x-3 hover:scale-y-110 hover:text-yellow-800  hover:underline  ">
          <NavLink to="/otherUsers?role=rescuer">
            <div className="flex items-center">
              <PersonIcon />
              <span className="ml-3">其他救援者</span>
            </div>
          </NavLink>
        </li>
        <li className="py-3  rounded-full  font-bold hover:translate-x-3 hover:scale-y-110 hover:text-yellow-800  hover:underline ">
          <NavLink to="/otherUsers?role=adopter">
            <div className="flex items-center">
              <PersonIcon />
              <span className="ml-3"> 其他收養者</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <div key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </div>
      ))}
    </div>
  );
}
