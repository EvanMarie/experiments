import { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import ExampleContainer from "./exampleContainer";
import Flex from "../buildingBlocks/flex";
import FlexFull from "../buildingBlocks/flexFull";
import VStackFull from "../buildingBlocks/vStackFull";
import CenterHorizontalFull from "../buildingBlocks/centerHorizontalFull";

export default function Tabs() {
  const [selected, setSelected] = useState<number | null>(null);
  const tabs = [
    {
      id: 0,
      name: "Tab 1",
      message: "You clicked TAB ONE!",
    },
    {
      id: 1,
      name: "Tab 2",
      message: "You clicked TAB TWO!",
    },
    {
      id: 2,
      name: "Tab 3",
      message: "You clicked TAB THREE!",
    },
  ];

  return (
    <ExampleContainer height="h-[20vh]">
      <LayoutGroup>
        <VStackFull>
          <FlexFull className="relative h-fit">
            {tabs.map((tab, index) => (
              <button
                key={tab.name}
                onClick={() => setSelected(index)}
                className={`p-[1vh] pt-[2vh] text-xl h-fit w-30% textShadow ${
                  selected === index ? "text-pink-400" : "text-white"
                } transition-400`}
              >
                {tab.name}
                {selected === index && (
                  <motion.div
                    className="w-30% bg-pink-500 h-[0.3vh] absolute bottom-0 shadowBroadNormal"
                    layoutId="underline"
                  />
                )}
              </button>
            ))}
          </FlexFull>

          {tabs.map(
            (tab) =>
              selected === tab.id && (
                <CenterHorizontalFull
                  key={tab.id}
                  className="h-[15vh] text-lg text-cyan-600 textGlow "
                >
                  {tab.message}
                </CenterHorizontalFull>
              )
          )}
        </VStackFull>
      </LayoutGroup>
    </ExampleContainer>
  );
}
