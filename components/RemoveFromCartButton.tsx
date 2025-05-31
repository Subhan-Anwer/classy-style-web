"use client";

import { toast } from "@/hooks/use-toast";
import { Product } from "@/sanity.types";
import useBasketStore from "@/store/store";
import { useEffect, useState } from "react";
import { ToastAction } from "./ui/toast";

function RemoveFromCartButton({ product }: { product: Product; disabled: boolean }) {
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
      className="flex items-center justify-center font-inter"
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
        className={`w-auto h-8 text-sm px-4 rounded-[6px] mt-2 sm:hidden flex items-center justify-center transition-colors duration-200 bg-black text-white`}
      >
        Remove from Cart
      </button>
    </div>
  );
}

export default RemoveFromCartButton;
