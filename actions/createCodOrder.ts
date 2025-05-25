"use server";

import { backendClient } from "@/sanity/lib/backendClient";
import { BasketItem } from "@/store/store";
import { revalidatePath } from "next/cache";

type Metadata = {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  clerkUserId: string;
  totalPrice: string;
};

type GroupedBasketItems = {
  product: BasketItem["product"];
  quantity: number;
};

export async function createCodOrder(
  items: GroupedBasketItems[],
  metadata: Metadata
) {
  const { orderNumber, customerName, customerEmail, clerkUserId, totalPrice } =
    metadata as Metadata;

    
  try {
    const sanityProducts = items.map((item) => ({
      _key: crypto.randomUUID(),
      product: {
        _type: "reference",
        _ref: item.product._id,
      },
      quantity: item.quantity,
    }));

    const order = await backendClient.create({
      _type: "order",
      orderId: orderNumber,
      customerName: customerName,
      clerkUserId: clerkUserId,
      email: customerEmail,
      totalPrice: totalPrice,
      currency: "SAR",
      products: sanityProducts,
    //   totalPrice: items.price ? amount_total / 100 : 0,
      status: "cash-on-delivery",
      orderDate: new Date().toISOString(),
    });

    // return { orderId: order._id};
    return order;
  } catch (error) {
    console.error("❌ Failed to create COD order:", error);
    throw error;
  }
}
