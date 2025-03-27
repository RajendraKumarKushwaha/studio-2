import Image from 'next/image';
import { Great_Vibes } from 'next/font/google';
import { FadeIn } from '@/ClientComponent/AnimationFadeIn';

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function AboutSection() {
  return (
    <div className="text-white  py-24">
      <section className="flex flex-col items-center text-center">
        {/* Heading Animation */}
        <FadeIn delay={0.2}>
          <h2 className="text-center text-[#f28b00] text-4xl font-bold mb-10 para">
            About Us
          </h2>
        </FadeIn>

        {/* Parent Flex Container (Half-Half Layout) */}
        <div className="container flex flex-col md:flex-row items-center px-4 z-10 gap-12">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <FadeIn delay={0.4}>
              <Image
                src="/images/about.jpg"
                alt="Photography Studio"
                width={500}
                height={500}
                className=""
              />
            </FadeIn>
          </div>

          {/* Text Content Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <FadeIn delay={0.6}>
              <h3 className="text-4xl mb-6 drop-shadow-lg">
                <div className="text-white py-4">
                  <span className="para text-4xl md:text-5xl text-[#f28b00]">
                    The reasons why you should choose our Studio
                  </span>
                </div>
              </h3>
              <p className="text-lg text-gray-900 leading-relaxed para">
                At our studio, we don’t just capture images—we capture emotions, moments, and memories
                that last a lifetime. With a passion for storytelling, we transform your special
                occasions into timeless visuals, filled with warmth and authenticity.
              </p>
              <p className="mt-4 text-lg text-gray-900 leading-relaxed para">
                Whether it's a grand wedding, a dreamy pre-wedding shoot, or a personalized portfolio,
                we bring creativity, expertise, and a keen eye for detail to every frame. Let’s create
                something extraordinary together!
              </p>
            </FadeIn>
          </div>

        </div>
      </section>
    </div>
  );
}
