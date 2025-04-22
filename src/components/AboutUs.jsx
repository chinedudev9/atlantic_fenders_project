"use client";
import Image from 'next/image';
import React, { useState } from "react";
import { FaUserTie, FaUsers } from "react-icons/fa"
import { GiJusticeStar } from "react-icons/gi"
import { MdSupportAgent, MdHealthAndSafety } from "react-icons/md"

function HeroThird() {
  const [activeTab, setActiveTab] = useState("company");

  return (
    <div className="md:py-16 pb-4 px-6  md:px-20 relative z-30"
    style={{ backgroundColor: "var(--background)" }}>

      {/* Main Content */}
      <div className="w-full md:flex gap-6 items-start">
        {/* Business Priority - Left Column */}
        <div className="w-full md:w-1/2">
        <div className="flex items-center justify-center pt-10 md:pt-0 mb-8">
               <hr className="w-10 md:w-20  border-red-500" />
               <h2 className="mx-2 md:mx-4 text-2xl md:text-3xl font-bold text-blue-700">Business Focus</h2>
               <hr className="w-10 md:w-20 border-gray-600" />
            </div>
          <div className="space-y-4 px-10 pb-8  justify-center rounded-xl shadow-2xl shadow-gray-400 items-center">
            <div className="flex items-start gap-4 ">
              <FaUserTie size={25}/>
              <div>
                <h3 className="text-xl font-bold text-blue-700">Professionalism</h3>
                <p className="">At Atlantic Fenders & Support Services, professionalism is embedded in every aspect of our operations</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <GiJusticeStar size={25}/>
              <div>
                <h3 className="text-xl font-bold text-blue-700">Integrity</h3>
                <p className="">We operate with transparency, honesty, and accountability to build lasting trust with our clients and partners.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaUsers size={25}/>
              <div>
                <h3 className="text-xl font-bold text-blue-700">Team Work</h3>
                <p className="">Teamwork is the backbone of our success, where every department works seamlessly together to ensure efficient and reliable offshore support services</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MdSupportAgent size={25}/>
              <div>
                <h3 className="text-xl font-bold text-blue-700">Customer Focus</h3>
                <p className="">At Atlantic Fenders, our clients are at the heart of everything we do. We go above and beyond to understand their unique needs and deliver tailored solutions that exceed expectations</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MdHealthAndSafety size={25}/>
              <div>
                <h3 className="text-xl font-bold text-blue-700">Health & Safety</h3>
                <p className="">We constantly evolve by implementing innovative solutions for marine logistics.</p>
              </div>
            </div>
          </div>
        </div>
      


        {/* Right - Text and Tabs with background image */}
        <div
          className="w-full md:w-1/2 space-y-6  rounded-xl bg-cover bg-center bg-no-repeat">
            <div className="flex items-center justify-center pt-10 md:pt-0">
               <hr className="w-10 md:w-20  border-red-500" />
               <h2 className="mx-2 md:mx-4 text-2xl md:text-3xl font-bold text-blue-700">About <span className='text-red-500'>Us</span></h2>
               <hr className="w-10 md:w-20 border-gray-600" />
            </div>
          {/* Tabs */}
          <div className="flex font-semibold text-xl items-center justify-center gap-6 border-b border-gray-300 pb-2">
            <button
              onClick={() => setActiveTab("company")}
              className={`font-semibold text-xl transition ${
                activeTab === "company"
                  ? "text-blue-800 border-b-1 cursor-pointer border-gray-600"
                  : " hover:text-blue-500"
              }`}
            >
              Company
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`text-lg transition ${
                activeTab === "certificates"
                  ? "text-blue-800 border-b-1 border-gray-600"
                  : " hover:text-blue-400 cursor-pointer"
              }`}
            >
              Certificates
            </button>
          </div>

          {/* Tab Content */}
          <div className=" text-base leading-relaxed">
            {activeTab === "company" && (
              <p className=" items-center justify-center h-auto md:px-10 md:mx-10 px-4 p-3 rounded-xl mt-1 shadow-2xl shadow-gray-600">
                Atlantic Fenders & Support Services (AFSS) is a certified marine logistics and offshore support company 
                proudly serving the Marine Oil & Gas industry across West Africa. With a Document of Compliance (DOC) and certifications in 
                <span className='font-bold text-blue-700'> ISO 9001, ISO 14001, 
                and ISO 45001,</span> our operations meet international standards of safety, quality, and environmental responsibility... 
                <p className="text-white py-1.5 px-2 w-30 text-center rounded-xl font-semibold mt-20 hover:text-blue-200 cursor-pointer bg-blue-700">Read More...</p>
              </p>
            )}
            {activeTab === "certificates" && (
              <div className="grid grid-cols-2 gap-2">
                <Image
                  src="/certs/cert1.png"
                  alt="Certificate 1"
                  width={200}
                  height={100}
                  className="rounded-lg shadow"
                />
                <Image
                  src="/certs/cert2.png"
                  alt="Certificate 2"
                  width={200}
                  height={100}
                  className="rounded-lg shadow"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroThird;
