"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { motion } from "motion/react";

export default function SearchToggle() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setOpen(false);
      setQuery("");
    }
  };

  return (
    <div className="relative">
      {open ? (
        <form
          onSubmit={handleSubmit}
          className="flex items-center border border-purple-500 rounded-2xl px-2 bg-white w-50 lg:w-70 justify-center p-1.5"
        >
          <Search size={18} className="mr-2 text-purple-500" />
          <input
            type="text"
            autoFocus
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="focus:outline-none w-full text-black text-sm"
          />
          <button className="text-purple-500" type="button" onClick={() => setOpen(false)}>
            <X size={18} />
          </button>
        </form>
      ) : (
        <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y:2 }}
        transition={{ duration: 3 }}
       className=" rounded-md border-purple-500 border-b p-1.5 px-3 text-purple-800 cursor-pointer"
     onClick={() => setOpen(true)}
        >
          <Search size={18} />
        </motion.button>
      )}
    </div>
  );
}
