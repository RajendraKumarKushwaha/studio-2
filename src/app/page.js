import AboutSection from "@/component/AboutSection";
import ContactPage from "@/component/ContactUs";
import SplitStickyGallery from "@/component/Gallery";
import HeroSlideshow from "@/component/HeroSlideShow";
import HeroVideo from "@/component/HeroVideo";
import PortfolioSection from "@/component/PortfolioSection";
import ServicesPage from "@/component/Service";
import Testimonials from "@/component/TestimonialSection";
import Image from "next/image";

export default function Home() {
  return (
   <>
   {/* <HeroVideo/> */}
   <HeroSlideshow/>
   <AboutSection/>
   <PortfolioSection/>
   <ServicesPage/>
   <SplitStickyGallery/>
   <Testimonials/>
   <ContactPage/>
   </>
  );
}
