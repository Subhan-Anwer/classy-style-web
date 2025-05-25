// app/checkout/page.tsx

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
    <div className="max-w-md mx-auto p-4 py-10 space-y-4">
      

      

      <button
        onClick={handlePlaceOrder}
        disabled={loading}
        className="bg-black text-white w-full py-2 rounded"
      >
        {loading ? "Placing Order..." : "Place Order"}
      </button>
    </div>
  );
}