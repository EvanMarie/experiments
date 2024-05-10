import React from "react";
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
const chartDefaults = GetChartStyles({
  title: "Demo Bar Chart",
  indexAxis: "x",
});

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Demo Bar Chart Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)"],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      enabled: true,
    },
  },
};

const LessonOne = () => {
  return (
    <ChartContainer>
      <Bar data={data} options={chartDefaults as any} />
    </ChartContainer>
  );
};

export default LessonOne;
