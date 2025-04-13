'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Chevron icons for controls

const services = [
  {
    title: "SHIP TO SHIP TRANSFER",
    description: "Our STS services ensure seamless supply chain operations while maintaining the highest safety standards. We provide tailored packages, round-the-clock availability, and comprehensive support to meet diverse client needs",
    image: "/path/to/image1.jpg",
    link: "/service-1",
  },
  {
    title: "MANNING",
    description: "Our internationally certified POACs bring over a decade of mooring expertise across the Gulf of Guinea. Skilled in handling vessels ranging from Handymax to ULCC, our team has successfully executed over 3,000 STS operations with zero incidents, demonstrating unmatched reliability and professionalism",
    image: "/path/to/image1.jpg",
    link: "/service-1",
  },
  {
    title: "MARINE EQUIPMENT SOLUTION",
    description: "We offer a wide range of Pneumatic Fenders and Marine Hoses for lease and sale. All equipment is securely stored on-site and readily available for waterborne transport.",
    image: "/path/to/image2.jpg",
    link: "/service-2",
  },
  {
    title: "TOWAGE SERVICES",
    description: "AFSS provides reliable coastal and long-distance deep-sea towing solutions, emphasizing safety, efficiency, and operational flexibility. Our diverse fleet of tugs, including offshore vessels with up to 61 tons of bollard pull, supports a wide range of towing needs — from vessel assistance to the transport of offshore modules.",
    image: "/path/to/image4.jpg",
    link: "/service-4",
  },
  {
    title: "BOAT SERVICES",
    description: "We operate covered fast boats for secure personnel transfers and specialized open boats for delivering lightweight spares and provisions. Our boat services are designed to ensure prompt, safe, and reliable operations.",
    image: "/path/to/image5.jpg",
    link: "/service-5",
  },
  {
    title: "WAREHOUSE & LOGISTICS SERVICES",
    description: "We offer adaptable and secure storage solutions supported by state-of-the-art warehousing facilities. Our trained staff adhere strictly to HSSE (Health, Safety, Security, and Environment) standards. By working closely with clients, we ensure logistical precision that aligns with their timelines and operational requirements",
    image: "/path/to/image6.jpg",
    link: "/service-6",
  },
  {
    title: "MARINE CONSULTANCY",
    description: "We offer complete Optimoor and Compatibility Services, from the development of custom Mooring Plans to the delivery of professionally prepared reports. These reports are formally acknowledged by stakeholders, ensuring alignment with operational and safety expectations",
    image: "/path/to/image3.jpg",
    link: "/service-3",
  },
];

export default function ServiceCards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length); // Loop to the beginning after the last card
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length); // Loop to the end when on the first card
  };

  return (
    <div className="py-8 px-6 md:px-15">
      <div className="flex items-center justify-center mb-15">
               <hr className="w-20 border-gray-400" />
               <h2 className="mx-4 text-2xl font-bold">Services</h2>
               <hr className="w-20 border-gray-400" />
      </div>
      <motion.div className="relative overflow-hidden">
        {/* Controls for mobile view */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between z-20">
          <button
            className="bg-gray-400 p-2 text-white rounded-full hover:bg-gray-600"
            onClick={handlePrev}
          >
            <FaChevronLeft />
          </button>
          <button
            className="bg-gray-400 p-2 text-white rounded-full hover:bg-gray-600"
            onClick={handleNext}
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Cards container */}
        <motion.div
          className="flex gap-6 transition-all duration-500 ease-in-out"
          initial={{ x: 0 }}
          animate={{ x: `-${currentIndex * 100}%` }}
        >
          {/* Render only 3 visible cards at a time */}
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
              <Link href={service.link} className="text-blue-600 bottom-0 inline-block hover:text-blue-800">
                  Explore
                </Link>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
