// -------------------------- EXAMPLE ONE SIMPLE -------------------------- //

import SimpleAreaGraph from "./areaGraph";
import SimpleBarGraph from "./barGraph";
import SimpleLineGraph from "./lineGraph";

type DataPointOne = {
  month: string;
  revenue: number;
  expenses: number;
  profit: number;
};

const dataOne: DataPointOne[] = [
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

const dataLinesOne = ["revenue", "expenses", "profit"];

export function LineGraphOne() {
  return (
    <SimpleLineGraph
      data={dataOne}
      dataLines={dataLinesOne}
      title="Coffee Corner Financials 2023"
      xAxisLabel="Months of 2023"
      yAxisLabel="Financials"
      xDataKey="month"
      useDollar
    />
  );
}
// -------------------------- EXAMPLE TWO DASHES -------------------------- //

type DataPointTwo = {
  week: string;
  "Teddy Bear": number;
  "Building Blocks": number;
  "RC Car": number;
  Puzzle: number;
  Doll: number;
  "Board Game": number;
  "Art Set": number;
  "Action Figure": number;
  "Toy Train": number;
  "Stuffed Animal": number;
};

const dataTwo: DataPointTwo[] = [
  {
    week: "Week 1",
    "Teddy Bear": 120,
    "Building Blocks": 90,
    "RC Car": 20,
    Puzzle: 100,
    Doll: 80,
    "Board Game": 30,
    "Art Set": 130,
    "Action Figure": 95,
    "Toy Train": 10,
    "Stuffed Animal": 85,
  },
  {
    week: "Week 2",
    "Teddy Bear": 100,
    "Building Blocks": 120,
    "RC Car": 40,
    Puzzle: 110,
    Doll: 90,
    "Board Game": 24,
    "Art Set": 105,
    "Action Figure": 115,
    "Toy Train": 95,
    "Stuffed Animal": 23,
  },
  {
    week: "Week 3",
    "Teddy Bear": 110,
    "Building Blocks": 45,
    "RC Car": 120,
    Puzzle: 64,
    Doll: 130,
    "Board Game": 22,
    "Art Set": 140,
    "Action Figure": 10,
    "Toy Train": 115,
    "Stuffed Animal": 2,
  },
  {
    week: "Week 4",
    "Teddy Bear": 90,
    "Building Blocks": 110,
    "RC Car": 140,
    Puzzle: 120,
    Doll: 100,
    "Board Game": 130,
    "Art Set": 12,
    "Action Figure": 105,
    "Toy Train": 33,
    "Stuffed Animal": 135,
  },
  {
    week: "Week 5",
    "Teddy Bear": 33,
    "Building Blocks": 140,
    "RC Car": 100,
    Puzzle: 105,
    Doll: 120,
    "Board Game": 44,
    "Art Set": 90,
    "Action Figure": 135,
    "Toy Train": 110,
    "Stuffed Animal": 150,
  },
  {
    week: "Week 6",
    "Teddy Bear": 140,
    "Building Blocks": 130,
    "RC Car": 30,
    Puzzle: 115,
    Doll: 105,
    "Board Game": 33,
    "Art Set": 150,
    "Action Figure": 100,
    "Toy Train": 135,
    "Stuffed Animal": 90,
  },
  {
    week: "Week 7",
    "Teddy Bear": 150,
    "Building Blocks": 120,
    "RC Car": 90,
    Puzzle: 135,
    Doll: 115,
    "Board Game": 44,
    "Art Set": 110,
    "Action Figure": 140,
    "Toy Train": 11,
    "Stuffed Animal": 105,
  },
  {
    week: "Week 8",
    "Teddy Bear": 130,
    "Building Blocks": 150,
    "RC Car": 120,
    Puzzle: 110,
    Doll: 140,
    "Board Game": 23,
    "Art Set": 100,
    "Action Figure": 90,
    "Toy Train": 44,
    "Stuffed Animal": 115,
  },
];

export function LineGraphTwo() {
  return (
    <SimpleLineGraph
      data={dataTwo}
      dataLines={Object.keys(dataTwo[0]).slice(1)}
      title="Toy Sales by Week"
      xAxisLabel="Weeks"
      yAxisLabel="Toy Sales"
      xDataKey="week"
      useStrokeDash
    />
  );
}

// -------------------------- EXAMPLE THREE VERTICAL -------------------------- //
type DataPointThree = {
  product: string;
  Q1: number;
  Q2: number;
  Q3: number;
  Q4: number;
};

const dataThree: DataPointThree[] = [
  { product: "Product A", Q1: 300, Q2: 700, Q3: 540, Q4: 100 },
  { product: "Product B", Q1: 800, Q2: 900, Q3: 1000, Q4: 300 },
  {
    product: "Product C",
    Q1: 1200,
    Q2: 1300,
    Q3: 1100,
    Q4: 1000,
  },
  { product: "Product D", Q1: 100, Q2: 500, Q3: 780, Q4: 1100 },
];

const dataLinesThree = ["Q1", "Q2", "Q3", "Q4"];

export function LineGraphThree() {
  return (
    <SimpleLineGraph
      data={dataThree}
      dataLines={dataLinesThree}
      title="Product Sales by Quarter"
      xAxisLabel="Product Sales"
      yAxisLabel="Products"
      isVertical={true}
      xAxisType="number"
      yAxisType="category"
      yDataKey="product"
    />
  );
}
// -------------------------- EXAMPLE FOUR BIAXIAL -------------------------- //

type DataPointFour = {
  month: string;
  attendance: number;
  temperature: number;
};

const dataFour: DataPointFour[] = [
  { month: "Jan", attendance: 50000, temperature: 40 },
  { month: "Feb", attendance: 55000, temperature: 45 },
  { month: "Mar", attendance: 60000, temperature: 50 },
  { month: "Apr", attendance: 70000, temperature: 55 },
  { month: "May", attendance: 80000, temperature: 60 },
  { month: "Jun", attendance: 95000, temperature: 70 },
  { month: "Jul", attendance: 110000, temperature: 80 },
  { month: "Aug", attendance: 100000, temperature: 75 },
  { month: "Sep", attendance: 90000, temperature: 65 },
  { month: "Oct", attendance: 75000, temperature: 60 },
  { month: "Nov", attendance: 60000, temperature: 50 },
  { month: "Dec", attendance: 55000, temperature: 45 },
];

const dataLinesFour = ["attendance", "temperature"];

export function LineGraphFour() {
  return (
    <SimpleLineGraph
      data={dataFour}
      dataLines={dataLinesFour}
      title="Amphitheater Attendance-Temperature Comparison 2023"
      xAxisLabel="Months of 2023"
      yAxisLabel="Attendance"
      xDataKey="month"
      biaxial
      biaxialDataKey="temperature"
      biaxialLabel="Temperature (°F)"
    />
  );
}

// -------------------------- EXAMPLE FIVE -------------------------- //

export function AreaGraphOne() {
  return (
    <SimpleAreaGraph
      data={dataOne}
      dataLines={dataLinesOne}
      title="Coffee Corner Financials 2023"
      xAxisLabel="Months of 2023"
      yAxisLabel="Financials"
      xDataKey="month"
      includeArea
      useDollar
    />
  );
}

// -------------------------- EXAMPLE SIX SIMPLE -------------------------- //

export function BarGraphOne() {
  return (
    <SimpleBarGraph
      data={dataOne}
      dataBars={dataLinesOne}
      title="Coffee Corner Financials 2023"
      xAxisLabel="Months of 2023"
      yAxisLabel="Financials"
      xDataKey="month"
      useDollar
    />
  );
}

// -------------------------- EXAMPLE SEVEN STACKED-------------------------- //

type DataPointSix = {
  month: string;
  income: number;
  expenses: number;
};

const dataSix: DataPointSix[] = [
  { month: "Jan", income: 5000, expenses: 3000 },
  { month: "Feb", income: 6000, expenses: 3500 },
  { month: "Mar", income: 7000, expenses: 4000 },
  { month: "Apr", income: 5500, expenses: 3200 },
  { month: "May", income: 6500, expenses: 3800 },
  { month: "Jun", income: 8000, expenses: 4500 },
  { month: "Jul", income: 7500, expenses: 4200 },
  { month: "Aug", income: 9000, expenses: 5000 },
  { month: "Sep", income: 8500, expenses: 4800 },
  { month: "Oct", income: 7200, expenses: 4000 },
  { month: "Nov", income: 6800, expenses: 3600 },
  { month: "Dec", income: 9500, expenses: 5500 },
];

export function BarGraphTwo() {
  return (
    <SimpleBarGraph
      data={dataSix}
      dataBars={["income", "expenses"]}
      title="Coffee Corner Financials 2023"
      xAxisLabel="Months of 2023"
      yAxisLabel="Financials"
      xDataKey="month"
      stackIds={{ income: "stack", expenses: "stack" }}
      useDollar
    />
  );
}

// -------------------------- EXAMPLE EIGHT MIXED -------------------------- //

type DataPointSeven = {
  month: string;
  income: number;
  expenses: number;
  profit: number;
};

const dataSeven: DataPointSeven[] = [
  { month: "Jan", income: 5000, expenses: 3000, profit: 2000 },
  { month: "Feb", income: 6000, expenses: 3500, profit: 2500 },
  { month: "Mar", income: 7000, expenses: 4000, profit: 3000 },
  { month: "Apr", income: 5500, expenses: 3200, profit: 2300 },
  { month: "May", income: 6500, expenses: 3800, profit: 2700 },
  { month: "Jun", income: 8000, expenses: 4500, profit: 3500 },
  { month: "Jul", income: 7500, expenses: 4200, profit: 3300 },
  { month: "Aug", income: 9000, expenses: 5000, profit: 4000 },
  { month: "Sep", income: 8500, expenses: 4800, profit: 3700 },
  { month: "Oct", income: 7200, expenses: 4000, profit: 3200 },
  { month: "Nov", income: 6800, expenses: 3600, profit: 3200 },
  { month: "Dec", income: 9500, expenses: 5500, profit: 4000 },
];

export function BarGraphThree() {
  return (
    <SimpleBarGraph
      data={dataSeven}
      dataBars={["income", "expenses", "profit"]}
      title="Coffee Corner Financials 2023"
      xAxisLabel="Months of 2023"
      yAxisLabel="Financials"
      xDataKey="month"
      stackIds={{ income: "stack", expenses: "stack", profit: "" }}
      useDollar
    />
  );
}

// -------------------------- EXAMPLE NINE -------------------------- //
