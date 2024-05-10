import PieChartComponent from "./pieChartComponent";

// Assuming InputData is already appropriately defined for pie charts
const salesData = {
  labels: [
    "Electronics",
    "Clothing",
    "Home & Garden",
    "Sports Equipment",
    "Toys & Games",
  ],
  datasets: [
    {
      data: [300, 250, 150, 200, 100], // Sales values for each category
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
      ],
      hoverBackgroundColor: [
        "rgba(255, 99, 132, 0.8)",
        "rgba(54, 162, 235, 0.8)",
        "rgba(255, 206, 86, 0.8)",
        "rgba(75, 192, 192, 0.8)",
        "rgba(153, 102, 255, 0.8)",
      ],
      hoverOffset: 8,
    },
  ],
};

export default function PieChartOne() {
  return (
    <PieChartComponent data={salesData as any} title="Sales Distribution" />
  );
}
