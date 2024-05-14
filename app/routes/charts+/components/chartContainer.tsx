import CenterFull from "~/components/buildingBlocks/centerFull";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";

export default function ChartContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CenterFull>
      <Flex className="w-95% max-w-95% max-h-[80vh] p-[1vh] bg-slate-900 bg-gradient-to-br from-violet-900/50 via-indigo-900/50 to-cyan-900/50 border-900-md shadowBroadLooser justify-center">
        {children}
      </Flex>
    </CenterFull>
  );
}