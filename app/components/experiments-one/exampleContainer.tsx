import FlexFull from "../buildingBlocks/flexFull";
import React from "react";

const ExampleContainer = React.forwardRef<
  HTMLDivElement,
  {
    children?: React.ReactNode;
    height?: string;
    className?: string;
  }
>(({ children, height = "h-[40svh]", className }, ref) => {
  return (
    <FlexFull className="p-[1vh] relative xl:max-w-[80vw]">
      <FlexFull
        ref={ref}
        className={`justify-center ${height} overflow-y-auto overflow-x-hidden bg-slate-400 border-970-md shadowBroadLoose ${className}`}
      >
        {children}
      </FlexFull>
    </FlexFull>
  );
});

ExampleContainer.displayName = "ExampleContainer";

export default ExampleContainer;
