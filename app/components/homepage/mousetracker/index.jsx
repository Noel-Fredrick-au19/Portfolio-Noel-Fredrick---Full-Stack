"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MouseTracker() {
  const ref = useRef(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = ({ clientX, clientY }) => {
      setCoordinates({ x: clientX, y: clientY });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <motion.div
      ref={ref}
      className="fixed top-0 left-0 w-6 h-6 bg-[#ff0066] rounded-full pointer-events-none"
      animate={{ x: coordinates.x, y: coordinates.y }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    />
  );
}
