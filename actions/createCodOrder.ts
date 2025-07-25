"use server";

import { backendClient } from "@/sanity/lib/backendClient";
import { getActiveOffer } from "@/sanity/lib/sale/getActiveOffer";
import { BasketItem } from "@/store/store";
// import { revalidatePath } from "next/cache";

type Metadata = {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  firebaseUserId: string;
  totalPrice: string;
  phone: string,
  address: string,
  city: string,
  postalCode: number,
  engravingName: string,
  note?: string,
  currency: string,
};

type GroupedBasketItems = {
  product: BasketItem["product"];
  quantity: number;
};

export async function createCodOrder(
  items: GroupedBasketItems[],
  metadata: Metadata
) {
  const { orderNumber, customerName, customerEmail, firebaseUserId, totalPrice, phone, address, city, postalCode, engravingName, note, currency} =
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

    const offer = await getActiveOffer();

    const order = await backendClient.create({
      _type: "order",
      orderId: orderNumber,
      firebaseUserId: firebaseUserId,
      customerName: customerName,
      email: customerEmail,
      phone: phone,
      address: address,
      city: city,
      postalCode: postalCode,
      engravingName: engravingName,
      note: note,
      products: sanityProducts,
      totalPrice: totalPrice,
      currency: currency,
      status: "cash-on-delivery",
      //   totalPrice: items.price ? amount_total / 100 : 0,
      offerApplied: offer?.isActive || false,
      orderDate: new Date().toISOString(),
    });

    // return { orderId: order._id};
    return order;
    
  } catch (error) {
    console.error("❌ Failed to create COD order:", error);
    throw error;
  }
}
