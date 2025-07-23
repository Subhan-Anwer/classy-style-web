import { Resend } from "resend";
import { NextResponse } from "next/server";
import { imageUrl } from "@/lib/imageUrl";
import { SanityImageCrop, SanityImageHotspot } from "@/sanity.types";
import { getActiveOffer } from "@/sanity/lib/sale/getActiveOffer";
const resend = new Resend(process.env.RESEND_API_KEY);
  



interface Image {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
  };
  media?: unknown;
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  _type: "image";
}

interface OrderItem {
  product: {
    name: string;
    price: string;
    image: Image;
  };
  quantity: number;
}

export async function POST(req: Request) {
  const offer = await getActiveOffer();
  const body = await req.json();

  const {
    orderDocId,
    orderId,
    customerName,
    totalPrice,
    currency,
    customerEmail,
    phone,
    address,
    city,
    postalCode,
    orderItems,
    engravingName,
    note,
  } = body;

  const orderUrl = `https://classystyle.net/studio/structure/order;${orderDocId}`; // replace with real sanity studio URL

  try {
    const { error } = await resend.emails.send({
      from: "Classy Style Order <onboarding@resend.dev>",
      to: [process.env.CLIENT_EMAIL!, process.env.DEVELOPER_EMAIL!], // e.g. shop owner email
      subject: `📦 New Order! from ${customerName}`,
      html: `
        <div 
          style="font-family: 'Segoe UI', sans-serif; background-color: #121212; color: #ffffff; padding: 20px; max-width: 600px; margin: auto;">
        
        
          <div style="text-align: center; font-size: 24px; font-weight: bold; margin-bottom: 30px; color: #d7931b;">
            Classy Style
          </div>

          <h1 style="text-align: center; font-size: 32px; margin-bottom: 10px; color: #ffffff;">New Order Placed!</h1>
          <p style="text-align: center; font-size: 15px; color: #cbd5e1;">
            Order ID: ${orderId}
          </p>

          <div style="text-align: center; margin: auto; background-color: #121212;">
            
            <a href="${orderUrl}"
              style="display: inline-block; background-color: #ffffff; color: #000000; padding: 10px 20px; font-weight: bold; border-radius: 40px;">
              View Order in Sanity
            </a>
          </div>



          <div 
            style="background-color: #ffffff; color: #000000; border-radius: 10px; margin-top: 20px; padding: 20px; border-radius: 10px; ">

            <!-- Customer Details -->
            <div style="margin-bottom: 16px;">
              
              <h3 style="font-size: 22px; margin-bottom: 14px; color: #000000;">🧾 Customer Details</h3>
              <p style="font-size: 16px; margin-bottom: 7px; color: #000000;"><strong>Name:</strong> ${customerName}</p>
              <p style="font-size: 16px; margin-bottom: 7px; color: #000000;"><strong>Email:</strong> ${customerEmail}</p>
              <p style="font-size: 16px; margin-bottom: 7px; color: #000000;"><strong>Phone:</strong> ${phone}</p>
              <p style="font-size: 16px; margin-bottom: 7px; color: #000000;"><strong>Address:</strong> ${address}, ${city} - ${postalCode}</p>
              <p style="font-size: 16px; margin-bottom: 7px; color: #000000;"><strong>Engrave Name on Jewelry:</strong> ${engravingName}</p>
              <p style="font-size: 16px; margin-bottom: 7px; color: #000000;"><strong>Special Note by customer:</strong> ${note}</p>
            
            </div>


            <hr style="border: none; height: 1px; background-color: #334155; margin-top: 8px; margin-bottom: 8px;" />

            <!-- Order Details -->
            <div>
              <h3 style="font-size: 22px; margin-bottom: 7px;">📦 Order Details</h3>

              <h3 style="font-size: 13px; margin-bottom: 14px;">🎁 Offer Applied: ${offer?.isActive ? "Buy 1 Get 1 Free" : "No Offer"}</h3>

              <div>
                <!-- Start of loop through products -->
                ${orderItems
                  .map((item: OrderItem) => {
                    const name = item.product?.name || "Unnamed";
                    const price = item.product?.price || "N/A";
                    const quantity = item.quantity || 1;
                    const imageSrc = imageUrl(item.product?.image).width(200).height(200).url() || "https://images.pexels.com/photos/32888638/pexels-photo-32888638.jpeg";

                    return `
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
                        <tr>
                          <td width="90" style="padding: 10px;">
                            <img src="${imageSrc}" alt="image" width="90" height="90" style="border-radius: 6px; object-fit: cover;" />
                          </td>
                        <td style="padding: 10px;">
                          <p style="margin: 0; font-weight: bold; font-size: 14px; color: #000000;"><strong>${name}</strong></p>
                          <p style="margin: 2px 0; font-size: 14px; color: #000000;">Qty: ${quantity}</p>
                          <p style="margin: 2px 0; font-size: 14px; color: #000000;">Price: ${currency} ${price}</p>
                        </td>
                        </tr>
                      </table>
                      <hr style="border: none; height: 1px; background-color: #334155; margin-top: 8px; margin-bottom: 8px;" />
                    `;
                  })
                  .join("")}
                <!-- End of loop -->
              </div>

              <h3 style="font-size: 23px; margin-top: 20px;">Total: ${currency} ${totalPrice}</h3>

            </div>
          </div>
  
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
