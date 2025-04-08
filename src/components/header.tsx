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
    <header className="p-2 px-6 md:px-20 shadow-lg border-b border-purple-500  rounded-b-2xl">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 1, x: -50 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 3 }} className='flex-shrink-0.5 hover:animate-bounce'>
          <Image src="/AFSS_logo.png" alt="AFSS_logo" width={150} height={100} />
        </motion.div>

        <div className="flex gap-4 items-center">
          {/* Hamburger Menu - Shown only on small screens */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}  // Start 50px to the left, invisible
            animate={{ opacity: 1, x: 0 }}    // Animate to original position
            transition={{ duration: 2 }}
            className="md:hidden justify-center items-center">
            <button className='justify-center items-center' onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </motion.div>
        </div>

        {/* Desktop Navigation - Hidden on small screens */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          className="hidden text-xl md:flex items-center">
            <SearchToggle />
            <div className="hidden font-serif text-xl md:flex gap-6 items-center 
            font-medium ml-5 mr-15 border-b-1 border-r-1 border-l-1 border-purple-600 py-0.5 px-2.5 rounded-2xl
            hover:t">
              <Link className='hover:animate-bounce' href="/">Home</Link>
              <Link className='hover:animate-bounce' href="/about">About</Link>
              <Link className='hover:animate-bounce' href="/contact">Contact</Link>
              <Link className='hover:animate-bounce' href="/our clients">Our Clients</Link>
            </div> 
          <ThemeToggle />
        </motion.div>
      </div>

      {/* Mobile Menu - Shown when menu is open */}
      {isMenuOpen && (
        <div className="absolute font-serif font-bold top-16 right-0 w-70 mt-1 border-l rounded-b-3xl z-50 shadow-lg md:hidden">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 2 }}
            transition={{ duration: 3 }}
            className="flex flex-col items-center text-black dark:text-purple-800 font-medium gap-4 p-4">
            <SearchToggle />
            <Link className='hover:animate-bounce' href="/">Home</Link>
            <Link className='hover:animate-bounce' href="/about">About</Link>
            <Link className='hover:animate-bounce' href="/contact">Contact</Link>
            <Link className='hover:animate-bounce' href="/our clients">Our Clients</Link>
            <ThemeToggle />
          </motion.div>
        </div>
      )}
    </header>
  );
}
