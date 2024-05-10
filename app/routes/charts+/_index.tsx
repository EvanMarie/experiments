import VStackFull from "~/components/buildingBlocks/vStackFull";
import LessonOne from "./components/barChartOne";
import BarChartOne from "./components/barChartOne";
import BarChartTwo from "./components/barChartTwo";
import BarChartThree from "./components/barChartThree";
import FlexFull from "~/components/buildingBlocks/flexFull";
import BarChartFour from "./components/barChartFour";
import { Chart } from "chart.js";
import ChartExampleFive from "./components/lineGraphOne";
import PieChartComponent from "./components/pieChartComponent";
import PieChartOne from "./components/pieChartOne";

export default function ChartsIndex() {
  return (
    <FlexFull className="h-screen overflow-y-auto">
      <VStackFull className="h-fit py-[2vh] gap-[4vh]">
        <BarChartOne />
        <BarChartTwo />
        <BarChartThree />
        <BarChartFour />
        <ChartExampleFive />
        <PieChartOne />
      </VStackFull>
    </FlexFull>
  );
}
