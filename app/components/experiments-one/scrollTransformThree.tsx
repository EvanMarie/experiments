import { useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import FlexFull from "../buildingBlocks/flexFull";
import Flex from "../buildingBlocks/flex";
import ExampleContainer from "./exampleContainer";

export default function ScrollTransformExampleThree() {
  const scrollYContainer = useRef<HTMLDivElement>(null);

  // Setup useScroll with the container
  const scrollYProgress = useScroll({
    container: scrollYContainer,
  });

  const opacity = useTransform(scrollYProgress.scrollYProgress, [0, 1], [1, 0]);

  return (
    <ExampleContainer className="relative">
      <Flex className="gap-[2vh] p-[1vh] justify-center items-center w-full h-full sticky inset-0">
        <motion.div
          className="flex py-[2vh] px-[5vh] h-80% w-80% justify-center items-center text-md sm:text-lg md:text-xl  shadowBroadLoose text-nowrap bg-pink-500"
          style={{ opacity }}
        >
          Scroll container to fade out.
        </motion.div>
      </Flex>

      <FlexFull
        className="overflow-auto absolute inset-0 z-10"
        ref={scrollYContainer}
      >
        <div style={{ height: "500vh" }}></div>
      </FlexFull>
    </ExampleContainer>
  );
}
