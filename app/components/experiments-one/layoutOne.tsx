import { useRef, useState } from "react";
import FlexFull from "../buildingBlocks/flexFull";
import { useScroll, useTransform } from "framer-motion";
import Text from "../buildingBlocks/text";
import VStackFull from "../buildingBlocks/vStackFull";
import Box from "../buildingBlocks/box";
import { motion } from "framer-motion";
import CenterHorizontalFull from "../buildingBlocks/centerHorizontalFull";
import Flex from "../buildingBlocks/flex";
import CodeContainer from "../buildingBlocks/codeContainer";
import Icon from "../buildingBlocks/icon";
import { FaSquareGithub } from "react-icons/fa6";
import { BiCollapseAlt, BiExpandAlt } from "react-icons/bi";

export default function ScrollTransformExampleTwo() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <FlexFull className="p-[1vh] ">
      <FlexFull className="justify-center items-center h-[40svh] overflow-y-auto overflow-x-hidden bg-slate-500 relative border-970-md shadowBroadLoose">
        <motion.div
          layout
          data-isOpen={isOpen}
          initial={{ borderRadius: 50 }}
          className={`relative shadowBroadLoose cursor-pointer flex justify-center items-center ${
            isOpen
              ? " transition-800  w-90% h-[30vh] bg-pink-600"
              : "w-[10vh] h-[10vh] bg-cyan-600"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            layout
            className={`absolute shadowBroadLoose cursor-pointer w-[5vh] h-[5vh] rounded-full flex justify-center items-center ${
              isOpen
                ? "bg-cyan-600 top-[2vh] right-[2vh] transition-800 "
                : "bg-pink-600"
            }`}
          >
            <Icon
              icon={isOpen ? BiCollapseAlt : BiExpandAlt}
              iconClassName="transition-800 text-[2.5vh]"
            />
          </motion.div>
          {isOpen ? <Text>TADA!</Text> : <></>}
        </motion.div>
      </FlexFull>
    </FlexFull>
  );
}
