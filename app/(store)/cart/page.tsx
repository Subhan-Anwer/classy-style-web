"use client";

import AddOrLessFromBasketButton from "@/components/AddOrLessFromBasketButton";
import RemoveFromCart from "@/components/RemoveFromCart";
import Loader from "@/components/ui/Loader";
import { imageUrl } from "@/lib/imageUrl";
import useBasketStore from "@/store/store";
import { SignInButton, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CartPage() {
  const router = useRouter();
  const groupedItems = useBasketStore((state) => state.getGroupedItems());
  const { isSignedIn } = useAuth();
  // const { user } = useUser();

  const [isClient, setIsClient] = useState(false);
  const [isLoading,setIsLoading] = useState(false);

  // wait for the client to mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Check if the component is running on the client side
  if (!isClient) {
    // If not, return a loading spinner component
    return <Loader />;
  }

  // If there are no items in the cart, display an empty cart message
  if (groupedItems.length === 0) {
    return (
      <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-5xl font-semibold mb-10 text-center  text-black">
          Your Cart is Empty!
        </h1>

        <Link href={"/shop"}>
          <button className="bg-black text-white px-6 py-3 rounded-[6px] font-poppins ">
            Start Shopping
          </button>
        </Link>
      </div>
    );
  }

  

  return (
    <div className="container min-h-[80vh] mt-6 mx-auto p-4 max-w-6xl">
      <h1 className="text-5xl font-semibold mb-10 text-center  text-black">
        Your Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product List */}
        <div className="flex-grow">
          {groupedItems?.map((item) => (
            <div
              key={item.product._id}
              className="mb-4 p-4 border border-[#838383] rounded-[6px] flex flex-col sm:flex-row items-center justify-between"
            >
              <div
                className="w-[80%] sm:w-auto flex sm:flex-row flex-col items-center cursor-pointer flex-1 min-w-0"
                onClick={() =>
                  window.open(
                    `/products/${item.product.slug?.current}`,
                    "_blank"
                  )
                }
              >
                {/* Product Image */}
                <div className="w-full h-auto sm:w-24 sm:h-24 flex-shrink-0 sm:mr-4 mr-0">
                  {item.product.image && (
                    <Image
                      src={imageUrl(item.product.image).url()}
                      alt={item.product.name ?? "Product image"}
                      className="w-full h-full object-cover rounded"
                      width={500}
                      height={500}
                      quality={100}
                    />
                  )}
                </div>

                {/* Product Name & Price */}
                <div className="min-w-0 font-poppins text-center text-black sm:text-left">
                  {/* Product Name & Remove Button */}
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg mb-1 sm:text-xl font-semibold sm:truncate">
                      {item.product.name}
                    </h2>
                    <RemoveFromCart product={item.product} disabled={false} />
                  </div>
                  <p className="text-sm sm:text-base text-[#565656]">
                    Price: SAR {item.product.price?.toFixed(2)}
                  </p>
                  <div className="flex gap-2">
                    <p className="text-sm sm:text-base text-[#565656]">
                      Quantity:
                    </p>
                    <AddOrLessFromBasketButton product={item.product} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="w-full lg-w-80 lg:sticky lg:top-4 h-fit bg-white p-6 border border-[#838383] rounded-[6px] order-first lg:order-last fixed bottom-0 left-0 lg:left-auto">
          <h3 className="text-2xl font-semibold">Order Summary</h3>

          <div className="mt-5 space-y-2">
            <p className="flex font-poppins font-normal text-gray-700 justify-between">
              <span>Items:</span>
              <span>
                {groupedItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </p>
            <p className="flex font-poppins font-semibold justify-between text-2xl border-t border-gray-400 pt-2">
              <span>Total:</span>
              <span>
                SAR {useBasketStore.getState().getTotalPrice().toFixed(2)}
              </span>
            </p>
          </div>

          {isSignedIn ? (
              <button
                onClick={() => {
                  setIsLoading(true)
                  router.push("/checkout");
                }}
                disabled={isLoading}
                className="mt-7 font-poppins w-full bg-black text-white px-4 py-2 rounded  hover:bg-[#1b1b1b] disabled:bg-[#2e2d2d]"
              >
                {isLoading ? "Processing..." : "Checkout"}
              </button>
          ) : (
            <SignInButton mode="modal">
              <button className="mt-7 font-poppins w-full bg-black text-white px-4 py-2 rounded hover:bg-[#1b1b1b]">
                Sign in to Checkout
              </button>
            </SignInButton>
          )}
        </div>

        <div className="h-64 lg:h-0">
          {/* Space for fixed checkout on mobile */}
        </div>
      </div>
    </div>
  );
}
