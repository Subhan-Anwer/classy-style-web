import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  const {
    orderDocId,
    orderId,
    customerName,
    customerEmail,
    phone,
    address,
    city,
    postalCode,
  } = body;

  const orderUrl = `https://classystyle.net/studio/structure/order;${orderDocId}`; // replace with real sanity studio URL

  try {
    const { error } = await resend.emails.send({
      from: "Order Bot <onboarding@resend.dev>",
      to: process.env.CLIENT_EMAIL!, // e.g. shop owner email
      subject: `📦 New Order! from ${customerName}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #111; color: white; padding: 40px 20px;">
            <h1 style="text-align: center; font-size: 32px; color: #ffffff;">📦 New Order Placed</h1>
            <div style="text-align: center; margin: 20px 0;">
                <a href="${orderUrl}" style="display: inline-block; background-color: #f59e0b; color: black; padding: 12px 24px; font-weight: bold; text-decoration: none; border-radius: 5px;">View Order in Sanity</a>
          </div>
        </div>

        <div style="background-color: white; padding: 25px; font-size: 16px; color: #000000;">
          <h2>🧾 Customer Details</h2>
          <p><strong>Name:</strong> ${customerName}</p>
          <p><strong>Email:</strong> ${customerEmail}</p>
          <p><strong>Order ID:</strong> ${orderId}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Address:</strong> ${address}, ${city}</p>
          <p><strong>Postal Code:</strong> ${postalCode}</p>
        </div>
      `,
    });

    if (error) {
      console.error("❌ Email Error:", error);
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ API Route Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
