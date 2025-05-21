// import stripe from "@/lib/stripe";
// import { backendClient } from "@/sanity/lib/backendClient";
// import { headers } from "next/headers";
// import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";
// import { Metadata } from "@/actions/createCheckoutSession";

// export async function POST(req: NextRequest) {
//     const body = await req.text();
//     const headersList = await headers();
//     const sig = headersList.get("stripe-signature");

//     console.log("🟢 Webhook HIT: Received Stripe event.");

//     if (!sig) {
//         console.error("❌ No Stripe signature found in headers.");
//         return NextResponse.json({ error: "No signature" }, { status: 400 });
//     }

//     const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

//     if (!webhookSecret) {
//         console.error("❌ Stripe webhook secret is not set in .env file.");
//         return NextResponse.json(
//             { error: "Stripe webhook secret is not set" },
//             { status: 400 }
//         );
//     }

//     let event: Stripe.Event;
//     try {
//         event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
//         console.log("✅ Webhook verified successfully:", event.type);
//     } catch (err) {
//         console.error("❌ Webhook signature verification failed:", err);
//         return NextResponse.json(
//             { error: `Webhook Error: ${err}` },
//             { status: 400 }
//         );
//     }

//     if (event.type === "checkout.session.completed") {
//         const session = event.data.object as Stripe.Checkout.Session;
//         console.log("💳 Checkout session completed:", session);

//         try {
//             const order = await createOrderInSanity(session);
//             console.log("🎉 Order created in Sanity successfully:", order);
//         } catch (err) {
//             console.error("❌ Error creating order in Sanity:", err);
//             return NextResponse.json(
//                 { error: "Error creating order in Sanity" },
//                 { status: 500 }
//             );
//         }
//     }

//     return NextResponse.json({ received: true });
// }

// async function createOrderInSanity(session: Stripe.Checkout.Session) {
//     const {
//         id,
//         amount_total,
//         currency,
//         metadata,
//         payment_intent,
//         customer,
//         total_details,
//     } = session;

//     console.log("📦 Creating order in Sanity...");
//     console.log("📝 Session Metadata:", metadata);

//     if (!metadata) {
//         console.error("❌ Missing metadata in Stripe session.");
//         throw new Error("Missing metadata in Stripe session.");
//     }

//     const { orderNumber, customerName, customerEmail, clerkUserId } = 
//         metadata as Metadata;

//     console.log("🔍 Fetching line items...");
//     const lineItemsWithoutProduct = await stripe.checkout.sessions.listLineItems(
//         id,
//         {
//             expand: ["data.price.product"],
//         }
//     );

//     console.log("🛒 Line items received:", lineItemsWithoutProduct.data);

//     const sanityProducts = lineItemsWithoutProduct.data.map((item) => {
//         const productId = (item.price?.product as Stripe.Product)?.metadata?.id;
//         if (!productId) {
//             console.error("❌ Missing product ID in metadata:", item);
//             throw new Error("Missing product ID in metadata.");
//         }

//         return {
//             _key: crypto.randomUUID(),
//             product: {
//                 _type: "reference",
//                 _ref: productId,
//             },
//             quantity: item.quantity || 0,
//         };
//     });

//     console.log("📜 Sanity products to save:", sanityProducts);

//     const order = await backendClient.create({
//         _type: "order",
//         orderNumber,
//         stripeCheckoutSessionId: id,
//         stripePaymentIntentId: payment_intent,
//         customerName,
//         stripeCustomerId: customer,
//         clerkUserId,
//         email: customerEmail,
//         currency,
//         amountDiscount: total_details?.amount_discount
//             ? total_details.amount_discount / 100
//             : 0,
//         products: sanityProducts,
//         totalPrice: amount_total ? amount_total / 100 : 0,
//         status: "paid",
//         orderDate: new Date().toISOString(),
//     });

//     console.log("✅ Order successfully saved in Sanity:", order);
//     return order;
// }
