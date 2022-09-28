import React from "react";
import "./Featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className=" featuredChart">
          <CircularProgressbar value={70} text="70%" strokeWidth={4} />
        </div>
        <p className="title">Today's Sales</p>
        <p className="amount">$500</p>
        <p className="description">
          Last payment is being prosessed, It's Maybe not included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle target">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">$25k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon  fontSize="small" />
              <div className="resultAmount">$14k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">$22k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
