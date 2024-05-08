import { useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import FlexFull from "../buildingBlocks/flexFull";
import Flex from "../buildingBlocks/flex";
import ExampleContainer from "./exampleContainer";

export default function ScrollTransformExampleTwo() {
  const scrollYContainer = useRef<HTMLDivElement>(null);

  // Setup useScroll with the container
  const scrollYProgress = useScroll({
    container: scrollYContainer,
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.scrollYProgress.onChange((value) => {
      console.log("Scroll Progress:", value);
    });
    return () => unsubscribe();
  }, [scrollYProgress.scrollYProgress]);

  const backgroundColor = useTransform(
    scrollYProgress.scrollYProgress,
    [0, 1],
    ["#ff007c", "#00d1ff"]
  );

  return (
    <ExampleContainer className="relative">
      <Flex className="gap-[2vh] p-[1vh] justify-center items-center w-full h-full sticky inset-0">
        <motion.div
          className="flex py-[2vh] px-[5vh] h-fit text-xl shadowBroadLoose text-nowrap"
          style={{ backgroundColor }}
        >
          Watch me change color.
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
