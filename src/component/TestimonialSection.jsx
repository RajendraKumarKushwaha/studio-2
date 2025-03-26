// components/testimonials/Testimonials.js

import HeadingAnimation from "@/ClientComponent/HeadingMotion";
import TestimonialsSlider from "@/ClientComponent/TestimonialCarousel";
import { LampContainer } from "@/components/ui/lamp";


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
        <LampContainer>
            <div className="text-white py-12"> {/* py-16 se py-12 kiya taki space balance ho */}
                <HeadingAnimation title="Our Clients" />
                <div className=" text-white text-center ">


                    <TestimonialsSlider testimonials={testimonials} />
                </div>
            </div>
        </LampContainer>
    );
}
