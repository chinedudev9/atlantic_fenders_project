'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: '/AFSS_catherine1.jpg',
    title: 'Welcome to Atlantic Fenders & Support Services',
    subtitle: 'Efficient and reliable STS service provider.',
    description: 'We provide end-to-end support across West Africa offshores, ensuring safe and timely operations.',
  },
  {
    image: '/AFSS_catherine2.jpg',
    title: 'Complete Services at Your Fingertips',
    subtitle: 'Your trusted partner at sea.',
    description: 'From reliable Mooring Masters to offshore crew, we are guided.',
  }, 
  {
    image: '/AFSS_catherine1.jpg',
    title: 'Operation Powered by Expertise',
    subtitle: 'We go the extra nautical mile for our clients.',
    description: 'Backed by years of experience, we deliver top-tier offshore services tailored for global clients.',
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[65vh] overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'
          }`}
        >
          <Image
             src={slide.image}
             alt={`slide-${index}`}
             fill
             className="w-full h-full"
          />
        </motion.div>
      ))}

      {/* Overlay Content */}
      <div className="absolute font-serif inset-0 z-10 bg-black/15 flex flex-col items-center justify-center text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 1 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{slides[currentIndex].title}</h1>
            <p className="text-lg md:text-xl mb-2">{slides[currentIndex].subtitle}</p>
            <p className="text-base md:text-lg">{slides[currentIndex].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-purple-600'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

