"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ placeholder = "Search..." }) {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 bg-white border rounded-xl px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
        <Search className="w-5 h-5 text-gray-500" />

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="flex-1 outline-none text-gray-700 bg-transparent"
        />
      </div>
    </div>
  );
}
