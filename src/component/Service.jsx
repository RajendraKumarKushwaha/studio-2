"use client";
import { LampContainer } from "@/components/ui/lamp";
import { Camera, Crop, Image, PaintBucket, Aperture, Video } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Camera, title: "Wedding Photography", description: "Capture the most precious moments of your wedding with stunning photography." },
  { icon: Video, title: "Cinematic Videography", description: "Create cinematic wedding films that tell your story beautifully." },
  { icon: Aperture, title: "Pre-Wedding Shoots", description: "Get mesmerizing pre-wedding photos that reflect your love story." },
  { icon: Crop, title: "Photo Retouching", description: "Enhance your photos with professional retouching and editing." },
  { icon: Image, title: "Album Designing", description: "Beautifully designed albums to preserve your wedding memories." },
  { icon: PaintBucket, title: "Color Grading", description: "Professional color grading for a visually stunning look." }
];

export default function ServicesPage() {
  return (
    <LampContainer>
      <div className="text-white py-12"> {/* py-16 se py-12 kiya taki space balance ho */}
        <motion.h2
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="text-center text-4xl font-bold mb-10"
        >
          Our Photography Services
        </motion.h2>

        <div className="container px-4 mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map(({ icon: Icon, title, description }, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <Icon className="w-16 h-16 text-white mb-4" />
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="text-slate-300 mt-2">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LampContainer>
  );
}
