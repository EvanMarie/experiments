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
      className={`${
        expanded ? "w-75% bg-pink-600 transition-500" : "w-25% bg-cyan-600"
      } hover:cursor-pointer h-[15vh] flex justify-center items-center  shadowBroadLoose m-[1vh]`}
      style={{
        width: expanded ? "75%" : "25%",
        cursor: "pointer",
        height: "100px",
        margin: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {content}
    </motion.div>
  );
}

export default function ResponsiveGrid() {
  const items: string[] = ["Item 1", "Item 2", "Item 3", "Item 4"];
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
