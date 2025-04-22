"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Array of partner logos
const partners = [
  { logo: "/partners/asharami.jpg" },
  { logo: "/partners/bovas.jpg" },
  { logo: "/partners/dangote.jpg" },
  { logo: "/partners/emadeb.jpg" },
  { logo: "/partners/eternal.jpg" },
  { logo: "/partners/fynfield.jpg" },
  { logo: "/partners/matrix.jpg" },
  { logo: "/partners/mrs.jpg" },
  { logo: "/partners/nepal.jpg" },
  { logo: "/partners/nnpc.jpg" },
  { logo: "/partners/ovh.jpg" },
  { logo: "/partners/pivot.jpg" },
  { logo: "/partners/prudent.jpg" },
  { logo: "/partners/rainoil.jpg" },
  { logo: "/partners/rano.jpg" },
  { logo: "/partners/sahara.jpg" },
  { logo: "/partners/total.jpg" },
  { logo: "/partners/trafigura.jpg" },
  { logo: "/partners/ultimate.jpg" },
  { logo: "/partners/vitol.jpg" },
];

const Partners = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 2 : 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };

  return (
    <section className="bg-blue-200 p-4 md:p-8 relative z-20">
        <div className="flex items-center  justify-center mb-15">
               <hr className="w-10 md:w-30 border-red-500" />
               <h2 className="mx-2 md:4 text-blue-800 text-2xl font-bold">Our Clients</h2>
               <hr className="w-10 md:w-30 border-gray-600" />
        </div>
      <div className="max-w-6xl mx-auto">
        <Slider {...sliderSettings}>
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center items-center px-4">
              <Image
                src={partner.logo}
                alt={`Partner ${index + 1}`}
                width={120}
                height={60}
                className="object-contain rounded-xl"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Partners;

