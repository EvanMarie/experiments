import VStackFull from "~/components/buildingBlocks/vStackFull";
import LessonOne from "./components/chartExampleOne";
import ChartExampleOne from "./components/chartExampleOne";
import ChartExampleTwo from "./components/chartExampleTwo";
import ChartExampleThree from "./components/chartExampleThree";
import FlexFull from "~/components/buildingBlocks/flexFull";
import ChartExampleFour from "./components/chartExampleFour";
import { Chart } from "chart.js";
import ChartExampleFive from "./components/chartExampleFive";

export default function ChartsIndex() {
  return (
    <FlexFull className="h-screen overflow-y-auto">
      <VStackFull className="h-fit py-[2vh] gap-[4vh]">
        <ChartExampleOne />
        <ChartExampleTwo />
        <ChartExampleThree />
        <ChartExampleFour />
        <ChartExampleFive />
      </VStackFull>
    </FlexFull>
  );
}
