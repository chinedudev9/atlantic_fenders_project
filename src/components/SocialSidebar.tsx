// src/components/SocialSidebar.tsx
"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <motion.div 
    initial={{opacity: 0, y: -20}}
    animate={{opacity: 1, y: 2}}
    transition={{duration: 2}} 
     className="fixed right-0 top-1/3 z-30 flex flex-col mr-1 space-y-5 p-2 rounded-l-lg shadow-lg">
      <a
        href="https://facebook.com/yourPage"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition"
      >
        <FaFacebookF size={20} />
      </a>
      <a
        href="https://twitter.com/yourHandle"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-500 hover:text-sky-700 transition"
      >
        <FaTwitter size={20} />
      </a>
      <a
        href="https://instagram.com/yourPage"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-700 transition"
      >
        <FaInstagram size={20} />
      </a>
      <a
        href="https://linkedin.com/in/yourProfile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-800 hover:text-blue-900 transition"
      >
        <FaLinkedinIn size={20} />
      </a>
      <a
        href="https://tiktok.com/@yourPage"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-gray-800 transition"
      >
        <FaTiktok size={20} />
      </a>
    </motion.div>
  );
};

export default SocialSidebar;
