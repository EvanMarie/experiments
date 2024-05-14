import CenterFull from "~/components/buildingBlocks/centerFull";
import ChartContainer from "./components/chartContainer";
import {
  AreaGraphOne,
  BarGraphOne,
  LineGraphFour,
  LineGraphOne,
  LineGraphThree,
  LineGraphTwo,
} from "./components/examples";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import FlexFull from "~/components/buildingBlocks/flexFull";
import { Line } from "react-chartjs-2";

export default function Index() {
  return (
    <FlexFull className="h-full overflow-y-auto overflow-x-hidden">
      <VStackFull className="h-fit gap-[2vh] py-[2vh]">
        <LineGraphOne />
        <LineGraphTwo />
        <LineGraphThree />
        <LineGraphFour />
        <AreaGraphOne />
        <BarGraphOne />
      </VStackFull>
    </FlexFull>
  );
}
