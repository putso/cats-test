import { motion, usePresence } from "framer-motion";
import { ReactNode } from "react";

const transition = { type: "spring", stiffness: 500, damping: 50, mass: 1 };
interface ListItemProps {
 children: ReactNode;
 onClick: () => {};
 color: {
   hex: () => string;
 };
}
export function ListItem({ children, onClick, color }:ListItemProps) {
    const [isPresent, safeToRemove] = usePresence();
  
    const animations = {
      layout: true,
      initial: "out",
      style: {
        color: color.hex(),
        position: isPresent ? "relative" as const : "absolute" as const
      },
      animate: isPresent ? "in" : "out",
      whileTap: "tapped",
      variants: {
        in: { scaleY: 1, opacity: 1, color: color.hex(), zIndex: 1 },
        out: { scaleY: 0, opacity: 0, zIndex: -1, color: color.hex() },
        tapped: { scale: 0.98, opacity: 0.5, transition: { duration: 0.1 } }
      },
      onAnimationComplete: () => !isPresent && safeToRemove(),
      transition
    };
  
    return (
      <motion.div {...animations} onClick={onClick}>
        {children}
      </motion.div>
    );
  }
  