"use client";

import useCurrencyStore from "@/store/currencyStore";
import { useEffect, useState } from "react";

export default function CurrencySwitcher() {
  const currency = useCurrencyStore((state) => state.currency);
  const setCurrency = useCurrencyStore((state) => state.setCurrency);
  const [hydrated, setHydrated] = useState(false);

  // ✅ Wait for hydration to avoid SSR mismatch
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <div className="fixed top-[40%] right-0 z-50 flex flex-col font-inter">
      {["SAR", "AED"].map((curr) => (
        <button
          key={curr}
          onClick={() => setCurrency(curr as "SAR" | "AED")}
          className={`flex items-center gap-1 pl-4 pr-2 py-2 rounded-l-[6px] shadow font-medium text-sm duration-200 border border-r-0 transition-transform hover:scale-[1.1] ${
            currency === curr
              ? "bg-[#d7931b] text-white border-gray-300"
              : "bg-white text-black border-gray-300"
          }`}
        >
          {curr}
          <span
            className={`text-white ${currency === curr ? "block" : "hidden"}`}
          >
            ✔
          </span>
        </button>
      ))}
    </div>
  );
}
