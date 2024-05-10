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
  title: string;
  indexAxis?: string;
}) {
  const chartDefaults = GetChartStyles({
    title: title,
    indexAxis: indexAxis,
  });

  // Dynamic dataset generation
  const inputData = {
    labels: data.labels,
    datasets: data.datasets.map((dataset, index) => ({
      label: dataset.label,
      data: dataset.data,
      // Setting different colors for each dataset, or use a predefined array of colors
      backgroundColor: `rgba(255, 15, ${251 - 20 * index}, 0.3)`,
      borderColor: `rgba(255, 15, ${251 - 20 * index}, 1)`,
      borderWidth: 2,
    })),
  };

  return (
    <ChartContainer>
      <Bar data={inputData} options={chartDefaults as any} />
    </ChartContainer>
  );
}
