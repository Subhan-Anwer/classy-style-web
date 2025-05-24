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
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-[550px] h-32 border-2 border-black rounded-[8px] flex items-center justify-between px-8">
      {/* Quantity slector */}
      <div className="flex items-center gap-3">
        <p className="font-inter font-medium text-base">Quantity</p>
        <input
          type="number"
          min={0}
          max={product.stock}
          disabled={disabled}
          value={selectedQuantity}
          className="w-[75px] max-w-24 py-2 px-4 border border-black focus:outline-none rounded caret-[#B9B9B9]"
          placeholder="0"
          onChange={(e) => {
            const value = parseInt(e.target.value);
            setSelectedQuantity(isNaN(value) ? 0 : Math.max(0, value));
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
            setSelectedQuantity(0); // Reset after adding to basket
          }
        }}
        disabled={selectedQuantity === 0}
        className="hover: font-inter font-bold text-base bg-black text-white hover:bg-black hover:scale-105 focus:outline-none active:scale-100 rounded-[6px] p-6 transition-all"
      >
        Add to Cart
      </Button>
    </div>
  );
}

export default AddToBasketButton;
