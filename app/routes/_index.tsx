import type { MetaFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";
import HStack from "~/components/buildingBlocks/hStack";
import Icon from "~/components/buildingBlocks/icon";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import Text from "~/components/buildingBlocks/text";
import Transition from "~/components/buildingBlocks/transition";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import ScrollTransformExampleOne from "~/components/experiments-one/scrollTransformOne";
import LayoutOne from "~/components/experiments-one/layoutOne";
import ResponsiveGrid from "~/components/experiments-one/responsiveGrid";
import AccordionGroup from "~/components/experiments-one/accordion";
import Tabs from "~/components/experiments-one/tabs";
import ScrollTransformExampleTwo from "~/components/experiments-one/scrollTransformTwo";
import ScrollTransformExampleThree from "~/components/experiments-one/scrollTransformThree";
import ScrollTransformExampleFour from "~/components/experiments-one/scrollTransformFour";
import FlexFull from "~/components/buildingBlocks/flexFull";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.5]);
  const x = useTransform(scrollYProgress, [0, 0.05], ["0", "50vh"]);
  const y = useTransform(scrollYProgress, [0, 0.05], ["0", "-15vh"]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos < 1 ? "fixed inset-0" : "inherit";
  });
  return (
    <LayoutContainer>
      {/* <Transition className="w-full h-[100svh] overflow-y-auto overflow-x-hidden justify-center items-center rounded-none">
        <VStackFull className="h-[100svh] bg-slate-600 overflow-y-auto">
          <ScrollTransformExampleOne />
          <ScrollTransformExampleTwo />
          <ScrollTransformExampleThree />
          <ScrollTransformExampleFour />
          <LayoutOne />
          <ResponsiveGrid />
          <AccordionGroup />
          <Tabs />
        </VStackFull>
      </Transition> */}
      <FlexFull className="h-[100svh] overflow-y-auto relative" ref={scrollRef}>
        <VStackFull className="h-fit">
          <motion.div
            className={`text-[15vh] justify-center ${position} flex w-full fixed  text-white`}
            style={{ opacity, scale, x, y }}
          >
            HERO SECTION
          </motion.div>
          <FlexFull className="h-[50vh] bg-slate-500">SPACER</FlexFull>
          <FlexFull className="h-[50vh] bg-slate-400 justify-center">
            <motion.button whileHover={{ rotate: 360 }}>BUTTON</motion.button>
          </FlexFull>
          <VStackFull className="text-white text-[6vh]">
            <CenterHorizontalFull className="h-[50vh] bg-slate-900">
              SECTION ONE
            </CenterHorizontalFull>
            <CenterHorizontalFull className="h-[50vh] bg-slate-800">
              SECTION TWO
            </CenterHorizontalFull>
            <CenterHorizontalFull className="h-[50vh] bg-slate-700">
              SECTION THREE
            </CenterHorizontalFull>
            <CenterHorizontalFull className="h-[50vh] bg-slate-600">
              SECTION FOUR
            </CenterHorizontalFull>
          </VStackFull>
        </VStackFull>
      </FlexFull>
    </LayoutContainer>
  );
}
