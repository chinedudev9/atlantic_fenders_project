"use client";
import Image from 'next/image';
import React, { useState } from "react";

function HeroThird() {
  const [activeTab, setActiveTab] = useState("company");

  return (
    <div className="bg-white py-16 px-6 md:px-20">

      {/* Main Content */}
      
      <div className="w-full md:flex gap-4 items-start">
        <div className="w-full md:w-1/2">
          <Image
            src="/eleganza_building.jpg"
            alt="Office"
            width={450}
            height={300}
            className="rounded-xl shadow-md object-cover"
          />
        </div>

        {/* Right - Text and Tabs with background image */}
        <div
          className="w-full md:w-1/2 space-y-6 p-6 rounded-xl bg-cover bg-center bg-no-repeat">
            <div className="flex items-center justify-center mb-10">
               <hr className="w-20 border-gray-400" />
               <h2 className="mx-4 text-2xl font-bold text-gray-800">About Us</h2>
               <hr className="w-20 border-gray-400" />
            </div>
          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-300 pb-2">
            <button
              onClick={() => setActiveTab("company")}
              className={`text-lg font-semibold transition ${
                activeTab === "company"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              Company
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`text-lg font-semibold transition ${
                activeTab === "certificates"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              Certificates
            </button>
          </div>

          {/* Tab Content */}
          <div className="text-gray-800 text-base leading-relaxed">
            {activeTab === "company" && (
              <p className="bg-white/80 p-4 rounded-md">
                Atlantic Fenders is a leading provider of innovative marine fender solutions, offering durable and high-performance products designed for maximum protection in ports and ship-to-ship operations. We are committed to safety, reliability, and engineering excellence.
              </p>
            )}
            {activeTab === "certificates" && (
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/cert1.jpg"
                  alt="Certificate 1"
                  width={300}
                  height={200}
                  className="rounded-lg shadow"
                />
                <Image
                  src="/images/cert2.jpg"
                  alt="Certificate 2"
                  width={300}
                  height={200}
                  className="rounded-lg shadow"
                />
              </div>
            )}
          </div>

          <p className="text-blue-600 mt-4">Read More</p>
        </div>
      </div>
    </div>
  );
}

export default HeroThird;
