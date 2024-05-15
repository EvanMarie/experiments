import RadarChartOne, {
  AreaGraphOne,
  BarGraphEight,
  BarGraphFour,
  BarGraphFourA,
  BarGraphFourB,
  BarGraphFourC,
  BarGraphNine,
  BarGraphOne,
  BarGraphThree,
  BarGraphTwo,
  CombinationGraphOne,
  LineGraphFour,
  LineGraphOne,
  LineGraphThree,
  LineGraphTwo,
  PieChartOne,
  ScatterPlotOne,
  ScatterPlotTwo,
} from "./components/examples";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import FlexFull from "~/components/buildingBlocks/flexFull";

export default function Index() {
  return (
    <FlexFull className="h-full overflow-y-auto overflow-x-hidden justify-center">
      <VStackFull className="h-fit gap-[2vh] py-[2vh]">
        <LineGraphOne />
        <LineGraphTwo />
        <LineGraphThree />
        <LineGraphFour />
        <AreaGraphOne />
        <BarGraphOne />
        <BarGraphTwo />
        <BarGraphThree />
        <BarGraphFour />
        <BarGraphFourA />
        <BarGraphFourB />
        <BarGraphFourC />
        <BarGraphEight />
        <BarGraphNine />
        <CombinationGraphOne />
        <ScatterPlotOne />
        <ScatterPlotTwo />
        <PieChartOne />
        <RadarChartOne />
      </VStackFull>
    </FlexFull>
  );
}
