"use client";
import { motion } from "framer-motion";

export default function HeadingAnimation({ title }) {
  return (
    <motion.h2
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
      className="text-center text-[#f28b00] text-4xl font-bold mb-10 para"
    >
      {title}
    </motion.h2>
  );
}
