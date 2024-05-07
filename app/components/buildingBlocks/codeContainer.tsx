import CenterHorizontalFull from "./centerHorizontalFull";
import Flex from "./flex";

export default function CodeContainer({ code }: { code: string }) {
  return (
    <CenterHorizontalFull>
      <Flex className="p-[1vh] bg-slate-800/80 shadowBroadLoose border-970-md">
        <pre>
          <code>{code}</code>
        </pre>
      </Flex>
    </CenterHorizontalFull>
  );
}
