// components/ThemeToggle.js
"use client"; // Important for Next.js
import { useTheme } from "@/context/ThemeContext";
import {Switch} from "@heroui/switch";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-0.5 rounded items-center flex justify-center hover:animate-bounce">
      {theme === "dark" ? "⚓" : "⚓"}
    </button>
  );
}
