// src/components/LiveChatWidget.tsx
"use client";

import { useEffect } from "react";

const LiveChatWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/67f110beae8585190ac87477/1io2qiqrn";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      // Optional: Clean up script if needed
      const existingScript = document.querySelector(
        'script[src="https://embed.tawk.to/67f110beae8585190ac87477/1io2qiqrn"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // We don’t render anything
};

export default LiveChatWidget;
