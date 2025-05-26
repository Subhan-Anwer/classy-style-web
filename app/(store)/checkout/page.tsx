"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useBasketStore } from "@/store/store";
import { createCodOrder } from "@/actions/createCodOrder";

export default function CheckoutPage() {
  const router = useRouter();
  const { user, isSignedIn } = useUser();
  const groupedItems = useBasketStore((state) => state.getGroupedItems());


  const [loading, setLoading] = useState(false);

  const handlePlaceOrder = async () => {
    if (!isSignedIn || groupedItems.length === 0) return;

    setLoading(true);

    try {
      const metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: user?.fullName ?? "Unknown",
        customerEmail: user?.emailAddresses[0].emailAddress ?? "Unknown",
        clerkUserId: user.id,
        totalPrice: useBasketStore.getState().getTotalPrice().toFixed(2)
      };

      const result = await createCodOrder(groupedItems, metadata);

      if (result._id) {
        router.push(`/success?orderId=${result._id}`);
      } else {
        alert("❌ Failed to place order.");
      }
    } catch (error) {
      console.error("❌ Error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="bg-gray-50">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-5xl lg:text-6xl font-playfair font-bold text-center text-black mb-10 font-poppins">
        Just One Last Step
      </h1>

      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-[10px] p-6 md:p-10 border border-gray-400">
        <div className="flex flex-col md:flex-row gap-10 pt-4 md:pt-0">
          {/* Section 1: Contact / Shipping Info */}
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black font-poppins">
              Delivery Information
            </h2>
            <form className="space-y-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-[#bdbdbd] bg-[#f8f8f8] px-4 py-3 rounded-[6px] font-poppins text-black"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full border border-[#bdbdbd] bg-[#f8f8f8] px-4 py-3 rounded-[6px] font-poppins text-black"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full border border-[#bdbdbd] bg-[#f8f8f8] px-4 py-3 rounded-[6px] font-poppins text-black"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full border border-[#bdbdbd] bg-[#f8f8f8] px-4 py-3 rounded-[6px] font-poppins text-black"
              />
            </form>
          </div>

          {/* Section 2: Customization Info */}
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black font-poppins">
              Jewelry Customization
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name to Engrave or Print"
                className="w-full border border-[#bdbdbd] bg-[#f8f8f8] px-4 py-3 rounded-[6px] font-poppins text-black"
              />
              <input
                type="text"
                placeholder="Special Message or Instructions"
                className="w-full border border-[#bdbdbd] bg-[#f8f8f8] px-4 py-3 rounded-[6px] font-poppins text-black"
              />
            </form>
          </div>
        </div>

        {/* Button goes here - below both sections */}
        <div className="mt-10">
          <button
            onClick={handlePlaceOrder}
            disabled={loading}
            className="bg-black text-white w-full py-3 rounded-[6px] text-lg font-semibold font-poppins tracking-wide transition-opacity duration-300 disabled:opacity-60"
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </div>
      </div>
    </div>
    </section>
      // <button
      //   onClick={handlePlaceOrder}
      //   disabled={loading}
      //   className="bg-black text-white w-full py-2 rounded"
      // >
      //   {loading ? "Placing Order..." : "Place Order"}
      // </button>
  );
}