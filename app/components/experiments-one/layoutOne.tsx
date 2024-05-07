import { useState } from "react";
import Text from "../buildingBlocks/text";
import Box from "../buildingBlocks/box";
import { motion } from "framer-motion";
import { BiCollapseAlt, BiExpandAlt } from "react-icons/bi";
import ExampleContainer from "./exampleContainer";
import Icon from "../buildingBlocks/icon";

export default function LayoutOne() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ExampleContainer className="flex-col gap-[2vh] relative items-center">
      <motion.div
        layout
        className={`relative shadowBroadLoose cursor-pointer flex justify-center items-center ${
          isOpen
            ? " transition-400 rounded-[5vh] w-90% h-[30vh] bg-pink-600 absolute z-20"
            : "w-[10vh] rounded-full h-[10vh] bg-cyan-500"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          layout
          className={`absolute shadowBroadLoose cursor-pointer w-[5vh] h-[5vh] rounded-full flex justify-center items-center ${
            isOpen
              ? "bg-cyan-500 top-[2vh] right-[2vh] transition-400 "
              : "bg-pink-600"
          }`}
        >
          <Icon
            icon={isOpen ? BiCollapseAlt : BiExpandAlt}
            iconClassName="transition-400 text-[2.5vh]"
          />
        </motion.div>
        {isOpen ? <Text>TADA!</Text> : <></>}
      </motion.div>
      <Box
        className={`p-[1vh] bg-pink-600 border-970-md shadowBroadLooser ${
          isOpen ? "absolute" : "inherit transition-800 "
        } `}
      >
        Other Content
      </Box>
    </ExampleContainer>
  );
}
