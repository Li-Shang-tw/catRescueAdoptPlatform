import { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
//----mui
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
//----context
import { CurrentUserContext } from "../context/CurrentUserContext";
//---元件---
import DrawerMenu from "./DrawerMenu";

import logo from "../assets/imgs/logo.png";

export default function Navigator() {
  //---取得登入者資料-----
  const userData = useContext(CurrentUserContext);
  const { currentUser } = userData;
  //----處理滾動事件---------
  const [onTop, setOnTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      //當滾動到最上方時，OnTop為true，否則為false
      if (window.scrollY === 0) {
        setOnTop(true);
      } else {
        setOnTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    //移除事件監聽器
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //取得用戶名稱與路徑id
  function getUserNameLastWord() {
    const userName = currentUser?.name;
    //用戶名稱只取最後一個字
    if (!userName) return;
    const userNameLastWord = userName.substr(userName.length - 1);
    return userNameLastWord;
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
    <>
      <div
        className={`px-2 flex justify-between items-center w-full fixed  z-50  ${
          !onTop && "bg-white shadow-md"
        }`}
      >
        <h1 className="font-bold cursor-pointer">
          <NavLink to="/">
            {" "}
            <img src={logo} alt="logo" className="w-16 rounded-full mt-2" />
          </NavLink>
        </h1>
        <ul className=" w-6/12  lg:w-4/12 justify-between cursor-pointer hidden md:flex">
          <li className="px-4 py-3 rounded-full  hover:bg-yellow-400 font-bold">
            <NavLink
              to="/rescue"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                };
              }}
            >
              <span className="text-xl"> 貓咪募款</span>
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
              <span className="text-xl"> 貓咪領養</span>
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
              <span className="text-xl"> 其他用戶</span>
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
                <NavLink to="/otherUsers?role=rescuer">
                  <span className="font-bold text-lg">救援者</span>
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/otherUsers?role=adopter">
                  <span className="font-bold text-lg">認養者</span>
                </NavLink>
              </MenuItem>
            </Menu>
          </li>
        </ul>
        <div className="flex h-full hidden md:flex">
          <div className=" hover:shadow-md cursor-pointer rounded-full ml-10">
            {currentUser ? (
              <NavLink to={`/user/${currentUser.id}`}>
                <Avatar>{currentUser && getUserNameLastWord()}</Avatar>
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
      <div className="h-24" style={{ backgroundColor: "#ffe9d2" }}></div>
    </>
  );
}
