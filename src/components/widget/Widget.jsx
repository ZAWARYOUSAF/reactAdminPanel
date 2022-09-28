import React from "react";
import "./Widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Link } from "react-router-dom";

const Widget = ({ type }) => {
  let data;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See All Users",
        too:"users",
        icon: (
          <Person2OutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View All Orders",
        too:"/",

        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "Vew Net Earnings",
        too:"/",

        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See Details",
        too:"/",

        icon: <MonetizationOnOutlinedIcon className="icon" style={{
            backgroundColor: "rgba(128, 0, 128, 0.2)",
            color: "purple"}}/>,
      };
      break;
    default:
      break;
  }
  //   temp
  const amount = 100;
  const differ = 25;

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <Link to={data.too} style={{ textDecoration: "none" }}>
        <span className="link">{data.link}</span>
        </Link>
      </div>
      <div className="right">
        <div className="persentage positive  ">
          <KeyboardArrowUpOutlinedIcon />
          {differ} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
