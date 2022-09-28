import React,{useContext} from "react";
import "./Sidebar.scss";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import RedeemRoundedIcon from "@mui/icons-material/RedeemRounded";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/darkModeContext";

const Sidebar = () => {
  const {dispatch}= useContext(DarkModeContext);
  console.log("type")
  return (

    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">REACT-ADMIN</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="headP">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>

          <li>
            <DashboardOutlinedIcon className="icons" />
            <span>Dashboard</span>
          </li>
</Link>

          <p className="headP">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon className="icons" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
          <li>
            <StoreMallDirectoryOutlinedIcon className="icons" />
            <span>Products</span>
          </li>  </Link>
          <li>
            <RedeemRoundedIcon className="icons" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className="icons" />
            <span>Delivery</span>
          </li>
          <p className="headP">USEFUL</p>
          <li>
            <AnalyticsOutlinedIcon className="icons" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className="icons" />
            <span>Notification</span>
          </li>
          <p className="headP">SERVICE</p>
          <li>
            <MonitorHeartOutlinedIcon className="icons" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icons" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icons" />
            <span>Settings</span>
          </li>
          <p className="headP">USER </p>
          <li>
            <AccountBoxOutlinedIcon className="icons" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icons" />
            <span>LogOut</span>
          </li>
        </ul>
      </div>
      <hr />
      <div className="bottom">
        <p>Theme</p>
        <span className="coloroption" onClick={()=>dispatch({type:"TOGGLE"})}></span>
        
        {/* <span className="coloroption" onClick={()=>dispatch({type:"LIGHT"})}></span> */}
        {/* <span className="coloroption"></span> */}
      </div>
    </div>
  );
};

export default Sidebar;
