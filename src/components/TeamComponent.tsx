"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';

interface Slide {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Marine Logistics & Infrastructure',
    description: 'Our team brings over a century of combined experience in ship-to-ship transfers.',
    imageUrl: '/AFSS_catherine1.jpg',
    link: '/company',
  },
  {
    id: 2,
    title: 'QHSE & Compliance',
    description: 'We prioritize safety and quality in all our operations, ensuring the highest standards.',
    imageUrl: '/fender1.jpg',
    link: '/locations',
  },
  {
    id: 3,
    title: 'Technical & Support Team',
    description: 'Our experts provide tailored solutions to meet your specific needs.',
    imageUrl: '/AFSS_catherine2.jpg',
    link: '/services',
  },
  {
    id: 4,
    title: 'Strategic Team',
    description: 'Our experts provide tailored solutions to meet your specific needs.',
    imageUrl: '/AFSS_catherine2.jpg',
    link: '/services',
  },
  {
    id: 5,
    title: 'Human Resources & Administration',
    description: 'Our experts provide tailored solutions to meet your specific needs.',
    imageUrl: '/AFSS_catherine2.jpg',
    link: '/services',
  },
];

const TeamShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='pt-10 h-[90vh]'>
        <p className='text-center font-semibold md:text-2xl'>Meet Our Teams &<span className=''> Let's Talk</span></p>
    <section
      className="flex px-20 py-10 flex-col md:flex-row items-center"
      {...handlers}
    >
      {/* Image Section */}
      <div className="w-full">
        <Image
          src={slides[currentSlide].imageUrl}
          alt={slides[currentSlide].title}
          //layout="fill"
          //objectFit="cover"
          width={400} height={100}
        />
      </div>

      {/* Text Section */}
      <div className="w-full text-center md:text-left">
        <h2 className="text-2xl font-bold mt-2 md:mt-0 mb-4">{slides[currentSlide].title}</h2>
        <p className="mb-6">{slides[currentSlide].description}</p>
        <a
          href={slides[currentSlide].link}
          className="inline-block bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Find Out More
        </a>

        {/* Dots Navigation */}
        <div className="flex justify-center md:justify-start mt-4 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-0.5 transition-all ${
                currentSlide === index ? 'bg-blue-800 scale-110' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default TeamShowcase;

