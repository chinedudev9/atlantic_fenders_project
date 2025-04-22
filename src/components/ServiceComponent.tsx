'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Chevron icons for controls

const services = [
  {
    title: "SHIP TO SHIP TRANSFER",
    description: "Our STS services ensure seamless supply chain operations while maintaining the highest safety standards. We provide tailored packages, round-the-clock availability, and comprehensive support to meet diverse client needs...",
    image: "/vessel/sts.jpg",
    link: "/sts",
  },
  {
    title: "MANNING",
    description: "Our internationally certified POAC s bring over a decade of mooring expertise across the Gulf of Guinea. Skilled in handling vessels ranging from Handymax to ULCC, our team has successfully executed over 3,000 STS operations...",
    image: "/images/crew.jpg",
    link: "/manning",
  },
  {
    title: "MARINE SERVICE",
    description: "We operate covered fast boats for secure personnel transfers and specialized open boats for delivering lightweight spares and provisions. Our boat services are designed to ensure prompt, safe, and reliable operations..",
    image: "/echo1/boat-services.jpg",
    link: "/marine_service",
  },
  {
    title: "BUOY & SPM SUPPORT SERVICES",
    description: "AFSS supports offshore mooring operations by providing tug-assisted positioning and mooring of tankers to buoys and SPM systems. We also offer offshore support services, including deck space and logistics support for third-party teams...",
    image: "/vessel/spmops.jpg",
    link: "/bouy_&_spm_services",
  },
  {
    title: "TURNKEY EQUIPMENT SOLUTION",
    description: "Atlantic Fenders & Support Services (AFSS) provides marine security solutions under a valid Memorandum of Understanding (MOU) with licensed government security agencies. Through this collaboration, we ensure the safe escort...",
    image: "/images/security.jpg",
    link: "/turnkey_equipment_solution",
  },
  {
    title: "WAREHOUSE & LOGISTICS SERVICES",
    description: "We offer adaptable and secure storage solutions supported by state-of-the-art warehousing facilities. Our trained staff adhere strictly to HSSE (Health, Safety, Security, and Environment) standards. By working closely with clients, we ensure...",
    image: "/images/warehouse.png",
    link: "/warehouse_&_logistics",
  },
  {
    title: "MARINE CONSULTANCY",
    description: "We offer complete Optimoor and Compatibility Services, from the development of custom Mooring Plans to the delivery of professionally prepared reports. These reports are formally acknowledged by stakeholders, ensuring alignment with operational...",
    image: "/images/mmplan.jpg",
    link: "/marine_consultancy",
  },
  {
    title: "TECHNICAL SERVICE UNIT",
    description: "AFSS Technical Services unit is responsible for ensuring the safe and efficient operation of our vessels, shore base equipment, and other assets. Our team of experts provides a range of technical services, including maintenance, dry docking...",
    image: "/images/agdrydock.jpg",
    link: "/technical_services",
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
    <div
    style={{ background: "var(--background)" }}
    className="relative py-10 px-6 md:px-15">
      <div className="flex items-center mt-10 md:mt-0 justify-center mb-10">
               <hr className="w-10 md:w-30 border-gray-600" />
               <h2 className="mx-2 md:4 text-blue-800 text-2xl font-bold"><span className='text-red-500'>Our</span> Services</h2>
               <hr className="w-10 md:w-30 border-red-500" />
      </div>
      <motion.div className="shadow-2xl overflow-hidden mb-5 rounded-2xl">
        {/* Controls for mobile view */}
        <div className="absolute text-xl md:text-2xl top-1/2 left-0 right-0 flex justify-between z-20">
          <button
            className=" p-3 hover:bg-gray-200"
            onClick={handlePrev}
          >
            <FaChevronLeft />
          </button>
          <button
            className="p-3 hover:bg-gray-200"
            onClick={handleNext}
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Cards container */}
        <motion.div
          className="flex gap-4 transition-all duration-500 ease-in-out"
          initial={{ x: 0 }}
          animate={{ x: `-${currentIndex * 100}%` }}
        >
          {/* Render only 3 visible cards at a time */}
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 flex-shrink-0 rounded-xl shadow-md hover:shadow-lg"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-60 object-cover"
              />
              <div className="md:p-4 p-3">
                <h3 className="text-xl text-blue-800 font-bold">{service.title}</h3>
                <p className=" mt-4 mb-8">{service.description}</p>
                <Link href={service.link} className="text-white rounded-md font-semibold bg-blue-700 
                      py-2 px-6   hover:text-blue-300">
                  Explore...
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
