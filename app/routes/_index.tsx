import type { MetaFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";
import HStack from "~/components/buildingBlocks/hStack";
import Icon from "~/components/buildingBlocks/icon";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import Text from "~/components/buildingBlocks/text";
import Transition from "~/components/buildingBlocks/transition";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import ScrollTransformExampleOne from "~/components/experiments-one/scrollTransformOne";
import ScrollTransformExampleTwo from "~/components/experiments-one/layoutOne";
import ResponsiveGrid from "~/components/experiments-one/responsiveGrid";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  function NavButton({
    to,
    text,
    icon,
    isExternal = false,
    className = "bg-100-linear3op25 text-col-900 hover:bg-400-diagonal3op75 shadowBroadNormal hover:metallicEdgesMd",
  }: {
    to: string;
    text?: string;
    isExternal?: boolean;
    icon?: React.ComponentType<{ className?: string }>;
    className?: string;
  }) {
    return (
      // eslint-disable-next-line react/jsx-no-target-blank
      <NavLink to={to} target={isExternal ? "_blank" : undefined}>
        <HStack
          className={`px-[1.5vh] py-[0.5vh] transition-400 text-center ${className} items-center group`}
        >
          {icon && (
            <Icon
              icon={icon}
              iconClassName="text-col-900 text-[2.5vh] group-hover:text-cyan-200 group-hover:transition-400"
            />
          )}
          <Text>{text}</Text>
        </HStack>
      </NavLink>
    );
  }
  return (
    <LayoutContainer>
      <Transition className="w-full h-[100svh] overflow-y-auto overflow-x-hidden justify-center items-center rounded-none">
        <VStackFull className="h-[100svh] bg-slate-600 overflow-y-auto">
          <ScrollTransformExampleOne />
          <ScrollTransformExampleTwo />
          <ResponsiveGrid />
        </VStackFull>
      </Transition>
    </LayoutContainer>
  );
}
