import { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import ExampleContainer from "./exampleContainer";
import VStackFull from "../buildingBlocks/vStackFull";

interface ResponsiveGridItemProps {
  content: string;
}

function ResponsiveGridItem({ content }: ResponsiveGridItemProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setExpanded(!expanded)}
      className={`${expanded ? "w-75% bg-pink-600" : "w-35% bg-cyan-500"}
        hover:cursor-pointer h-[15vh] flex justify-center items-center shadowBroadLoose m-[1vh] transition-all duration-500`}
    >
      <div
        className={`flex justify-center items-center w-full h-full ${
          expanded ? "text-xxl" : "text-md"
        } transition-500`}
      >
        {content}
      </div>
    </motion.div>
  );
}

export default function ResponsiveGrid() {
  const items: string[] = [
    "I Am Item 1",
    "I Am Item 2",
    "I Am Item 3",
    "I Am Item 4",
  ];
  return (
    <ExampleContainer className="h-fit p-[1vh]">
      <LayoutGroup>
        <VStackFull className="items-center">
          {items.map((item, index) => (
            <ResponsiveGridItem key={index} content={item} />
          ))}
        </VStackFull>
      </LayoutGroup>
    </ExampleContainer>
  );
}
