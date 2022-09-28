import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";

import "./Home.scss";
import Featured from "../../components/Featured/Featured";
import Charts from "../../components/Charts/Charts";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className=" homecontainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Charts aspect={2.4/1} title="Last 6 Months Revenue"/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Last Transactions</div>
          <Table />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
