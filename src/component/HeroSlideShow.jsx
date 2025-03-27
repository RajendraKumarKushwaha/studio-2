"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "https://imgpanda.com/upload/ib/sq4ALbEhIS.jpg",
    text: "We cherish & save your memories",
  },
  {
    image: "https://imgpanda.com/upload/ib/I4qmZchHEP.jpg",
    text: "Capturing emotions that last forever",
  },
  {
    image: "https://imgpanda.com/upload/ib/QgDfPHowhf.jpg",
    text: "Turning moments into timeless art",
  },
  {
    image: "https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/prewedding/7.jpg",
    text: "Your story, beautifully captured",
  },
];

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, i) => (
        <motion.img
          key={i}
          src={slide.image}
          alt="Slideshow Image"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ position: "absolute" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      ))}

      {/* Content Section */}
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          key={index}
          className="text-white text-4xl md:text-6xl para mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
        >
          {slides[index].text}
        </motion.h1>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto">
          <a href="/booking" className="bg-[#f28b00] btn hover:bg-[#f28b00] text-white py-3 px-6 rounded-lg text-lg font-medium transition">
            Book Now
          </a>
          <a href="/portfolio" className="border-2 border-white text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-white hover:text-black transition">
            View Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}
