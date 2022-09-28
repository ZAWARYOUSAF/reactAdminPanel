import React from "react";
import "./Single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Charts from "../../components/Charts/Charts";
import Table from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editbutton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">John Cena</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">JohnCena@hotmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+92 326859946</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    32 Hurna, street 3-H Kashmiri Gate Lahore, 
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Pakistan</span>
                </div>
              </div>
            </div>
            </div>
            <div className="right">
              <Charts aspect={3/1} title="Last 6 Months Revenue"/>
            </div>
          </div>
          <div className="bottom">
          <h1 className="title">Last Transactions</h1>
            <Table/>
          </div>
        </div>
      </div>
  );
};

export default Single;
