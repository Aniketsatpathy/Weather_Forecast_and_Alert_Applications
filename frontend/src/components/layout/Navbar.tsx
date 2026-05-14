"use client";

import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav
      className="glass-nav fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-4xl px-6 py-3 flex items-center justify-between"
    >
      {/* LEFT */}
      <div className="flex items-center gap-10">

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <div className="w-8 h-8 rounded-full bg-orange-500" />

          <h1 className="text-lg font-semibold tracking-tight">
            WeatherAnalysts
          </h1>

        </div>

        {/* LINKS */}
        <div className="hidden lg:flex items-center gap-7 text-[15px] text-white/80">

          <button>Weather APIs</button>

          <button>Pricing</button>

          <button>Marketplace</button>

          <button>Maps</button>

          <button>News</button>

          <button>Support</button>

        </div>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        {/* SEARCH */}
        <div className="relative">

          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-black/50"
          />

          <input
            placeholder="Search city..."
            className="w-[220px] rounded-full bg-white text-black text-sm pl-11 pr-4 py-2.5 outline-none"
          />

        </div>

      </div>
    </nav>
  );
}