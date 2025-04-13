// src/components/CookieBanner.tsx
"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import { motion } from "motion/react";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    if (showBanner) {
      document.body.classList.add("cookie-overlay");
    } else {
      document.body.classList.remove("cookie-overlay");
    }
  }, [showBanner]);

  const acceptCookies = () => {
    Cookies.set("cookie_consent", "accepted", { expires: 365 });
    setShowBanner(false);
  };

  const rejectCookies = () => {
    Cookies.set("cookie_consent", "rejected", { expires: 60 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <motion.div
    style={{ backgroundColor: "var(--background)" }} 
     className="fixed bottom-0 left-0 right-0 z-50 rounded-t-2xl px-4 py-2 flex 
        flex-col md:flex-row justify-between mb-1 items-center border-t text-sm">
      <p className="">
        Atlantic Fenders value your experience and want to enhance it. By continuing to visit this site you agree to our  
        <Link className=" hover:underline text-blue-600" href={'/privacypage'}> privacy policy.</Link> We would not at anytime sell or share your data with a third party.
      </p>
      <div className="mt-2 font-semibold md:mt-0 md:flex space-x-5">
        <button
          onClick={rejectCookies}
          className="px-8 py-1.5 border border-purple-950 hover:text-white hover:bg-purple-700 rounded-2xl"
        >
          Reject
        </button>
        <button
          onClick={acceptCookies}
          className="px-8 py-1.5 bg-purple-950 text-white rounded-2xl font-semibold hover:bg-purple-700"
        >
          Accept
        </button>
      </div>
    </motion.div>
  );
};

export default CookieBanner;
