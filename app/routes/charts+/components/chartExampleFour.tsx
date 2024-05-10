import VStackFull from "~/components/buildingBlocks/vStackFull";
import BarChartComponent, { InputData } from "./barChartComponent";
import { useState } from "react";
import ToggleSwitch from "~/components/buildingBlocks/toggleSwitch";

const groupedByWeek: InputData = {
  labels: ["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5", "Wk 6"],
  datasets: [
    {
      label: "Alice",
      data: [70, 75, 70, 85, 90, 95], // Alice's performance over 6 weeks
    },
    {
      label: "Bob",
      data: [60, 65, 68, 70, 75, 78], // Bob's performance over 6 weeks
    },
    {
      label: "Charlie",
      data: [80, 82, 80, 83, 85, 88], // Charlie's performance over 6 weeks
    },
  ],
};

const groupedByEmployee: InputData = {
  labels: ["Alice", "Bob", "Charlie"],
  datasets: [
    {
      label: "Wk 1",
      data: [70, 60, 80], // Performance of all employees in Wk 1
    },
    {
      label: "Wk 2",
      data: [75, 65, 82], // Performance of all employees in Wk 2
    },
    {
      label: "Wk 3",
      data: [70, 68, 80], // Performance of all employees in Wk 3
    },
    {
      label: "Wk 4",
      data: [85, 70, 83], // Performance of all employees in Wk 4
    },
    {
      label: "Wk 5",
      data: [90, 75, 85], // Performance of all employees in Wk 5
    },
    {
      label: "Wk 6",
      data: [95, 78, 88], // Performance of all employees in Wk 6
    },
  ],
};

export default function ChartExampleFour() {
  const [toggleOn, setToggleOn] = useState(true); // true for groupedByWeek, false for groupedByEmployee
  const data = toggleOn ? groupedByWeek : groupedByEmployee;
  const title = toggleOn ? "Performance by Week" : "Performance by Employee";

  return (
    <VStackFull>
      {" "}
      <ToggleSwitch
        toggleOn={toggleOn}
        setToggleOn={setToggleOn}
        labelColor="light"
        size="sm"
        onText="Group by Employee"
        offText="Group by Week"
      />
      <BarChartComponent
        data={data}
        title={
          data === groupedByWeek
            ? "Performance by Week"
            : "Performance by Employee"
        }
      />
    </VStackFull>
  );
}
