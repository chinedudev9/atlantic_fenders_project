"use client";

import Slider from "react-slick";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const policies = [
  {
    title: "Environmental Policy",
    content:
      "Atlantic Fenders & Support Services (AFSS) is an environmentally sentient company and as such, we recognize the potential impacts that our operations may have on the environment. Our activities include a range of integrated solutions aimed at providing Vessel Ping, logistics, and marine services to our customers. It is the responsibility of each AFSS personnel to perform his work in an environmentally sound manner. To ensure that this policy is compatible...",
  },
  {
    title: "Occupational Health & Safety Policy",
    content:
      "Atlantic Fenders & Support Services (AFSS) understands that long-term business success depends on our ability to continually improve our occupational Health, Safety, and Environmental  policies and procedures to protect our staff, Assets, surroundings, and Reputation in carrying out Maritime services. Prominence is placed on human health, operational safety, environmental protection, enhancement of service quality, and community friendliness. This policy is...",
  },
  {
    title: "Quality Management Policy",
    content:
      "Atlantic Fenders & Support Services (AFSS) identifies that quality is critical to the success of our business and we have integrated it into all working practices in our organization. We are committed to supplying our customers with high-quality integrated Vessel Ping solutions logistics and marine services that conform to their requirements. Our aim is to meet and exceed our customers’ expectations consistently in every operational area...",
  },
  {
    title: "Risk Assessement Policy",
    content:
      "Atlantic Fenders & Support Services (AFSS) is committed to proactively identifying, evaluating, and mitigating risks that may affect its operations, personnel, assets, clients and stakeholders. This policy provides a structured approach to risk assessment and establishes a clear framework for contingency planning to ensure operational continuity and resilience. Risk assessment in Atlantic Fenders & Support Services is a continuous process...",
  },
  {
    title: "Sustainability Policy",
    content:
      "Our vision at Atlantic Fenders & Support Services (AFSS) is to be the preferred world leader for sustainability innovations and marine mobility solutions. We are committed to achieving this by developing a fully integrated management system. We operate on the principle that sustainability thinking is a pathway to shared prosperity. We are committed to our operation's sustainable development goals and entrenched principles. For our business, we are committed...",
  },
  {
    title: "Drug & Alcohol Policy",
    content:
      "Atlantic Fenders & Support Services (AFSS) recognize that the use of Alcohol & drugs will impair an individual’s ability to perform safely. This policy is used by AFSS to mitigate that risk. Drugs & Alcohol. Atlantic Fenders & Support Services do not encourage the use of alcohol during work hours, under this policy, alcohol impairment is defined as a blood/alcohol content of 0.05% for Blood and 0.25mg/1 for breath.  Atlantic Fenders & Support Services will...",
  },
];

const PolicySlider = () => {
  const [isMobile, setIsMobile] = useState(false);
  let sliderRef: Slider | null = null;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    fade: true,
  };

  return (
    <section 
    style={{ backgroundImage: "url('/equipment/fenders.jpg')" }}
    className="relative text-gray-800 py-3 sm:px-10 h-[40vh] lg:px-20 rounded-t-2xl">
        <div className="flex items-center  justify-center mb-8">
               <hr className="w-10 md:w-30 border-red-500" />
               <h2 className="mx-2 md:4 text-blue-800 text-2xl font-bold">Our Policies</h2>
               <hr className="w-10 md:w-30 border-gray-600" />
        </div>
      <div className="max-w-4xl mx-auto relative">
        {!isMobile && (
          <button
            onClick={() => sliderRef?.slickPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 hover:border-1 p-2 rounded-full shadow cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        <Slider ref={(slider) => { sliderRef = slider; }} {...settings}>
          {policies.map((policy, idx) => (
            <div
              key={idx}
              className="bg-blue-100 md:h-auto px-4 py-6 rounded-md mx-4 shadow-lg text-center relative z-30"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-4">
                {policy.title}
              </h3>
              <p className=" sm:text-lg text-gray-700">
                {policy.content}
              </p>
            </div>
          ))}
        </Slider>

        {!isMobile && (
          <button
            onClick={() => sliderRef?.slickNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 hover:border-1 p-2 cursor-pointer rounded-full shadow"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </section>
  );
};

export default PolicySlider;
