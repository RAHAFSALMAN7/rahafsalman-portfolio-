"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed z-0 w-[400px] h-[400px] rounded-full hidden lg:block"
      style={{
        x: springX,
        y: springY,
        background: "radial-gradient(circle, rgba(200,82,42,0.06) 0%, transparent 70%)",
      }}
    />
  );
}
