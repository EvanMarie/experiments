import { motion } from "framer-motion";

export default function ScaleAndFadeInContainer({
  children,
  delay = 0,
  animateInDuration = 0.6,
  trigger = 0.2,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  animateInDuration?: number;
  trigger?: number;
  hoverScale?: number;
  className?: string;
}) {
  const animationProps = {
    initial: { opacity: 0.6, y: "13vh", scale: 0.8 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    transition: {
      opacity: {
        duration: 0.6,
      },
      scale: {
        duration: animateInDuration,
        delay: delay,
        type: "spring",
        stiffness: 80,
        damping: 25,
        mass: 0.25,
      },
      y: {
        type: "spring",
        stiffness: 80,
        damping: 25,
        mass: 0.25,
      },
    },
  };
  return (
    <motion.div
      initial={animationProps.initial}
      whileInView={animationProps.whileInView}
      transition={animationProps.transition}
      viewport={{
        once: true,
        amount: trigger,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
