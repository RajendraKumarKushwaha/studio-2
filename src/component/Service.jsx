import { FadeIn } from "@/ClientComponent/AnimationFadeIn";
import HeadingAnimation from "@/ClientComponent/HeadingMotion";
import { Camera, Crop, Image, PaintBucket, Aperture, Video } from "lucide-react";

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

    <div className="text-[#f28b00] py-24"> {/* py-16 se py-12 kiya taki space balance ho */}
      <FadeIn delay={0.2}>
        <h2 className="text-center text-[#f28b00] text-4xl font-bold mb-10 para">
          Our Photgraphy Services
        </h2>
      </FadeIn>

      <div className="container px-4 mx-auto py-12">
      <FadeIn delay={0.4}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map(({ icon: Icon, title, description }, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Icon className="w-16 h-16 text-[#f28b00] mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 ">{title}</h3>
              <p className="text-gray-900 mt-2  para">{description}</p>
            </div>
          ))}
        </div>
        </FadeIn>
      </div>
    </div>

  );
}
