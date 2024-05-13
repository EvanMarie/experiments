import CenterFull from "~/components/buildingBlocks/centerFull";
import Flex from "~/components/buildingBlocks/flex";

export default function ChartContainer({
  children,
  className,
  height = "h-80%",
  width = "w-80%",
}: {
  children: React.ReactNode;
  className?: string;
  height?: string;
  width?: string;
}) {
  return (
    <Flex
      className={` border-900-md shadowBroadLooser justify-center ${width} ${height} ${className} relative`}
    >
      {" "}
      <Flex
        className={`w-full h-full bg-gray-800 rounded-none border-900-md shadowNarrowTight`}
      >
        {children}
      </Flex>
    </Flex>
  );
}
