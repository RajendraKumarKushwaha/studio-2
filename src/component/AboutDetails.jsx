"use client";

import Image from 'next/image';
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';



export default function AboutDetails() {
  return (
   
      <div className="  text-white py-24 ">
        {/* Heading */}
        <h2 className="text-center text-[#f28b00] text-4xl font-bold  para">
            About Us
          </h2>
        
        <section className=" container px-4 mx-auto flex py-24 flex-col md:flex-row items-start   gap-12">
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative overflow-hidden shadow-lg border-4 border-gray-900">
              <Image
                src="/images/about.jpg"
                alt="Photography Studio"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
          
          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className=" md:w-1/2 text-center md:text-left"
          >
            <h3 className="text-4xl md:text-5xl  leading-tight drop-shadow-lg text-[#f28b00] para">
              Why Choose Our Studio?
            </h3>
            <p className="mt-6 text-lg text-gray-900 leading-relaxed para">
              We don’t just capture images—we capture emotions, moments, and memories that last a lifetime.
              With a passion for storytelling, we transform your special occasions into timeless visuals,
              filled with warmth and authenticity.
            </p>
            <p className="mt-4 text-lg text-gray-900 leading-relaxed para">
              Whether it's a grand wedding, a dreamy pre-wedding shoot, or a personalized portfolio,
              we bring creativity, expertise, and a keen eye for detail to every frame.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <Button className="bg-[#f28b00] hover:bg-[#f28900ee] text-white cursor-pointer py-3 text-lg">
                Get in Touch
              </Button>
              <Button className="bg-gray-900 hover:bg-gray-700 text-white cursor-pointer  py-3  text-lg">
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Additional Sections */}
        <section className="  container px-4  mx-auto ">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {/* Our Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="p-6 bg-gray-800  shadow-lg"
            >
              <h4 className="text-2xl text-[#f28b00] para mb-4">Our Vision</h4>
              <p className="text-gray-300 text-lg para">To create stunning and timeless visuals that tell stories, evoke emotions, and inspire generations.</p>
            </motion.div>
            
            {/* Experience */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.9 }}
              className="p-6 bg-gray-800  shadow-lg"
            >
              <h4 className="text-2xl  text-[#f28b00] para mb-4">Years of Experience</h4>
              <p className="text-gray-300 para text-lg">Over 10+ years of capturing beautiful moments with precision and artistic vision.</p>
            </motion.div>
            
            {/* Client Trust */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }}
              className="p-6 bg-gray-800  shadow-lg"
            >
              <h4 className="text-2xl text-[#f28b00] para  mb-4">Trusted by Clients</h4>
              <p className="text-gray-300 para text-lg">We’ve served hundreds of happy clients who trust us for their most special moments.</p>
            </motion.div>
          </div>
        </section>
      </div>
   
  );
}
