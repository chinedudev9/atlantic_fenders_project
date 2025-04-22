'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // optional icon set

type slides = {
  image?: string;
  video?: string;
  title: string;
  subtitle: string;
  description: string;
};

const slides = [
  
  {
    video: '/videos/video2.mp4',
    title: 'Dynamic Offshore Operations',
    subtitle: 'Experience our work at sea.',
  //  description: 'See our team in action ensuring smooth and secure STS transfers.',
  },
  {
    image: '/headerImage/towing.png',
    title: 'Crew Support in Action',
    subtitle: 'Expertise in motion.',
   // description: 'From onboarding to offloading, we support your mission at every step.',
  },
  {
    image: '/equipment/fenders1.jpg',
    title: 'Atlantic Fenders & Support Services',
    subtitle: 'Efficient and reliable STS service provider.',
   // description: 'We provide end-to-end support across West Africa offshores, ensuring safe and timely operations.',
  },
  {
    image: '/vessel/towing.jpg',
    title: 'Complete Services at Your Fingertips',
    subtitle: 'We go the extra nautical mile for our clients.',
  //  description: 'From reliable Mooring Masters to offshore crew, we are guided.',
  },
  {
    image: '/headerImage/greener.jpg',
    title: 'Sustainable Offshore Solutions',
    subtitle: 'Committed to a greener future.',
  //  description: 'Backed by years of experience, we deliver top-tier offshore services tailored for global clients.',
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" w-full h-[75vh] sticky top-0 z-0">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'
          }`}
        >
          {slide.video ? (
            <video
              src={slide.video}
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          ) : (
            <Image
              src={slide.image || '/default-image.jpg'}
              alt={`slide-${index}`}
              fill
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>
      ))}

      {/* Overlay Content */}
      <div className="absolute font-serif inset-0 z-10 flex flex-col items-center mt-25 ml-5 md:text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <h1 className="text-3xl md:text-6xl md:flex flex-col font-extrabold mb-4">
              {slides[currentIndex].title}
            </h1>
            <p className="text-lg md:text-xl mb-2 font-bold">
              {slides[currentIndex].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 md:w-3 h-0.5 md:h-1 cursor-pointer transition-all duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-gray-600'
            }`}
          ></span>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-0.5 top-1/2 transform -translate-y-1/2 z-20 font-bold p-2 rounded hover:bg-black/60 transition"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0.5 top-1/2 transform -translate-y-1/2 z-20 font-bold  p-2 rounded hover:bg-black/60 transition"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
      </button>
    </div>
  );
}