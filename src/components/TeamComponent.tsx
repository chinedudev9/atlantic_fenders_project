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
    description: 'Our team brings over a decade of combined experience in the cordination of ship-to-ship transfers and marine logistics. We are committed to providing the highest level of service and safety in the industry. Proudly, we offer a fully integrated OEM standard in the maintenance of our equipment and facilities while striving innovatively as a team...',
    imageUrl: '/images/ship2ship.jpg',
    link: '/company',
  },
  {
    id: 2,
    title: 'QHSSE & Marine Safety Team',
    description: 'Our QHSSE team is dedicated to ensuring the highest standards of quality, health, safety, security, and environmental management in all our operations. We prioritize the safety of our employees, clients, and the environment. We are committed to continuous improvement and compliance with industry regulations. We are proud to be ISO 9001, ISO 14001, and ISO 45001 certified...',
    imageUrl: '/images/safetyt.png',
    link: '/locations',
  },
  {
    id: 4,
    title: 'Strategy Team',
    description: '',
    imageUrl: '/AFSS_catherine2.jpg',
    link: '/services',
  },
  {
    id: 5,
    title: 'Human Resources & Administration',
    description: 'At Atlantic Fenders and Support Services Ltd, we understand that the marine industry comes with its unique challenges and demands. While we take pride in the hard work and dedication of our team, we also recognize the importance of maintaining a healthy work-life balance to ensure our employees thrive both professionally and personally...',
    imageUrl: '/images/hrteam.png',
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
    const interval = setInterval(goToNext, 40000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='pt-10 h-auto relative z-20'
      style={{ background: "var(--background)" }}>
        <p className='text-center  text-blue-800 text-2xl font-bold'>Our Team &   
           <span className='text-white py-0.5 rounded pr-2 ml-2 bg-green-600'> Let's Greet</span></p>
    <section
      className="flex px-3 md:px-30 py-10 flex-col md:flex-row items-center gap-5"
      {...handlers}
    >
      {/* Image Section */}
      <div className="w-full">
        <Image
          src={slides[currentSlide].imageUrl}
          alt={slides[currentSlide].title}
        //  layout="fill"
          objectFit="cover"
          width={400} height={200}
          className='rounded-xl'
        />
      </div>

      {/* Text Section */}
      <div className="w-full text-center md:text-left">
        <h2 className="text-2xl font-bold mt-2 md:mt-0 mb-4">{slides[currentSlide].title}</h2>
        <p className="mb-8">{slides[currentSlide].description}</p>
        <a
          href={slides[currentSlide].link}
          className="inline-block bg-blue-800 text-white py-1.5 mb-12 px-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Find Out More
        </a>

        {/* Dots Navigation */}
        <div className="flex justify-center md:justify-start mt-4 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 md:w-5 h-0.5 transition-all ${
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

