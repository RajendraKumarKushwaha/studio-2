// components/testimonials/Testimonials.js

import { FadeIn } from "@/ClientComponent/AnimationFadeIn";
import HeadingAnimation from "@/ClientComponent/HeadingMotion";
import TestimonialsSlider from "@/ClientComponent/TestimonialCarousel";


const testimonials = [
    {
        name: "Ravi Sharma",
        role: "Founder, Memories World Studio",
        feedback: "TechYard Web Solutions ne humara studio website itna beautiful banaya!",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Aman Gupta",
        role: "CEO, EVFix.in",
        feedback: "Inka design or SEO dono top-notch hai. Within weeks, traffic double ho gaya!",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Neha Verma",
        role: "Owner, HardwareMetals",
        feedback: "Catalog website perfect bana. clients ko dikhane me classy hai.",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Ravi Sharma",
        role: "Founder, Memories World Studio",
        feedback: "TechYard Web Solutions ne humara studio website itna beautiful banaya!",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Aman Gupta",
        role: "CEO, EVFix.in",
        feedback: "Inka design or SEO dono top-notch hai. Within weeks, traffic double ho gaya!",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Neha Verma",
        role: "Owner, HardwareMetals",
        feedback: "Catalog website perfect bana. clients ko dikhane me classy hai.",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
];

export default function Testimonials() {
    return (

        <div className="text-white py-24"> {/* py-16 se py-12 kiya taki space balance ho */}
            <FadeIn delay={0.2}>
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#f28b00] para">Our Clients</h2>
                    <p className="text-black mt-2 para">Turning visions into reality with our clients.</p>
                </div>
            </FadeIn>
            <div className=" text-white text-center ">

                <FadeIn delay={0.4}>
                    <TestimonialsSlider testimonials={testimonials} />
                </FadeIn>
            </div>
        </div>

    );
}
