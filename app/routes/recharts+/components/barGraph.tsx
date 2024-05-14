import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Rectangle,
} from "recharts";
import {
  CustomTooltip,
  CustomizedBiaxialAxisTick,
  CustomizedXAxisTick,
  CustomizedYAxisTick,
  colorOptions,
} from "./defaults";
import ChartContainer from "./chartContainer";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Text from "~/components/buildingBlocks/text";
import Flex from "~/components/buildingBlocks/flex";

export default function SimpleBarGraph({
  data,
  dataBars,
  stackIds,
  title,
  xAxisLabel,
  yAxisLabel,
  biaxialLabel,
  isVertical = false,
  useDollar = false,
  height = "h-[60vh]",
  width = "w-[80vw]",
  biaxial = false,
  xAxisType = "category",
  yAxisType = "number",
  yDataKey,
  xDataKey,
  biaxialDataKey,
}: {
  data: any;
  dataBars: string[];
  stackIds?: { [key: string]: string };
  isVertical?: boolean;
  title: string;
  xAxisLabel: string;
  yAxisLabel: string;
  biaxialLabel?: string;
  useDollar?: boolean;
  height?: string;
  width?: string;
  biaxial?: boolean;
  xAxisType?: "number" | "category";
  yAxisType?: "number" | "category";
  yDataKey?: string;
  xDataKey?: string;
  biaxialDataKey?: string;
}) {
  return (
    <ChartContainer height={height} width={width}>
      {/* * * * * * * * * * * * TITLE * * * * * * * * * * * */}
      <FlexFull className="absolute top-[0.5vh] justify-center px-[2vh]">
        <Text className="text-[1.8vh] textShadow text-white" noOfLines={1}>
          {title}
        </Text>
      </FlexFull>
      {/* * * * * * * * * * * * X LABEL * * * * * * * * * * * */}
      <FlexFull className="absolute bottom-[0.5vh] justify-center">
        <Text className="text-white text-[1.8vh] textShadow">{xAxisLabel}</Text>
      </FlexFull>
      {/* * * * * * * * * * * * Y LABEL * * * * * * * * * * * */}
      <Flex className="absolute left-[2vh] top-1/2 -translate-y-1/2 -rotate-90 origin-left">
        <Text className="text-white text-[1.8vh] textShadow whitespace-nowrap">
          {yAxisLabel}
        </Text>
      </Flex>
      {/* * * * * * * * * * * * BIAXIAL LABEL * * * * * * * * * * * */}
      <Flex className="absolute right-[2vh] top-1/2 -translate-y-1/2 rotate-90 origin-right">
        <Text className="text-white text-[1.8vh] textShadow whitespace-nowrap">
          {biaxialLabel}
        </Text>
      </Flex>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout={isVertical ? "vertical" : "horizontal"}
          width={500}
          height={300}
          data={data}
          margin={{ top: 40, right: 10, left: 25, bottom: 50 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            height={50}
            type={xAxisType}
            dataKey={xDataKey}
            tick={
              <CustomizedXAxisTick
                x={0}
                y={0}
                stroke={""}
                payload={{
                  value: "",
                }}
              />
            }
          />
          <YAxis
            width={60}
            yAxisId="left"
            type={yAxisType}
            dataKey={yDataKey}
            tick={
              <CustomizedYAxisTick
                x={0}
                y={0}
                useDollar={useDollar}
                stroke={""}
                payload={{
                  value: "",
                }}
              />
            }
          />
          {biaxial && (
            <YAxis
              yAxisId="right"
              orientation="right"
              dataKey={biaxialDataKey}
              width={60}
              type={yAxisType}
              tick={
                <CustomizedBiaxialAxisTick
                  x={0}
                  y={0}
                  useDollar={useDollar}
                  stroke={""}
                  payload={{
                    value: "",
                  }}
                />
              }
            />
          )}
          <Tooltip content={<CustomTooltip useDollar={useDollar} />} />
          <Legend />

          {dataBars.map((bar, index) => (
            <Bar
              key={index}
              dataKey={bar}
              stackId={stackIds ? stackIds[bar] : undefined}
              activeBar={
                <Rectangle fill={colorOptions[index]} stroke="white" />
              }
              stroke={colorOptions[index]}
              fill={colorOptions[index]}
              yAxisId={bar === biaxialDataKey ? "right" : "left"}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
