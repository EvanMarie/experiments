import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartContainer from "./chartContainer";
import GetChartStyles from "./barChartOptions";
import ToggleSwitch from "~/components/buildingBlocks/toggleSwitch";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import { InputData } from "./barChartComponent";

// Register Chart.js components necessary for Line Chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChartComponent({
  data,
  title,
  showAxisToggle = true,
}: {
  data: InputData;
  title?: string;
  showAxisToggle?: boolean;
}) {
  const colorPairs = [
    {
      lineColor: "rgba(234, 97, 255, 1)",
    },
    {
      lineColor: "rgba(0, 225, 255, 1)",
    },
    {
      lineColor: "rgba(255, 242, 0, 1)",
    },
    {
      lineColor: "rgba(115, 99, 255, 1)",
    },
    {
      lineColor: "rgba(255, 18, 113, 1)",
    },
    {
      lineColor: "rgba(98, 255, 89, 1)",
    },
  ];

  const [indexAxis, setIndexAxis] = useState("x");

  const handleToggleAxis = () => {
    setIndexAxis(indexAxis === "x" ? "y" : "x");
  };

  const chartDefaults = GetChartStyles({
    indexAxis: indexAxis,
    title: title,
  });

  // Update color and style for line chart
  const inputData = {
    labels: data.labels,
    datasets: data.datasets.map((dataset, index) => ({
      label: dataset.label,
      data: dataset.data,
      borderColor: colorPairs[index].lineColor,
      backgroundColor: "rgba(0,0,0,0)",
      borderWidth: 2,
      tension: 0.4,
    })),
  };

  return (
    <ChartContainer>
      <VStackFull className="gap-[2vh]">
        <Line data={inputData} options={chartDefaults as any} />
      </VStackFull>
    </ChartContainer>
  );
}
