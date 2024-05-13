// -------------------------- EXAMPLE ONE -------------------------- //

import SimpleLineGraph from "./lineGraph";

type DataPoint = {
  month: string;
  revenue: number;
  expenses: number;
  profit: number;
};

const data: DataPoint[] = [
  { month: "Jan", revenue: 10000, expenses: 6000, profit: 4000 },
  { month: "Feb", revenue: 12000, expenses: 7000, profit: 5000 },
  { month: "Mar", revenue: 15000, expenses: 8000, profit: 7000 },
  { month: "Apr", revenue: 11000, expenses: 6500, profit: 4500 },
  { month: "May", revenue: 13000, expenses: 7500, profit: 5500 },
  { month: "Jun", revenue: 16000, expenses: 9000, profit: 7000 },
  { month: "Jul", revenue: 14000, expenses: 8000, profit: 6000 },
  { month: "Aug", revenue: 17000, expenses: 10000, profit: 7000 },
  { month: "Sep", revenue: 15000, expenses: 9000, profit: 6000 },
  { month: "Oct", revenue: 13000, expenses: 7000, profit: 6000 },
  { month: "Nov", revenue: 14000, expenses: 8000, profit: 6000 },
  { month: "Dec", revenue: 16000, expenses: 10000, profit: 6000 },
];

const dataLines = ["revenue", "expenses", "profit"];

export function LineGraphOne() {
  return (
    <SimpleLineGraph
      data={data}
      dataLines={dataLines}
      title="Coffee Corner Financials 2023"
      xAxisLabel="Months of 2023"
      yAxisLabel="Financials"
    />
  );
}
