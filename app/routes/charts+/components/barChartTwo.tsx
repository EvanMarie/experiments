import { Bar } from "react-chartjs-2";
import ChartContainer from "./chartContainer";
import BarChartComponent, { InputData } from "./barChartComponent";

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Monthly Sales",
      data: [65, 59, 80, 81, 56, 55, 40, 20, 30, 40, 50, 60],
    },
    {
      label: "Monthly Expenses",
      data: [45, 39, 60, 71, 46, 35, 30, 50, 40, 20, 30, 40],
    },
  ],
};

export default function BarChartTwo() {
  return (
    <BarChartComponent data={data as InputData} title="Sales vs Expenses" />
  );
}
