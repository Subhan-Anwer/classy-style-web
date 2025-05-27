// components/SearchOverlay.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchOverlay({ onClose }: { onClose: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); // 👈 wrapper for form
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Focus input on open
    inputRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose(); // Close on ESC
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside); // 👈

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside); // 👈
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div ref={containerRef} className="w-full sm:w-auto flex-1 max-w-2xl">
        <form
          action="/search"
          method="GET"
          onSubmit={(e) => {
            e.preventDefault();
            router.push(`/search?query=${query}`);
            onClose(); // now safe to close overlay
          }}
        >
          <div className="flex items-center relative">
            <input
              type="text"
              name="query"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for Items..."
              className="w-full px-4 py-3 rounded-[6px] bg-white text-black text-lg shadow-lg outline-none focus:ring-2 focus:ring-yellow-600"
              ref={inputRef}
            />

            {/* Search icon button */}
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black"
              aria-label="Search"
            >
              <IoSearch size={22} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
