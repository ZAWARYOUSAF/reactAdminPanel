import React from "react";
import "./Charts.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data=[
  {name:"January", Total:18000},
  {name:"Feburary", Total:19000},
  {name:"March", Total:15100},
  {name:"April", Total:18450},
  {name:"May", Total:11000},
  {name:"June", Total:22000},
  // {name:"July", total:1300},
  // {name:"August", total:1000},
  // {name:"September", total:1200},
  // {name:"October", total:1200},
  // {name:"November", total:3000},
  // {name:"December", total:3200},
];

const Charts = ({aspect,title}) => {
  return (
    <div className="chart">
    <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
           
          </defs>
          <XAxis dataKey="name" stroke="gray"/>
          <YAxis stroke="gray"/>
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#Total)"
          />
          
          </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
