import { useRef } from "react";
import FlexFull from "../buildingBlocks/flexFull";
import { useScroll, useTransform } from "framer-motion";
import Text from "../buildingBlocks/text";
import VStackFull from "../buildingBlocks/vStackFull";
import Box from "../buildingBlocks/box";
import { motion } from "framer-motion";
import CenterHorizontalFull from "../buildingBlocks/centerHorizontalFull";
import Flex from "../buildingBlocks/flex";
import CodeContainer from "../buildingBlocks/codeContainer";
import ExampleContainer from "./exampleContainer";

export default function ScrollTransformExampleOne() {
  const scrollContainerOne = useRef<HTMLDivElement>(null);
  const scrollYProgress = useScroll({ container: scrollContainerOne });
  const right = useTransform(
    scrollYProgress.scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["", "", "4vw", "4vw", "73vw"]
  );

  const left = useTransform(
    scrollYProgress.scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["4vw", "4vw", "73vw", "", "4vw"]
  );
  const top = useTransform(
    scrollYProgress.scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["2vh", "30vh", "30vh", "2vh", "2vh"]
  );
  return (
    <ExampleContainer ref={scrollContainerOne}>
      <Flex className="w-[90vw] h-[400svh] min-h-[100svh] items-start">
        <FlexFull>
          <motion.div
            style={{ left, top, right }}
            className="flex p-[2vh] bg-pink-600 shadowBroadLoose m-[1vh] absolute"
          >
            <Text>Watch Me Go!!!</Text>
          </motion.div>
        </FlexFull>
      </Flex>
    </ExampleContainer>
  );
}
