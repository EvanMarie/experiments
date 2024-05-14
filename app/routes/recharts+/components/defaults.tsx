import { TooltipProps } from "recharts";
import Text from "~/components/buildingBlocks/text";
import VStack from "~/components/buildingBlocks/vStack";

export const colorOptions = [
  "#BA8BD9",
  "#FD67C1",
  "#F28B30",
  "#9980F2",
  "#60CDF6",
  "#FF71CE",
  "#01CDFE",
  "#05FFA1",
  "#B967FF",
  "#FFFB96",
];

export const strokeDashes = [
  "15 10 5 10",
  "8 4 2 4",
  "12 6 2 6",
  "4 8 4 12",
  "6 3 1 3",
  "2 6 4 6",
  "1 4 2 8",
  "4 2 8 2",
  "10 2 5 2 5 2",
  "8 1 4 1 2 1",
];

export interface CustomizedAxisTickProps {
  x: number;
  y: number;
  stroke: string;
  useDollar?: boolean;
  fontSize?: string;
  payload: {
    value: string;
  };
}

export function CustomizedXAxisTick({
  x,
  y,
  stroke,
  payload,
  fontSize = "1vh",
}: CustomizedAxisTickProps) {
  // Parse the incoming payload.value, which should be a date string
  //   const date = new Date(payload.value);

  // Format the date as MM/DD/YY
  //   const formattedDate = `${String(date.getMonth() + 1).padStart(
  //     2,
  //     "0"
  //   )}/${String(date.getDate()).padStart(2, "0")}/${date
  //     .getFullYear()
  //     .toString()
  //     .slice(-2)}`;

  //   const hours = date.getHours();
  //   const minutes = date.getMinutes();
  //   const ampm = hours >= 12 ? "PM" : "AM";
  //   const formattedHours = hours % 12 || 12;
  //   const formattedMinutes = String(minutes).padStart(2, "0");
  //   const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;

  // Combine date and time
  //   const formattedDateTime = `${formattedDate} ${formattedTime}`;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="white"
        transform="rotate(-35)"
        style={{ fontSize }}
      >
        {/* {formattedDateTime} */}
        {payload.value}
      </text>
    </g>
  );
}

export function CustomizedYAxisTick({
  x,
  y,
  stroke,
  payload,
  useDollar = false,
  fontSize = "1vh",
}: CustomizedAxisTickProps) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="white"
        // transform="rotate(-35)"
        style={{ fontSize }}
      >
        {useDollar
          ? `$${payload.value.toLocaleString()}`
          : payload.value.toLocaleString()}
      </text>
    </g>
  );
}

export function CustomizedBiaxialAxisTick({
  x,
  y,
  stroke,
  payload,
  useDollar = false,
  fontSize = "1vh",
}: CustomizedAxisTickProps) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="start"
        fill="white"
        // transform="rotate(-35)"
        style={{ fontSize }}
      >
        {/* {useDollar ? `$${payload.value.toLocaleString()}` : payload.value} */}
        {payload.value}
      </text>
    </g>
  );
}

export type CustomTooltipProps = TooltipProps<number, string> & {
  label?: string;
  useDollar?: boolean;
};

export function CustomTooltip({
  active,
  payload,
  label,
  useDollar,
}: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <VStack className="bg-col-900 p-[1vh] rounded-[1vh] border-970-md shadowNarrowTight">
        <Text className="text-col-100">{`Month: ${label}`}</Text>
        {payload.map((entry, index) => (
          <Text key={index} style={{ color: entry.color }}>
            {useDollar
              ? `${entry.name}: $${entry.value?.toLocaleString()}`
              : `${entry.name}: ${entry.value?.toLocaleString()}`}
          </Text>
        ))}
      </VStack>
    );
  }

  return null;
}
