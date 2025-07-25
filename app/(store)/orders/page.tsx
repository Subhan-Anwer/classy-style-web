import { formatCurrency } from "@/lib/formatCurrency";
import { imageUrl } from "@/lib/imageUrl";
import Image from "next/image";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getMyOrders } from "@/sanity/lib/orders/getMyOrders";

export default async function OrdersPage() {
  const cookieStore = await cookies();
  const uid = cookieStore.get("__uid")?.value;

  if (!uid) {
    redirect("/orders/auth-check");
  }

  const orders = await getMyOrders(uid);

  const localCurrency = "SAR";

  const formatStatus = (status: string) => {
    return status
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };

  const statusStyles: Record<string, string> = {
    "cash-on-delivery": "bg-green-100 text-green-800",
    delivered: "bg-green-100 text-green-800",
    pending: "bg-gray-100 text-gray-800",
    shipped: "bg-yellow-100 text-yellow-800",
    cancelled: "bg-red-100 text-red-800",
  };

  return (
    <div className="flex flex-col font-inter items-center justify-center min-h-[85vh] bg-gray-50 p-4">
      <div className="bg-white p-4 sm:p-8 flex flex-col items-center rounded-xl shadow-lg w-full max-w-4xl">
        <h1 className="text-4xl font-playfair font-bold mx-auto text-gray-900 tracking-tight mb-8">
          My Orders
        </h1>

        {/* If No Orders Have Placed */}
        {orders.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>You haven&lsquo;t placed any orders yet.</p>
          </div>
        ) : (
          <div className="space-y-6 sm:space-y-8">
            {orders.map((order) => (
              <div
                key={order.orderId}
                className="bg-white border border-gray-400 rounded-[8px] shadow-sm overflow-hidden"
              >
                <div className="p-4 sm:p-6 border-b border-gray-300">
                  {/* Order Number */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:justify-between mb-4">
                    <div>
                      <p className="text-base text-gray-600 mb-1 font-bold">
                        Order Number:
                      </p>
                      <p className="text-sm font-mono text-green-600 break-all">
                        {order.orderId}
                      </p>
                    </div>
                    {/* Order Date */}
                    <div className="sm:text-right">
                      <p className="text-sm text-gray-600 mb-0">Order Date:</p>
                      <p className="font-medium text-sm tracking-wider">
                        {order.orderDate
                          ? new Date(order.orderDate).toLocaleDateString()
                          : "N/A"}
                      </p>
                    </div>
                  </div>

                  {/* Status & Total Amount */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mx-0 mt-0 sm:mt-4">
                    <div className="flex items-center">
                      <span className="text-sm mr-2">Status:</span>
                      <span
                        className={`px-3 py-1 rounded-[8px] text-sm font-medium ${statusStyles[order.status ?? "pending"] || "bg-gray-100 text-gray-800"}`}
                      >
                        {formatStatus(order.status ? order.status : "N/A")}
                      </span>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-sm text-gray-600">Total Amount</p>
                      <p className="text-lg font-bold">
                        {formatCurrency(
                          Number(order.totalPrice) || 0,
                          order.currency ?? localCurrency
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="px-4 py-3 sm:px-6 sm:py-4">
                  <p className="text-sm font-semibold text-gray-600 mb-3 sm:mb-4">
                    Order Items
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    {order.products?.map((product) => (
                      <div
                        key={product.product?._id}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-0 pb-4 border-b last:border-b-0"
                      >
                        <div className="flex items-center gap-3 sm:gap-4">
                          {product.product?.image && (
                            <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-md overflow-hidden">
                              <Image
                                src={imageUrl(product.product.image).url()}
                                alt={product?.product.name ?? "Product Image"}
                                className="object-cover rounded-[8px]"
                                fill
                              />
                            </div>
                          )}
                          <div>
                            <p className="font-medium text-sm sm:text-base">
                              Quantity: {product.quantity ?? "N/A"}
                            </p>
                            {order.offerApplied == true && (
                              <p className="font-medium text-sm sm:text-base">
                                Offer: +{product.quantity ?? "N/A"} Free
                              </p>
                            )}
                          </div>
                        </div>

                        <p className="text-right font-bold">
                          {(() => {
                            const isSAR = order.currency === "SAR";
                            const price = isSAR
                              ? product.product?.price
                              : product.product?.aedPrice;
                            const quantity = product.quantity ?? 1;

                            if (price == null) return "N/A";

                            return formatCurrency(
                              price * quantity,
                              order.currency ?? localCurrency
                            );
                          })()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
