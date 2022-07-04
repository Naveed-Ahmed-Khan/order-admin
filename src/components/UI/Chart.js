import React from "react";
import { PieChart, Pie, Legend, ResponsiveContainer } from "recharts";
import Select from "./Select";

const data = [
  { name: "Group A", value: 400, fill: "#0088FE" },
  { name: "Group B", value: 300, fill: "#00C49F" },
];

const renderColorfulLegendText = (value, entry) => {
  return (
    <span style={{ color: "#596579", fontWeight: 500, padding: "10px" }}>
      {value}
    </span>
  );
};

export default function Chart() {
  return (
    <div className="h-[19rem]">
      <div
        style={{
          width: "100%",
          maxWidth: "720px",
          margin: "0 auto",
          height: 390,
        }}
      >
        <div className="-mb-14 z-50">
          <h2 className="text-2xl text-[#494949] font-semibold leading-tight">
            Statistics
          </h2>
          <div className="flex gap-2 w-full">
            <Select />
            <Select />
          </div>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              dataKey="value"
              innerRadius={50}
              outerRadius={80}
              data={data}
              fill="#8884d8"
              label
            />
            <Legend
              height={36}
              iconType="circle"
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              iconSize={10}
              padding={5}
              formatter={renderColorfulLegendText}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
