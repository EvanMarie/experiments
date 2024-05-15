import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { CustomTooltip, colorOptions } from "./defaults";
import ChartContainer from "./chartContainer";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Text from "~/components/buildingBlocks/text";

export type PieDataType = {
  name: string;
  value: number;
};

interface SimplePieChartProps {
  data01: PieDataType[];
  data02: PieDataType[];
  title: string;
  height?: string;
  width?: string;
  innerRadius?: number;
  outerRadius?: number;
  colorList?: string[];
}

export default function SimplePieChart({
  data01,
  data02,
  title,
  height = "h-[60vh]",
  width = "w-[80vw]",
  innerRadius = 60,
  outerRadius = 80,
  colorList,
}: SimplePieChartProps) {
  const colorsToUse = colorList || colorOptions;

  return (
    <ChartContainer height={height} width={width}>
      {/* Title */}
      <FlexFull className="absolute top-[0.5vh] justify-center px-[2vh]">
        <Text className="text-[1.8vh] textShadow text-white" noOfLines={1}>
          {title}
        </Text>
      </FlexFull>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={outerRadius - 5}
            fill={colorOptions[5]}
          >
            {data01.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colorsToUse[index % colorsToUse.length]}
              />
            ))}
          </Pie>
          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            fill={colorOptions[6]}
            label
          >
            {data02.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colorsToUse[(index + data01.length) % colorsToUse.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
