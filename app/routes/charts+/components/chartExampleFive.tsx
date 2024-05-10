import { InputData } from "./barChartComponent";
import LineChartComponent from "./lineGraphComponent";

const salesData: InputData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Product A",
      data: [65, 59, 80, 81, 56, 55], // Sales for Product A
    },
    {
      label: "Product B",
      data: [75, 69, 90, 91, 66, 65], // Sales for Product B
    },
    {
      label: "Product C",
      data: [85, 79, 100, 101, 76, 75], // Sales for Product C
    },
  ],
};

export default function ChartExampleFive() {
  return <LineChartComponent data={salesData} title="Monthly Sales Data" />;
}
