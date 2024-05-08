import { useRef } from "react";
import FlexFull from "../buildingBlocks/flexFull";
import { useScroll, useTransform } from "framer-motion";
import Text from "../buildingBlocks/text";
import { motion } from "framer-motion";
import Flex from "../buildingBlocks/flex";
import ExampleContainer from "./exampleContainer";

export default function ScrollTransformExampleTwo() {
  const scrollYContainer = useRef<HTMLDivElement>(null);
  const scrollXContainer = useRef<HTMLDivElement>(null);
  const scrollYProgress = useScroll({
    container: scrollYContainer,
    target: scrollYContainer,
  });

  const x = useTransform(
    scrollYProgress.scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  const items = [
    "Item One",
    "Item Two",
    "Item Three",
    "Item Four",
    "Item Five",
    "Item Six",
    "Item Seven",
    "Item Eight",
    "Item Nine",
    "Item Ten",
  ];
  return (
    <ExampleContainer className="relative">
      <motion.div
        className="w-full overflow-x-auto overflow-y-hidden sticky top-1/3 z-20 "
        ref={scrollXContainer}
        // style={{ translateX: x }}
      >
        <Flex className="gap-[2vh] p-[1vh] bg-white h-fit w-fit">
          {items.map((item, index) => (
            <motion.div className="flex py-[2vh] px-[5vh] h-fit text-xl bg-pink-600 shadowBroadLoose text-nowrap">
              {item}
            </motion.div>
          ))}
        </Flex>
      </motion.div>

      <FlexFull
        className="h-[400svh] absolute inset-0 z-10 text-transparent"
        ref={scrollYContainer}
      >
        this
      </FlexFull>
    </ExampleContainer>
  );
}
