"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const LogoHeader = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Fix SSR hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-between max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 1, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3 }}
        className="flex items-center gap-2"
      >
        {/* Logo: visible only in light mode */}
        <Image
          src="/AFSS_logo.png"
          alt="AFSS Logo"
          width={150}
          height={100}
          className="object-contain dark:hidden"
        />

        {/* Text: visible only in dark mode */}
        <span className="text-xl font-bold hidden dark:inline text-white">
          Atlantic Fender
        </span>
      </motion.div>
    </div>
  );
};

export default LogoHeader;
