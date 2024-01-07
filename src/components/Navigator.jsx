import Avatar from "@mui/material/Avatar";

import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navigator() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="px-3 py-5 flex justify-between items-center w-full ">
      <h1 className="font-bold text-xl cursor-pointer">
        <NavLink to="/"> Cats Helper</NavLink>
      </h1>
      <ul className="flex w-3/12 justify-between cursor-pointer">
        <li className="px-4 py-3 rounded-full hover:bg-slate-100 ">
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
        <li className="px-4 py-3  rounded-full hover:bg-slate-100">
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
        <li className="px-4 py-3 rounded-full hover:bg-slate-100">
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
            <MenuItem>救援者</MenuItem>
            <MenuItem>認養者</MenuItem>
            <MenuItem>贊助者</MenuItem>
          </Menu>
        </li>
      </ul>
      <div className="flex items-center border-2 px-3 py-2 rounded-full hover:shadow-md cursor-pointer">
        <div className="mr-2">
          <MenuIcon />
        </div>

        <Avatar>N</Avatar>
      </div>
    </div>
  );
}
