"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="fixed top-[40%] right-0 z-50 flex flex-col font-inter">
  <button
    onClick={() => setCurrency("SAR")}
    className={`flex items-center gap-1 pl-4 pr-2 py-2 rounded-l-[6px] shadow font-medium text-sm duration-200 border border-r-0 transition-transform hover:scale-[1.1] ${
      currency === "SAR"
        ? "bg-[#d7931b] text-white border-gray-300"
        : "bg-white text-black border-gray-300"
    }`}
  >
    SAR
    <span className={`text-white ${currency === "SAR" ? "block" : "hidden"}`}>✔</span>
  </button>

  <button
    onClick={() => setCurrency("AED")}
    className={`flex items-center gap-1 pl-4 pr-2 py-2 rounded-l-[6px] shadow font-medium text-sm duration-200 border border-r-0 transition-transform hover:scale-[1.1] ${
      currency === "AED"
        ? "bg-[#d7931b] text-white border-gray-300"
        : "bg-white text-black border-gray-300"
    }`}
  >
    AED
    <span className={`text-white ${currency === "AED" ? "block" : "hidden"}`}>✔</span>
  </button>
</div>

  );
}
