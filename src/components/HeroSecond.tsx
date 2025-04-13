"use client";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import React, { useState } from "react";
import PopUp from "@/components/PopUp";

function HeroSecond() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
    style={{ backgroundImage: "url('/fender1.jpg')", minHeight: '250px' }} 
    className=' h-auto pt-10 pb-10 py:10 md:py-15 px-4 md:px-8 flex flex-col md:flex-row md:space-x-25 space-y-15 md:space-y-0 items-center justify-between flex-wrap'>
  {/* First Block */}
  <div className="flex-1 flex flex-col items-center justify-center text-center">
    <IoCallOutline size={30} />
    <h2 style={{ color: "var(--accent)" }} className="font-bold text-xl mb-4 mt-3">Enquiries</h2>
    <h2 style={{ color: "var(--secondary)" }} className="text-2xl md:text-3xl font-extrabold">+911234567890</h2>
  </div>

  {/* Second Block */}
  <div className="flex-1 flex flex-col items-center justify-center text-center">
    <TfiEmail size={30} />
    <h2 style={{ color: "var(--accent)" }} className="font-bold text-xl mb-4 mt-3">Enquiries</h2>
    <h2 style={{ color: "var(--secondary)" }} className="text-2xl md:text-3xl font-extrabold">info@atlanticfenders.com</h2>
  </div>

  {/* Third Block */}
  <div className="flex-1 flex flex-col items-center justify-center text-center">
    <TfiHeadphoneAlt size={30} />
    <h2 style={{ color: "var(--accent)" }} className="font-bold text-xl mb-4 mt-3">Enquiries</h2>
    <h2
      style={{ color: "var(--secondary)" }}
      className="text-2xl md:text-3xl font-extrabold cursor-pointer hover:underline"
      onClick={() => setIsOpen(true)}
    >
      Contact Kenny
    </h2>
    <PopUp isOpen={isOpen} onClose={() => setIsOpen(false)} />
  </div>
</div>

  )
}


export default HeroSecond