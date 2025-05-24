"use client";

import { Product } from "@/sanity.types";
import useBasketStore from "@/store/store";
import { useEffect, useState } from "react";

function AddOrLessFromBasketButton({ product }: { product: Product }) {
  const { addItem, removeItem, getItemCount } = useBasketStore();
  const itemCount = getItemCount(product._id);
  const [isClient, setIsClient] = useState(false);

  const isDisabledToLess = itemCount === 1;
  const isDisabledToAdd = itemCount == product.stock;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="flex items-center justify-center gap-2"
    >
      {/* Less button */}
      <button
        onClick={() => removeItem(product._id)}
        className={`w-5 h-5 rounded-[4px] flex items-center justify-center transition duration-200 shadow-sm ${
          itemCount === 1
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-gray-500 text-white"
        }`}
        disabled={isDisabledToLess}
      >
        <span className="text-xl leading-none">-</span>
      </button>

      {/* Item number */}
      <span className="text-center ">{itemCount}</span>

      {/* Add button */}
      <button
        onClick={() => addItem(product)}
        className={`w-5 h-5 rounded-[4px] flex items-center justify-center transition duration-200 shadow-sm ${
          isDisabledToAdd
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-gray-500 text-white"
        }`}
        disabled={isDisabledToAdd}
      >
        <span className="text-xl leading-none">+</span>
      </button>
    </div>
  );
}

export default AddOrLessFromBasketButton;
