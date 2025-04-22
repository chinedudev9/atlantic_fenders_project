"use client";
import { motion } from "framer-motion";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    value: 1000000,
    suffix: "+",
    label: "MAN-HOURS",
  },
  {
    value: 0,
    suffix: "",
    label: "CRITICAL INCIDENTS",
  },
  {
    value: 65000,
    suffix: "+",
    label: "TOTAL BARRELS TRANSFERRED",
  },
  {
    value: 0,
    suffix: "",
    label: "SPILLAGE INCIDENTS",
  },
];

export default function StatsCounter() {
  const { ref, inView } = useInView({
    triggerOnce: false,  // Allow triggering multiple times as you scroll
    threshold: 0.1,      // Trigger when 20% of the element is in view
  });

  return (
    <motion.div
      ref={ref}
      className="bg-gray-300 py-16 relative z-20 px-6 rounded-4xl md:px-8"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 2, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-3">
            <h3 className="md:text-4xl font-bold text-3xl text-blue-800">
              {inView && (
                <CountUp
                  start={0}  // Start from 0 each time the element is in view
                  end={stat.value}
                  duration={7}  // Duration of the animation
                  separator=","
                //  prefix={stat.prefix || ""}
                  suffix={stat.suffix || ""}
                />
              )}
            </h3>
            <p className="text-gray-800 font-serif font-semibold">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
