import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);



export async function POST(req: Request) {
  const body = await req.json();

  const { orderId, customerName, products, totalPrice, currency } = body;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Order Bot <order@classystyle.net>',
      to: process.env.CLIENT_EMAIL!, // e.g. shop owner email
      subject: `📦 New Order! from ${customerName}`,
      html: `
        <h2>New Order Details</h2>
        <p><strong>Customer:</strong> ${customerName}</p>
        <p><strong>Order ID:</strong> ${orderId}</p>
        <p><strong>Currency:</strong> ${currency}</p>
        <h3>Products:</h3>
        <ul>
          ${products
            .map(
              (p: any) =>
                `<li>${p.name} (x${p.quantity}) - ${currency} ${p.price.toFixed(2)}</li>`
            )
            .join('')}
        </ul>
        <p><strong>Total Price:</strong> ${currency} ${totalPrice}</p>
      `,
    });

    if (error) {
      console.error("❌ Email Error:", error);
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ API Route Error:", err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
