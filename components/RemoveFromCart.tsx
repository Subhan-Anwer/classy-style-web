"use client";

import { toast } from "@/hooks/use-toast";
import { Product } from "@/sanity.types";
import useBasketStore from "@/store/store";
import { useEffect, useState } from "react";
import { ToastAction } from "./ui/toast";

function RemoveFromCart({ product }: { product: Product; disabled: boolean }) {
  const { addItem, removeItem, getItemCount } = useBasketStore();
  const itemCount = getItemCount(product._id);
  const [isClient, setIsClient] = useState(false);

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
      className="flex items-center justify-center font-inter ml-4"
    >
      {/* Remove / Cross button */}
      <button
        onClick={() => {
          for (let i = 0; i < itemCount; i++) {
            removeItem(product._id);
          }
          // removeItem(product._id)
          toast({
            title: "Removed from Cart!",
            description: `${product.name} removed.`,
            //   add back button to add back removed item
            action: (
              <ToastAction
                altText="Add Back"
                onClick={() => {
                  for (let i = 0; i < itemCount; i++) {
                    addItem(product);
                  }
                }}
              >
                Add Back
              </ToastAction>
            ),

            duration: 2500,
          });
        }}
        className={`w-5 h-5 text-[16px]  flex items-center justify-center transition-colors duration-200 bg-red-500 text-white`}
      >
        x
      </button>
    </div>
  );
}

export default RemoveFromCart;
