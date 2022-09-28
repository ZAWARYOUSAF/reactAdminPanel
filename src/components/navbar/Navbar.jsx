import React, { useContext } from "react";
import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import NightlightSharpIcon from '@mui/icons-material/NightlightSharp';
import CloseFullscreenOutlinedIcon from "@mui/icons-material/CloseFullscreenOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../context/darkModeContext";

const Navbar = () => {
  const {dispatch}= useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icons" />
            English
          </div>
          <div className="item">
            <NightlightSharpIcon className="icons moon" onClick={()=>dispatch({type:"TOGGLE"})}/>
          </div>
          <div className="item">
            <CloseFullscreenOutlinedIcon className="icons" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icons" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icons" />
            <div className="counter">3</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icons" />
          </div>
          <div className="item">
            <img
              src="https://www.kindpng.com/picc/m/52-526237_avatar-profile-hd-png-download.png"
              alt="profile"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
