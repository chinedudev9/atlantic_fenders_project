"use client";
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import SearchToggle from "@/components/SearchToggle";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();




  return (
    <header className="sticky top-0 z-50 py-2 pl-6 pr-4 shadow-2xl rounded-b-3xl md:rounded-b-none"
      style={{ backgroundColor: "var(--background)" }}>
      <div className="flex justify-between md:h-15 items-center max-w-6xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 1, x: 50 }}
          animate={{ opacity: 1, x: 5 }}
          transition={{ duration: 3 }}
           className='flex-shrink-0.5 w-auto hover:animate-bounce'>
          <Image src="/AFSS_logo.png" alt="AFSS_logo" width={120} height={40} className='w-[25vh]'/>
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
            <div className="hidden font-medium md:flex gap-5 items-center justify-center
            font-xl ml-5 mr-10 py-0.5 px-2.5">
              <Link href="/" className={`relative pb-1.5  ${
                pathname === '/' ? 'hover:text-blue-800' : ''}`}>
                HOME {pathname === '/' && (<span className="absolute left-0 bottom-0 h-[2px] w-full bg-purple-500"></span>)}
              </Link>
              <Link href="/company" className={`relative pb-1.5  ${
                pathname === '/company' ? 'hover:text-blue-800' : ''}`}>
                COMPANY {pathname === '/company' && (<span className="absolute left-0 bottom-0 h-[2px] w-full bg-purple-500"></span>)}
              </Link>
              <Link href="/services" className={`relative pb-1.5  ${
                pathname === '/services' ? 'hover:text-blue-800' : ''}`}>
                SERVICES {pathname === '/services' && (<span className="absolute left-0 bottom-0 h-[2px] w-full bg-purple-500"></span>)}
              </Link>
              <Link href="/fleets" className={`relative pb-1.5  ${
                pathname === '/fleets' ? 'hover:text-blue-800' : ''}`}>
                FLEETS {pathname === '/fleets' && (<span className="absolute left-0 bottom-0 h-[2px] w-full bg-purple-500"></span>)}
              </Link>
              <Link href="/news" className={`relative pb-1.5  ${
                pathname === '/news' ? 'hover:text-blue-800' : ''}`}>
                NEWS {pathname === '/news' && (<span className="absolute left-0 bottom-0 h-[2px] w-full bg-purple-500"></span>)}
              </Link>
              <Link href="/gallery" className={`relative pb-1.5  ${
                pathname === '/galley' ? 'hover:text-blue-800' : ''}`}>
                GALLERY {pathname === '/gallery' && (<span className="absolute left-0 bottom-0 h-[2px] w-full bg-purple-500"></span>)}
              </Link>
              <Link href="/career" className={`relative pb-1.5  ${
                pathname === '/career' ? 'hover:text-blue-800' : ''}`}>
                CAREER {pathname === '/career' && (<span className="absolute left-0 bottom-0 h-[2px] w-full bg-purple-500"></span>)}
              </Link>
            </div> 
          <ThemeToggle />
        </motion.div>
      </div>

      {/* Mobile Menu - Shown when menu is open */}
      {isMenuOpen && (
        <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 2 }}
        transition={{ duration: 2 }}
        className="absolute top-16 right-0 w-55 mt-0.5 border-l rounded-b-3xl z-50 shadow-lg lg:hidden"
        style={{ backgroundColor: "var(--background)" }}>
          <motion.div
            initial={{ opacity: 1, x: 50 }}
            animate={{ opacity: 1, x: 2 }}
            transition={{ duration: 2 }}
            className="flex flex-col items-center gap-4 p-4">
            <SearchToggle />
              <Link className='font-semibold hover:text-blue-800' href="/">HOME</Link>
              <Link className='font-semibold hover:text-blue-800' href="/company">COMPANY</Link>
              <Link className='font-semibold hover:text-blue-800' href="/services">SERVICES</Link>
              <Link className='font-semibold hover:text-blue-800' href="/fleets">FLEETS</Link>
              <Link className='font-semibold hover:text-blue-800' href="/news">NEWS</Link>
              <Link className='font-semibold hover:text-blue-800' href="/gallery">GALLERY</Link>
              <Link className='font-semibold hover:text-blue-800' href="/career">CAREER</Link>
            <ThemeToggle />
          </motion.div>
        </motion.div>
      )}
    </header>
  );
}
