import Avatar from "@mui/material/Avatar";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { useContext } from "react";
import CreateBtn from "./CreateBtn";
import FormForRescue from "./FormForRescue";
import FormForAdopt from "./FormForAdopt";
import ModalSet from "./ModalSet";
import EditBtn from "./EditBtn";

import DrawerMenu from "./DrawerMenu";

export default function Navigator() {
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
  //-----處理下拉選單---------
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="px-3  flex justify-between items-center w-full ">
      <h1 className="font-bold cursor-pointer">
        <NavLink to="/">
          {" "}
          <img src="/src/assets/imgs/logo.png" alt="logo" className="w-2/6" />
        </NavLink>
      </h1>
      <ul className=" w-4/12 justify-between cursor-pointer hidden md:flex">
        <li className="px-4 py-3 rounded-full  hover:bg-yellow-400 font-bold">
          <NavLink
            to="/rescue"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
              };
            }}
          >
            貓咪救援
          </NavLink>
        </li>
        <li className="px-4 py-3  rounded-full hover:bg-yellow-400 font-bold">
          <NavLink
            to="/adopt"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
              };
            }}
          >
            貓咪領養
          </NavLink>
        </li>
        <li className="px-4 py-3 rounded-full  hover:bg-yellow-400 font-bold">
          <div
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            其他用戶
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>
              <NavLink to="/otherUsers?role=rescuer">救援者</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/otherUsers?role=adopter">認養者</NavLink>
            </MenuItem>
          </Menu>
        </li>
      </ul>
      <div className="flex h-full hidden md:flex">
        <div className="flex">
          {currentUser && currentUser.role === "rescuer" && (
            <>
              <ModalSet btn={<CreateBtn />} form={<FormForRescue />} />
              <ModalSet
                btn={<EditBtn>新增收養</EditBtn>}
                form={<FormForAdopt />}
              />
            </>
          )}
        </div>
        <div className=" hover:shadow-md cursor-pointer rounded-full ml-10">
          {currentUser ? (
            <NavLink to={`/user/${currentUser.id}`}>
              <Avatar>{getUserNameLastWord}</Avatar>
            </NavLink>
          ) : (
            <div className="flex items-center p-2">
              <NavLink to="/signIn">
                <AccountCircleIcon />
                <span className="ml-3">登入</span>
              </NavLink>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center md:hidden">
        <DrawerMenu />
      </div>
    </div>
  );
}
