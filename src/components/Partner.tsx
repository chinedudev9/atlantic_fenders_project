"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useEffect, useState } from "react";

const partners = [
  { name: "Partner 1", logo: "/partners/partner1.png" },
  { name: "Partner 2", logo: "/partners/partner2.png" },
  { name: "Partner 3", logo: "/partners/partner3.png" },
  { name: "Partner 4", logo: "/partners/partner4.png" },
  { name: "Partner 5", logo: "/partners/partner5.png" },
];

const Partners = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <section className="bg-white py-12 px-6 md:px-12">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Our Partners
      </h2>

      <div className="max-w-4xl mx-auto">
        {isMobile ? (
          <Slider {...sliderSettings}>
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex justify-center items-center h-24"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center items-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Partners;
