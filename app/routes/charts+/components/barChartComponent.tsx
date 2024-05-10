import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartContainer from "./chartContainer";
import GetChartStyles from "./chartOptions";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export type InputData = {
  labels: string[];
  datasets: { label: string; data: number[] }[];
};

export default function BarChartComponent({
  data,
  title,
  indexAxis = "x",
}: {
  data: InputData;
  title?: string;
  indexAxis?: string;
}) {
  const chartDefaults = GetChartStyles({
    indexAxis: indexAxis,
    title: title,
  });

  const colorPairs = [
    {
      backgroundColor: "rgba(234, 97, 255, 0.8)",
      borderColor: "rgba(234, 97, 255, 1)",
    },
    {
      backgroundColor: "rgba(0, 225, 255, 0.8)",
      borderColor: "rgba(0, 225, 255, 1)",
    },
    {
      backgroundColor: "rgba(255, 242, 0, 0.8)",
      borderColor: "rgba(255, 242, 0, 1)",
    },
    {
      backgroundColor: "rgba(115, 99, 255, 0.8)",
      borderColor: "rgba(115, 99, 255, 1)",
    },
    {
      backgroundColor: "rgba(255, 18, 113, 0.8)",
      borderColor: "rgba(255, 18, 113, 1)",
    },
    {
      backgroundColor: "rgba(98, 255, 89, 0.8)",
      borderColor: "rgba(98, 255, 89, 1)",
    },
  ];

  // Dynamic dataset generation
  const inputData = {
    labels: data.labels,
    datasets: data.datasets.map((dataset, index) => ({
      label: dataset.label,
      data: dataset.data,
      backgroundColor: colorPairs[index % colorPairs.length].backgroundColor, // Use modular arithmetic to cycle through colors
      borderColor: colorPairs[index % colorPairs.length].borderColor,
      borderWidth: 2,
    })),
  };

  return (
    <ChartContainer>
      <Bar data={inputData} options={chartDefaults as any} />
    </ChartContainer>
  );
}
