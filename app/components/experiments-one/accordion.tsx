import { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import ExampleContainer from "./exampleContainer";
import VStackFull from "../buildingBlocks/vStackFull";
import VStack from "../buildingBlocks/vStack";
import Text from "../buildingBlocks/text";

function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setOpen] = useState(false);
  return (
    <motion.div
      layout
      onClick={() => setOpen(!isOpen)}
      className={`w-full p-[1vh] ${
        isOpen ? "bg-cyan-500" : "bg-pink-600"
      } border-970-md shadowBroadLooser hover:cursor-pointer`}
      style={{ overflow: "hidden" }} // Prevent content from showing outside during animation
    >
      <motion.h2 layout>{title}</motion.h2>
      {isOpen && (
        <motion.div
          layout
          className="overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.6 } }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}

export default function AccordionGroup() {
  return (
    <ExampleContainer className="h-[20vh]">
      <LayoutGroup>
        <VStack className="w-80% h-full justify-evenly xl:max-w-[50vw]">
          <Accordion title="Section 1">
            <VStack>
              <Text>Content for Section 1 Line One</Text>
              <Text>Content for Section 1 Line Two</Text>
              <Text>Content for Section 1 Line Three</Text>
              <Text>Content for Section 1 Line Four</Text>
            </VStack>
          </Accordion>
          <Accordion title="Section 2">
            <VStack>
              <Text>Content for Section 2 Line One</Text>
              <Text>Content for Section 2 Line Two</Text>
              <Text>Content for Section 2 Line Three</Text>
              <Text>Content for Section 2 Line Four</Text>
            </VStack>
          </Accordion>
        </VStack>
      </LayoutGroup>
    </ExampleContainer>
  );
}
