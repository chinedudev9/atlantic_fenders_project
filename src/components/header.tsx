"use client";
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { motion } from "motion/react";
import SearchToggle from "@/components/SearchToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 py-2 pl-6 pr-4 shadow-2xl rounded-b-2xl"
      style={{ backgroundColor: "var(--background)" }}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 1, x: -50 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 3 }}
           className='flex-shrink-0.5 hover:animate-bounce'>
          <Image src="/AFSS_logo.png" alt="AFSS_logo" width={150} height={100} />
        </motion.div>

        <div className="flex gap-4 items-center">
          {/* Hamburger Menu - Shown only on small screens */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}  // Start 50px to the left, invisible
            animate={{ opacity: 1, x: 0 }}    // Animate to original position
            transition={{ duration: 2 }}
            className="lg:hidden md:pr-8 justify-center items-center">
            <button className='justify-center items-center cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </motion.div>
        </div>

        {/* Desktop Navigation - Hidden on small screens */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          className="hidden lg:flex items-center">
            <SearchToggle />
            <div className="hidden md:flex gap-5 items-center 
            font-xl ml-5 mr-10 py-0.5 px-2.5 rounded-2xl">
              <Link className='' href="/">HOME</Link>
              <Link className='' href="/company">COMPANY</Link>
              <Link className='' href="/service">SERVICES</Link>
              <Link className='' href="/fleets">FLEETS</Link>
              <Link className='' href="/latest_news">NEWS</Link>
              <Link className='' href="/gallery">GALLERY</Link>
              <Link className='' href="/Job_board">JOB BOARD</Link>
            </div> 
          <ThemeToggle />
        </motion.div>
      </div>

      {/* Mobile Menu - Shown when menu is open */}
      {isMenuOpen && (
        <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 2 }}
        transition={{ duration: 3 }}
        className="absolute top-16 right-0 w-55 mt-0.5 border-l rounded-b-3xl z-50 shadow-lg lg:hidden"
        style={{ backgroundColor: "var(--background)" }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 2 }}
            transition={{ duration: 3 }}
            className="flex flex-col items-center gap-4 p-4">
            <SearchToggle />
              <Link className='' href="/">HOME</Link>
              <Link className='' href="/company">COMPANY</Link>
              <Link className='' href="/service">SERVICES</Link>
              <Link className='' href="/fleets">FLEETS</Link>
              <Link className='' href="/latest_news">NEWS</Link>
              <Link className='' href="/gallery">GALLERY</Link>
              <Link className='' href="/Job_board">JOB BOARD</Link>
            <ThemeToggle />
          </motion.div>
        </motion.div>
      )}
    </header>
  );
}
