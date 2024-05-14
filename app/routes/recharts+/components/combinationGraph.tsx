import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

export default function CombinationGraph({ data }: { data: any[] }) {
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="areaValue"
          fill="#8884d8"
          stroke="#8884d8"
        />
        <Bar dataKey="barValue" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="lineValue" stroke="#ff7300" />
        <Scatter dataKey="scatterValue" fill="red" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
