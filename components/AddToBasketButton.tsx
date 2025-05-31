"use client";

import { Product } from "@/sanity.types";
import useBasketStore from "@/store/store";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "./ui/toast";

function AddToBasketButton({
  product,
  disabled,
}: {
  product: Product;
  disabled: boolean;
}) {
  const { addItem } = useBasketStore();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-full max-w-[550px] h-auto border-2 border-black rounded-[8px] flex flex-col sm:flex-row items-center justify-between gap-4  px-8 py-6">
      {/* Quantity slector */}
      <div className="flex items-center gap-3">
        <p className="font-inter font-medium text-base">Quantity</p>
        <input
          type="number"
          min={1}
          max={product.stock}
          disabled={disabled}
          value={selectedQuantity}
          className="w-[75px] max-w-24 py-2 px-4 border border-black focus:outline-none rounded caret-[#B9B9B9]"
          placeholder="0"
          onChange={(e) => {
            const value = parseInt(e.target.value);
            setSelectedQuantity(isNaN(value) ? 1 : Math.max(1, value));
          }}
        />
      </div>

      <Button
        onClick={() => {
          if (selectedQuantity > 0) {
            for (let i = 0; i < selectedQuantity; i++) {
              addItem(product);
            }
            toast({
              title: "Added to Cart!",
              description: `${product.name} x ${selectedQuantity} added.`,
              duration: 2500,
              action: <ToastAction altText="View Cart" onClick={() => {
                window.open("/cart") // Redirect to cart page
              }}>View Cart</ToastAction>,
            });
            setSelectedQuantity(1); // Reset after adding to basket
          }
        }}
        disabled={disabled}
        className="md:w-auto w-full hover: font-inter font-bold text-base bg-black text-white hover:bg-black hover:scale-105 focus:outline-none active:scale-100 rounded-[6px] p-6 transition-all"
      >
        Add to Cart
      </Button>
    </div>
  );
}

export default AddToBasketButton;
