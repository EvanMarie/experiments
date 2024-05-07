import React from "react";
import Flex from "./flex";

const VStackFull = React.forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    className?: string;
    align?: "items-center" | "items-start" | "items-end" | "items-stretch";
    widths?: string;
    onClick?: () => void;
    id?: string;
    style?: React.CSSProperties;
  }
>(
  (
    { children, className, onClick, id, align = "items-center", style = {} },
    ref
  ) => {
    return (
      <Flex
        className={`w-full flex-col ${align} ${className}`}
        id={id}
        ref={ref}
        onClick={onClick}
        style={style}
      >
        {children}
      </Flex>
    );
  }
);

VStackFull.displayName = "VStackFull";

export default VStackFull;
