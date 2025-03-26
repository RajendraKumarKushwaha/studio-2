import { LampContainer } from '@/components/ui/lamp';
import Image from 'next/image';
import HeadingAnimation from '@/ClientComponent/HeadingMotion';

export default function AboutSection() {
  return (
   
     <LampContainer>
          <div className="text-white py-12"> {/* py-16 se py-12 kiya taki space balance ho */}
          <HeadingAnimation title="About Us" />
      <section className=" py-24 flex flex-col items-center text-center">
       
        
        <div className="flex flex-col md:flex-row items-center container px-4 z-10 gap-12">
          <div className="w-full md:w-1/2">
            <Image 
              src="/images/about.jpg" 
              alt="Photography Studio" 
              width={500} 
              height={500} 
              className=""
            />
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-4xl font-extrabold mb-6 drop-shadow-lg">
              <div className="text-slate-300 py-4">
                <span>The reasons why you should choose our Studio</span>
              </div>
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              At our studio, we don’t just capture images—we capture emotions, moments, and memories
              that last a lifetime. With a passion for storytelling, we transform your special
              occasions into timeless visuals, filled with warmth and authenticity.
            </p>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Whether it's a grand wedding, a dreamy pre-wedding shoot, or a personalized portfolio,
              we bring creativity, expertise, and a keen eye for detail to every frame. Let’s create
              something extraordinary together!
            </p>
          </div>
        </div>
      </section>
      </div>
      </LampContainer>
    
  );
}