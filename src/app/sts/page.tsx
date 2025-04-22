"use client";

import Slider from "react-slick";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/stsimage/3pfconfig.png",
    caption: "Deploying 3 Primary Fender System",
  },
  {
    src: "/stsimage/4pfconfig.png",
    caption: "Deploying 4 Primary Fender System",
  },
  {
    src: "/stsimage/5pfconfig.png",
    caption: "Deploying 5 Primary Fender System",
  },
  {
    src: "/stsimage/6pfconfig.png",
    caption: "Deploying 6 Primary Fender System",
  },
];

const STSCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);
  let sliderRef: Slider | null = null;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    swipe: true,
    customPaging: (i: any) => (
      <div className="w-10 h-1 bg-black mx-1"></div>
    ),
    dotsClass: "slick-dots slick-thumb flex justify-center items-center absolute bottom-4 left-0 right-0",
  };

  return (
    <div>
    <div className="relative rounded-xl overflow-hidden md:mx-50 mt-10">
        <div>
            <h2 className="text-center text-2xl sm:text-3xl font-bold mb-10">
                SHIP TO SHIP SERVICES
            </h2>
        </div>
      {!isMobile && (
        <button
          onClick={() => sliderRef?.slickPrev()}
          className="absolute text-black z-10 left-4 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 hover:border-1 rounded-full"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      <Slider ref={(slider) => { sliderRef = slider; }} {...settings}>
        {images.map((item, idx) => (
          <div key={idx} className="relative w-full h-[80vh]">
            <Image
              src={item.src}
              alt={item.caption}
              fill
              className=""
              priority
            />
            <div className="absolute inset-0 bg-opacity-30 flex items-end justify-center text-center p-4">
              <p className="text-black text-sm sm:text-lg font-medium">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      {!isMobile && (
        <button
          onClick={() => sliderRef?.slickNext()}
          className="absolute z-10 right-4 top-1/2 transform -translate-y-1/2 bg-white/70 text-black p-2 hover:border-1 rounded-full"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
    <p className="text-center text-xl sm:text-lg mb-8">
              Fendering Systems
            </p>
    </div>
  );
};

export default STSCarousel;
