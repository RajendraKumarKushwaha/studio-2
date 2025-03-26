import AboutSection from "@/component/AboutSection";
import ContactPage from "@/component/ContactUs";
import SplitStickyGallery from "@/component/Gallery";
import HeroVideo from "@/component/HeroVideo";
import PortfolioSection from "@/component/PortfolioSection";
import ServicesPage from "@/component/Service";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <HeroVideo/>
   <AboutSection/>
   <PortfolioSection/>
   <ServicesPage/>
   <SplitStickyGallery/>
   <ContactPage/>
   </>
  );
}
