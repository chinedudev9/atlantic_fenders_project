"use client";
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
    <div ref={ref} className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-4xl font-extrabold text-blue-700">
              {inView && (
                <CountUp
                  start={0}  // Start from 0 each time the element is in view
                  end={stat.value}
                  duration={5}  // Duration of the animation
                  separator=","
                //  prefix={stat.prefix || ""}
                  suffix={stat.suffix || ""}
                />
              )}
            </h3>
            <p className="text-gray-700 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
